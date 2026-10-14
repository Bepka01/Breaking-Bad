import Icon from '../ui/Icons';
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
        <Icon name="horizontal" />
      </button>

      <span className={style.divider} />

      <button
        type="button"
        className={`${style.viewButton} ${
          variant === 'grid' ? style.active : ''
        }`}
        onClick={() => setVariant('grid')}
      >
        <Icon name="grid" />
      </button>
    </div>
  );
};

export default ViewToggle;
