import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo-bb.webp';
import Button from '../ui/Button';
import Icon from '../ui/Icons';
import style from './style.module.scss';

const Header = () => {
  return (
    <header className={style.header}>
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <Link to="/characters">
        <Button>
          <Icon name="menu" />
          <span className={style.btn}>Каталог</span>
        </Button>
      </Link>
    </header>
  );
};

export default Header;
