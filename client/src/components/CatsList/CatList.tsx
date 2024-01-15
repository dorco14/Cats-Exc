import { Fragment, useEffect, useCallback, useState } from 'react';
import { useCats } from '../../contexts/cats.context';
import { useStyles } from './style';
import { Cat } from './components/Cat';
import { FilterInput } from '../common/components/FilterInput';
import { NavLink } from 'react-router-dom';
import { Button } from '../common/components/Button';
import type { TCat } from '../../types/cat';
import debounce from 'lodash.debounce';

const PLACE_HOLDER_TEXT: string = 'Search for a cat or mouse';
const NO_CATS_FOUND: string = 'No Cats Found';
const ADD_CAT_TEXT: string = 'Add Cat';

export const CatList = () => {
  const store = useCats();
  const styles = useStyles();
  const [filterData, setFilterData] = useState<TCat[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  const debouncedGetCats = useCallback(
    debounce((filter) => {
      getCats(filter);
    }, 1000),
    []
  );

  const handleFilter = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedGetCats(e.target.value);
  }, []);

  const getCats = useCallback(async (filter?: string): Promise<void> => {
    try {
      const cats = await store.actions.fetchCats(filter);
      setFilterData(cats || []);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getCats();
  }, []);

  return (
    <div>
      {loading ? (<div className={styles.spinnerContainer}>
        <div className={styles.spinner}></div>
      </div>) :
        (<div>
          <FilterInput placeholder={PLACE_HOLDER_TEXT} onChange={handleFilter} />
          <div className={styles.cardContainer}>
            {
              filterData.length > 0 ?
                filterData.map((cat) => (
                  <Fragment key={cat.id}>
                    <Cat cat={cat} />
                  </Fragment>
                )) : <div className={styles.errorText}>{NO_CATS_FOUND}</div>
            }
          </div>
          <NavLink to="/add-cat">
            <Button text={ADD_CAT_TEXT} />
          </NavLink>
        </div>)}
    </div>
  );
};