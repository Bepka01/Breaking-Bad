import style from './style.module.scss';

const ViewToggle = ({ variant, setVariant }) => {
  return (
    <div className={style.settingList}>
      <button
        type="button"
        className={`${style.viewButton} ${
          variant === 'row' ? style.active : ''
        }`}
        onClick={() => setVariant('row')}
      >
        <span className={style.rowIcon}>
          <span />
          <span />
        </span>
      </button>

      <span className={style.divider} />

      <button
        type="button"
        className={`${style.viewButton} ${
          variant === 'grid' ? style.active : ''
        }`}
        onClick={() => setVariant('grid')}
      >
        <span className={style.gridIcon}>
          <span />
          <span />
          <span />
          <span />
        </span>
      </button>
    </div>
  );
};

export default ViewToggle;
