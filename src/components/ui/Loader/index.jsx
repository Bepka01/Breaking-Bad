import style from './style.module.scss';

const Loader = ({ size = 40, className = '', ...props }) => {
  return (
    <span
      className={`${style.loader} ${className}`}
      style={{
        width: size,
        height: size,
      }}
      {...props}
    />
  );
};

export default Loader;
