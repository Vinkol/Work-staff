import { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import styles from "./ErrorFallback.module.sass";
import bgImage from "@/shared/assets/images/Main.png";

export const ErrorFallback = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count === 0) {
      navigate("/");
      return;
    }

    const timer = setTimeout(() => {
      setCount(c => c - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, navigate]);

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles.hero}>
        <h1>Упс!<br />Что-то пошло не так</h1>
        <p>Автоматический переход на главную через {count} сек</p>
        <NavLink to="/" className={styles.button}>
          На главную
        </NavLink>
      </div>
    </div>
  );
};