import Button from '../../ui/Button';
import Icon from '../../ui/Icons';
import style from './style.module.scss';
import { CARDS_PER_PAGE } from '../../../constants/constants';

const Pagination = ({ page, totalPages, setPage, setLimit, limit }) => {
  return (
    <div className={style.pagination}>
      <div className={style.pages}>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          <Icon name="arrowLeft" color="black" />
        </Button>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <Button
              variant="pagination"
              key={pageNumber}
              onClick={() => setPage(pageNumber)}
              className={`${style.pageButton} ${
                page === pageNumber ? style.active : ''
              }`}
            >
              {pageNumber}
            </Button>
          )
        )}

        <Button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          <Icon name="arrowRight" color="black" />
        </Button>
      </div>
      <div className={style.cardsPerPage}>
        <span>show cards:</span>

        {CARDS_PER_PAGE.map((count) => (
          <Button
            key={count}
            onClick={() => {
              setPage(1);
              setLimit(count);
            }}
            className={`${style.pageButton} ${
              limit === count ? style.active : ''
            }`}
          >
            {count}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
