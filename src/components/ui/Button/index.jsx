import classNames from 'classnames';
import style from './style.module.scss';

const Button = ({
  children,
  variant = 'default',
  className,
  onClick,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(style.button, style[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
