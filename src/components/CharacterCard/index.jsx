import style from './style.module.scss';

const CharacterCard = ({ name, img, birthday, variant }) => {
  return (
    <div className={`${style.card} ${style[variant]}`}>
      <div className={style.imageWrapper}>
        <img className={style.image} src={img} alt={name} />
      </div>

      <div className={style.info}>
        <span className={style.status}>Alive</span>

        <h3 className={style.name}>{name}</h3>

        <p className={style.birthday}>{birthday}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
