import Icon from '../Icons';

import cn from 'classnames';

import style from './style.module.scss';

const Input = ({ className = '', searchValue, setSearchValue, ...props }) => {
  return (
    <div className={cn(style.wrapper, className)}>
      <input
        {...props}
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        className={style.input}
      />

      <div className={style.search}>
        <Icon name="search" color="orange" size={22} />
        <span>Find</span>
      </div>
    </div>
  );
};

export default Input;
