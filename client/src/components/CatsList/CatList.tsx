import { Fragment, useEffect, useCallback, useState } from 'react';
import { useCats } from '../../contexts/cats.context';
import { useStyles } from './style';
import { Cat } from './components/Cat';
import { FilterInput } from '../common/components/FilterInput';
import { NavLink } from 'react-router-dom';
import { Button } from '../common/components/Button';
import type { TCat } from '../../types/cat';
import type { TMouse } from '../../types/mouse';

const PLACE_HOLDER_TEXT: string = 'Search for a cat or mouse';
const NO_CATS_FOUND: string = 'No Cats Found';
const ADD_CAT_TEXT: string = 'Add Cat';

export const CatList = () => {
  const store = useCats();
  const styles = useStyles();
  const [filterData, setFilterData] = useState<TCat[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  const getCats = useCallback(async (): Promise<void> => {
    try {
      const cats = await store.actions.fetchCats();
      setFilterData(cats || []);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, []);

  const filterCats = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    const filteredData = store.state.cats.filter((cat: TCat) => {
      let catName: string = `${cat.firstName.toLowerCase()} ${cat.lastName.toLowerCase()}`;
      let miceName: string = cat.mice.map((mouse: TMouse) => mouse.name.toLowerCase()).join(' ');
      if (catName.includes(event.target.value.toLowerCase()) || miceName.includes(event.target.value.toLowerCase())) {
        return true;
      }
    })
    setFilterData(filteredData);
  }, [filterData]);

  useEffect(() => {
    getCats();
  }, []);

  return (
    <div>
      {loading ? (<div className={styles.spinnerContainer}>
        <div className={styles.spinner}></div>
      </div>) :
        (<div>
          <FilterInput placeholder={PLACE_HOLDER_TEXT} onChange={filterCats} />
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