import style from './style.module.scss';

const Loader = ({ size = 40 }) => {
  return (
    <span
      className={style.loader}
      style={{
        width: size,
        height: size,
      }}
    />
  );
};

export default Loader;
