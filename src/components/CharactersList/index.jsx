import style from './style.module.scss';
import { useEffect, useState } from 'react';
import { getDataAboutCharacters } from '../../api/characters';
import CharacterCard from '../CharacterCard';
import Input from '../ui/Input';

const CharactersList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataAboutCharacters()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
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
          <CharacterCard key={item.character.id} character={item} />
        ))}
      </div>
    </div>
  );
};

export default CharactersList;
