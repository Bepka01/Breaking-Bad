import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

import { getCharacters } from '../../api/characters';
import Loader from '../../components/ui/Loader';
import CharacterCard from '../CharacterCard';
import Input from '../ui/Input';
import Pagination from '../ui/Pagination';
import ViewToggle from '../ViewToggle';
import style from './style.module.scss';

const CharactersList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [variant, setVariant] = useState('grid');
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [error, setError] = useState(false);
  const [debouncedSearch] = useDebounce(searchValue, 500);
  useEffect(() => {
    const offset = (page - 1) * limit;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);

    getCharacters({
      limit,
      offset,
      name: debouncedSearch.trim(),
    })
      .then((data) => {
        setData(data);
        setError(false);
      })
      .catch((error) => {
        console.error(error);
        setData([]);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page, limit, debouncedSearch]);

  useEffect(() => {
    getCharacters({ limit: 1000 })
      .then((total) => {
        setTotalCharacters(total);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const totalPages = Math.ceil(totalCharacters / limit);

  return (
    <div className={style.listContainer}>
      <Input
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        variant="search"
        placeholder="Поиск персонажа"
        className={style.listInput}
      />

      <div className={style.catalogHeader}>
        <h2>Catalog</h2>

        <ViewToggle variant={variant} setVariant={setVariant} />
      </div>

      <div className={`${style.list} ${style[variant]}`}>
        {!isLoading && error && (
          <div className={style.message}>
            Что-то пошло не так. Попробуйте позже.
          </div>
        )}

        {!isLoading && !error && data.length === 0 && (
          <div className={style.message}>
            {searchValue.trim()
              ? 'По вашему запросу ничего не найдено.'
              : 'Персонажи не найдены.'}
          </div>
        )}

        {!error &&
          data.map((item) => (
            <CharacterCard
              id={item.id}
              variant={variant}
              key={item.id}
              name={item.name}
              img={item.image_url}
              birthday={item.birth_date}
              fullName={item.full_name}
            />
          ))}

        {isLoading && (
          <div className={style.loaderWrapper}>
            <Loader size="100px" />
          </div>
        )}
      </div>

      {!searchValue.trim() && (
        <div className={style.listFooter}>
          <Pagination
            limit={limit}
            page={page}
            totalPages={totalPages}
            setPage={setPage}
            setLimit={setLimit}
          />
        </div>
      )}
    </div>
  );
};

export default CharactersList;
