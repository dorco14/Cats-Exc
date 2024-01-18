import { Fragment, useEffect, useCallback, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import debounce from 'lodash.debounce';
import { Cat } from './components/Cat';
import axios from 'axios';
import { useStyles } from './style';
import { useCats } from '../../contexts/cats.context';
import { FilterInput } from '../common/components/FilterInput';
import { Button } from '../common/components/Button';
import type { TCat } from '../../types/cat';

const PLACE_HOLDER_TEXT = 'Search for a cat or mouse';
const NO_CATS_FOUND = 'No Cats Found';
const ADD_CAT_TEXT = 'Add Cat';
const DEBOUNCE_TIME = 300;

export const CatList = () => {
  const store = useCats();
  const styles = useStyles();
  const [filterData, setFilterData] = useState<TCat[]>([]);
  const [loading, setLoading] = useState(true);
  const filterRef = useRef('');
  const abortController = useRef(new AbortController());

  const getCats = useCallback(async (filter?: string): Promise<void> => {
    try {
      const signal = abortController.current.signal;
      const cats = await store.actions.fetchCats(filter, signal);

      setFilterData(cats || []);
      setLoading(false);

    } catch (error) {
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

    }, DEBOUNCE_TIME),
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
                  <Cat cat={cat} key={cat.id} />
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