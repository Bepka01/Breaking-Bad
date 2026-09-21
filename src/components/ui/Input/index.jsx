import style from './style.module.scss';

const Input = ({ className = '', searchValue, setSearchValue, ...props }) => {
  return (
    <input
      {...props}
      value={searchValue}
      onChange={(e) => {
        setSearchValue(e.target.value);
      }}
      className={`${style.input} ${className}`}
    />
  );
};

export default Input;
