import style from './style.module.scss';
import { useEffect, useState } from 'react';
import { getDataAboutCharacters } from '../../api/characters';

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
        <div key={item.character.id}>{item.character.name}</div>
      ))}
    </div>
  );
};

export default CharactersList;
