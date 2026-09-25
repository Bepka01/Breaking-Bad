import style from './style.module.scss';

const Person = ({ name, img, birthday, nickname, quote }) => {
  return (
    <div className={style.person}>
      <div className={style.imageWrapper}>
        <img className={style.image} src={img} alt={name} />
      </div>

      <div className={style.info}>
        <span className={style.status}>Alive</span>

        <h1 className={style.name}>{name}</h1>

        <div className={style.details}>
          <p>
            <span>Date of Birth:</span>
            {birthday}
          </p>

          <p>
            <span>Nickname:</span>
            {nickname}
          </p>

          <p>
            <span>Quote:</span>
            {quote}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Person;
