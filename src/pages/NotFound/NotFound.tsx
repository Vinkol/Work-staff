import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.sass'
import bgImage from '@/shared/assets/images/Буклетный фон.png'
import manImage from '@/shared/assets/images/Пётр 1.png'

export const NotFoundPage = () => {
  const [count, setCount] = useState (5);
  const navigate = useNavigate();

  useEffect(() => {
    if (count === 0) {
      navigate('/');
      return;
    }
    const timer = setTimeout(() => setCount(c => c - 1),1000);
    return () => clearTimeout(timer);
  }, [count, navigate]);

  return (
    <div className={styles.wrapper } style={{ backgroundImage: `url(${bgImage})` }}>
      <div className={styles.hero}>
        <div className={styles.textBlock}>
         <h1 className={styles.title}>
           Страница<br />не найдена
         </h1>
         <p className={styles.desc}>
           Автоматический переход на главную через {count} сек
         </p>
        </div>
        <div className={styles.imageBlock}>
          <img src={manImage} alt="man" />
        </div>
      </div>
    </div>
  );
};