import style from './style.module.scss';

const CharacterCard = ({ character }) => {
  return (
    <article className={style.card}>
      <div className={style.imageWrapper}>
        <img
          className={style.image}
          src={character.image_url}
          alt={character.name}
        />
      </div>

      <div className={style.info}>
        <span className={style.status}>Alive</span>

        <h3 className={style.name}>{character.name}</h3>

        <p className={style.birthday}>{character.birth_date}</p>
      </div>
    </article>
  );
};

export default CharacterCard;
