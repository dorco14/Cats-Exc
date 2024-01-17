import { Fragment, useEffect, useCallback, useState, useRef } from 'react';
import { useCats } from '../../contexts/cats.context';
import { useStyles } from './style';
import { Cat } from './components/Cat';
import { FilterInput } from '../common/components/FilterInput';
import { NavLink } from 'react-router-dom';
import { Button } from '../common/components/Button';
import type { TCat } from '../../types/cat';
import debounce from 'lodash.debounce';
import axios from 'axios';

const PLACE_HOLDER_TEXT: string = 'Search for a cat or mouse';
const NO_CATS_FOUND: string = 'No Cats Found';
const ADD_CAT_TEXT: string = 'Add Cat';

export const CatList = () => {
  const store = useCats();
  const styles = useStyles();
  const [filterData, setFilterData] = useState<TCat[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const filterRef = useRef<string>('');
  const abortController = useRef<AbortController>(new AbortController());

  const getCats = useCallback(async (filter?: string): Promise<void> => {
    try {
      const signal = abortController.current.signal;
      const cats = await store.actions.fetchCats(filter, signal);

      setFilterData(cats || []);
      setLoading(false);

    } catch (error) {
      if (!axios.isCancel(error)) {
        console.log(error);
      }
      console.log(error);
      setLoading(false);
    }
  }, []);

  const debouncedGetCats = useCallback(
    debounce((filter) => {
      if (filter !== filterRef.current) {
        abortController.current.abort();
        abortController.current = new AbortController();
        filterRef.current = filter;
        getCats(filter);
      }

    }, 300),
    []
  );

  const handleFilter = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedGetCats(event.target.value);
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