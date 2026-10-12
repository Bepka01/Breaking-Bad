import cn from 'classnames';

import Icon from '../Icons';
import style from './style.module.scss';

const Input = ({
  className = '',

  variant = 'default',
  ...props
}) => {
  return (
    <div className={cn(style.wrapper, className)}>
      <input
        {...props}

        className={style.input}
      />

      {variant === 'search' && (
        <div className={style.search}>
          <Icon name="search" color="orange" size={22} />
          <span>Find</span>
        </div>
      )}
    </div>
  );
};

export default Input;
