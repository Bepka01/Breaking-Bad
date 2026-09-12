import style from './style.module.scss';
import { useEffect, useState } from 'react';
import { getDataAboutCharacters } from '../../api/characters';
import CharacterCard from '../CharacterCard';

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
    <div className={style.list}>
      {data.map((item) => (
        <CharacterCard key={item.character.id} character={item} />
      ))}
    </div>
  );
};

export default CharactersList;
