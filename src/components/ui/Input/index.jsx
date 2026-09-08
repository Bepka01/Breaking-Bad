import style from './style.module.scss';

const Input = ({ className = '', ...props }) => {
  return <input className={`${style.input} ${className}`} {...props} />;
};

export default Input;
