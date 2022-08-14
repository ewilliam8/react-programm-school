import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

function Header(props) {
  return (
    <div className={styles.Header}>
      <header className="d-flex justify-between align-center">
      <div className="d-flex">
        <Link to="/">
          <div className="headerInfo">
            <h3 className="ml-50">Школа Программ</h3>
          </div>
        </Link>
      </div>
      <ul className="d-flex">
        <Link to="/oreder">
          <li className="mr-15">
            <span>Записаться</span>
          </li>
        </Link>
        <li onClick={props.onClickCart} className="mr-15 cu-p">
          <span>Личный кабинет</span>
        </li>
      </ul>
      </header>
    </div>
  );
}

export default Header;