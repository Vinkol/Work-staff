import styles from './Footer.module.sass';
import logo from '@/shared/assets/images/Logofooter.svg';
import phone from '@/shared/assets/icons/phone.png';

export const Footer = () => {
  return (
    <footer className= {styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer_main}>
          <div className={styles.footer_cont}>
            <a href='' className={styles.footer_logo}>
              <img src={logo} alt='logo' />
            </a>
            <a href='tel:+74956779580' className={styles.footer_phone}>
              <img src={phone} alt='svg' />
              <span> (495) 677-95-80</span>
            </a>
            <div className={styles.location}>
              <strong>Москва</strong>
            </div>
            <p>Режим работы — круглосуточно Прием заказов: с 8:00 до 20:00</p>
            <div className={styles.footer_soc}>
              <ul>
                <li>
                  <a href="" target='_blank'>
                    <img src="" alt="icon" />
                  </a>
                </li>
              </ul>
            </div>
            <a href="" target='_blank' className={styles.politic_conf}>Политика конфиденциальности</a>
          </div>
          <div className={styles.footer_block}>
            <div className={styles.footer_menu}>
              <ul>
                <li>
                  <a href="">Цены</a>
                </li>
                <li>
                  <a href="">Компаниям</a>
                </li>
                <li>
                  <a href="">Физическим лицам</a>
                </li>
                <li>
                  <a href="">Работа у нас</a>
                </li>
                <li>
                  <a href="/">Контакты</a>
                </li>
              </ul>
            </div>
            <div className={styles.footer_menu}>
              <ul>
                <li>
                  <a href="">Услуги грузчиков</a>
                </li>
                <li>
                  <a href="">Разнорабочие</a>
                </li>
                <li>
                  <a href="">Демонтажные работы на стройке</a>
                </li>
                <li>
                  <a href="">Такелажные работы</a>
                </li>
              </ul>
            </div>
            <div className={styles.footer_href}>
              <a href="">
                <div>
                  svg
                </div>
                <span>Договор</span>
              </a>
              <a href="">
                <div>
                  svg
                </div>
                <span>Акт</span>
              </a>
              <a href="">
                <div>
                  svg
                </div>
                <span>Личный кабинет</span>
              </a>
              <a href="">
                <div>
                  svg
                </div>
                <span>Написать директору</span>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.name_comp}>
          <p>© ООО "СмартСтафф" 2010–2026</p>
          <p>Информация на данном сайте носит информационный характер и не является офертой. ст. 437 ч. 1 ГК РФ.</p>
        </div>
      </div>
    </footer>
  );
};