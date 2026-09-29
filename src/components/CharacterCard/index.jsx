import style from './style.module.scss';

import { Link } from 'react-router-dom';

const CharacterCard = ({ id, name, img, birthday, variant }) => {
  return (
    <Link
      to={`/characters/${id}`}
      state={{
        name,
        img,
        birthday,
      }}
      className={`${style.card} ${style[variant]} ${style.characterLink}`}
    >
      <div className={style.imageWrapper}>
        <img className={style.image} src={img} alt={name} />
      </div>

      <div className={style.info}>
        <span className={style.status}>Alive</span>

        <h3 className={style.name}>{name}</h3>

        <p className={style.birthday}>{birthday}</p>
      </div>
    </Link>
  );
};

export default CharacterCard;
