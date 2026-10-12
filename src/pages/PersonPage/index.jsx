import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getCharacters, getQuote } from '../../api/characters';
import Icon from '../../components/ui/Icons';
import style from './style.module.scss';

const PersonPage = () => {
  const { id } = useParams();

  const [character, setCharacter] = useState(null);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const data = await getCharacters({ id });

      setCharacter(data);

      const quote = await getQuote(id);

      setQuote(quote);
    };

    fetchCharacter();
  }, [id]);

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.personPage}>
      <Link to="/characters" className={style.back}>
        <Icon name="arrowLeft" size={20} color="#f1b926" />
        <span>Back to Catalog</span>
      </Link>

      <div className={style.content}>
        <div className={style.imageWrapper}>
          <img
            src={character.image_url}
            alt={character.name}
            className={style.image}
          />
        </div>

        <div className={style.info}>
          <span className={style.status}>Alive</span>

          <h1 className={style.name}>{character.name}</h1>

          <p className={style.infoItem}>
            Date of Birth: <span>{character.birth_date}</span>
          </p>

          <p className={style.infoItem}>
            Nick-hv: <span>{character.full_name}</span>
          </p>

          <div className={style.quote}>
            <span>Quote:</span> {quote?.quote}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonPage;
