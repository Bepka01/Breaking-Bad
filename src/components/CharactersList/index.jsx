import style from './style.module.scss';
import { useEffect, useState } from 'react';
import { getDataAboutCharacters } from '../../api/characters';
import CharacterCard from '../CharacterCard';
import Pagination from './Pagination';
import Input from '../ui/Input';

import { TOTAL_CHARACTERS } from '../../constants/constants';

const CharactersList = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);

  const totalPages = Math.ceil(TOTAL_CHARACTERS / limit);

  useEffect(() => {
    const offset = (page - 1) * limit;
    getDataAboutCharacters(limit, offset)
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [page, limit]);
  return (
    <div className={style.listContainer}>
      <Input placeholder="Поиск персонажа" className={style.listInput} />
      <div className={style.catalogHeader}>
        <h2>Catalog</h2>
        <div className={style.settingList}>
          <span>123</span>
          <span>123</span>
        </div>
      </div>
      <div className={style.list}>
        {data.map((item) => (
          <CharacterCard key={item.id} character={item} />
        ))}
      </div>
      <div className={style.listFooter}>
        <Pagination
          limit={limit}
          page={page}
          totalPages={totalPages}
          setPage={setPage}
          setLimit={setLimit}
        />
      </div>
    </div>
  );
};

export default CharactersList;
