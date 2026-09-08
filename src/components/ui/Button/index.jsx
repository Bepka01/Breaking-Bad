import style from './style.module.scss';

const Button = ({ children, variant = 'default', onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`${style.button} ${style[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
