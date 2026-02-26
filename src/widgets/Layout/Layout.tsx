import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/Header/Header";
import { Footer } from "@/widgets/Footer/Footer";
import styles from "./Layout.module.sass";


export const Layout = () => {
  return (
    <>
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
    </>
  );
};