import style from './style.module.scss';

const Person = ({ name, img, birthday, fullName }) => {
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
            <span>full name:</span>
            {fullName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Person;
