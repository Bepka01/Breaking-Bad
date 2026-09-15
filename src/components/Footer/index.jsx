import style from './style.module.scss';
import Icon from '../ui/Icons';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContent}>
        <span>2026</span>
        <div className={style.socialMedia}>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <Icon name="instagram" color="gray" />
          </a>

          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <Icon name="facebook" color="gray" />
          </a>

          <a href="https://telegram.org" target="_blank" rel="noreferrer">
            <Icon name="telegram" color="gray" />
          </a>

          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <Icon name="youtube" color="gray" />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
