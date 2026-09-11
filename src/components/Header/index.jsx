import style from './style.module.scss';
import Button from '../ui/Button';
import Icon from '../ui/Icons';
import logo from '../../assets/img/logo-bb.webp';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={style.header}>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <Link to="/cardpage">
        <Button>
          <Icon name="menu" />
          <span className={style.btn}>Каталог</span>
        </Button>
      </Link>
    </header>
  );
};

export default Header;
