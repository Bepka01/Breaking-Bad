import style from './style.module.scss';
import { CARDS_PER_PAGE } from '../../../constants/constants';

const ListSetting = ({ setPage, setLimit }) => {
  return (
    <div className={style.listSetting}>
      <span>show cards :</span>
      {CARDS_PER_PAGE.map((count) => {
        return (
          <button
            key={count}
            onClick={() => {
              setPage(1);
              setLimit(count);
            }}
          >
            {count}
          </button>
        );
      })}
    </div>
  );
};

export default ListSetting;
