import Button from '../../ui/Button';
import Icon from '../../ui/Icons';
import style from './style.module.scss';

const Pagination = ({ page, totalPages, setPage }) => {
  return (
    <div className={style.pagination}>
      <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
        <Icon name="arrowLeft" color="black" />
      </Button>

      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (pageNumber) => (
          <Button key={pageNumber} onClick={() => setPage(pageNumber)}>
            {pageNumber}
          </Button>
        )
      )}

      <Button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
        <Icon name="arrowRight" color="black" />
      </Button>
    </div>
  );
};

export default Pagination;
