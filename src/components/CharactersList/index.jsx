import { useEffect, useState } from 'react';

import {
  getAllCharacters,
  getDataAboutCharacters,
  getTotalCharacters,
} from '../../api/characters';
import Loader from '../../components/ui/Loader';
import CharacterCard from '../CharacterCard';
import Input from '../ui/Input';
import ViewToggle from '../ViewToggle';
import Pagination from './Pagination';
import style from './style.module.scss';

const CharactersList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [variant, setVariant] = useState('grid');
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [totalCharacters, setTotalCharacters] = useState(0);

  useEffect(() => {
    setLoading(true);

    if (searchValue.trim()) {
      getAllCharacters()
        .then((characters) => {
          const filteredCharacters = characters.filter((character) =>
            character.name
              .toLowerCase()
              .includes(searchValue.trim().toLowerCase())
          );

          setData(filteredCharacters);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setLoading(false);
        });

      return;
    }

    const offset = (page - 1) * limit;

    getDataAboutCharacters(limit, offset)
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page, limit, searchValue]);

  useEffect(() => {
    getTotalCharacters()
      .then((total) => {
        setTotalCharacters(total);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const filterData = data.filter((value) => {
    return value.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  const totalPages = Math.ceil(totalCharacters / limit);
  return (
    <div className={style.listContainer}>
      <Input
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        placeholder="Поиск персонажа"
        className={style.listInput}
      />
      <div className={style.catalogHeader}>
        <h2>Catalog</h2>
        <ViewToggle variant={variant} setVariant={setVariant} />
      </div>
      <div className={`${style.list} ${style[variant]}`}>
        {isLoading ? (
          <div className={style.loaderWrapper}>
            <Loader size="100px" />
          </div>
        ) : (
          filterData.map((item) => (
            <CharacterCard
              id={item.id}
              variant={variant}
              key={item.id}
              name={item.name}
              img={item.image_url}
              birthday={item.birth_date}
            />
          ))
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
