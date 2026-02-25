import { NavLink, Link } from "react-router-dom";
import styles from './Header.module.sass';
import logo from '@/shared/assets/images/Logo.png';

export const Header = () => {
  return (
    <header className={styles.header}>
      
      {/* Верхняя синяя полоска */}
      <div className={styles.topBar}>
        <div className={styles.topContainer}>
          <div className={styles.promo}>
            Мы снизили цены на 20%. Успейте заказать по самой выгодной цене!
          </div>

          <div className={styles.contacts}>
            <span>Москва</span>
            <a href="tel:+74956779580">(495) 677-95-80</a>
          </div>
        </div>
      </div>

      {/* Основная навигация */}
      <div className={styles.navWrapper}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Link to="/"><img src={logo} alt="logo" /></Link>
          </div>

          <nav>
            <ul className={styles.nav}>
              
              <li className={styles.dropdown}>
                <span>Цены</span>
                <ul className={styles.menu}>
                  <li><NavLink to="/companies">Компаниям</NavLink></li>
                  <li><NavLink to="/individuals">Физ. лицам</NavLink></li>
                </ul>
              </li>

              <li><NavLink to="/companies">Компаниям</NavLink></li>
              <li><NavLink to="/individuals">Частным лицам</NavLink></li>

              <li className={styles.dropdown}>
                <span>Работа у нас</span>
                <ul className={styles.menu}>
                  <li><NavLink to="/workstaff">Рабочий персонал</NavLink></li>
                  <li><NavLink to="/officestaff">Офисный персонал</NavLink></li>
                </ul>
              </li>

              <li><NavLink to="/contacts">Контакты</NavLink></li>

            </ul>
          </nav>

          <button className={styles.callBtn}>
            Заказать звонок
          </button>

        </div>
      </div>
    </header>
  );
};