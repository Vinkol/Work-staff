import styles from "./HeroMain.module.sass"
import manImage from "@/shared/assets/images/HeroMainman.png"

export const HeroMain = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.topSection}>
            <h1>
                Рабочий персонал <br />
                под любые задачи
            </h1>

            <ul className={styles.list}>
                <li>Рабочие на производство и склады</li>
                <li>Услуги аутсорсинга</li>
                <li>Уборка и клининг</li>
                <li>Такелажные работы</li>
                <li>Комплексные переезды</li>
            </ul>

            <button className={styles.cta}>
                Смотреть цены →
            </button>
            <div className={styles.imageBlock}>
                <img src={manImage} alt="man" />
            </div>
        </div>
        <div className={styles.bottom}>
            <ul className={styles.listcta}>
                <li>Удобные способы оплаты</li>
                <li>Персонал в течение часа</li>
                <li>Выполняем заказы 24/7</li>
                <li>Отсрочка при крупных заказах</li>
           </ul>
        </div>
    </div>
  );
};