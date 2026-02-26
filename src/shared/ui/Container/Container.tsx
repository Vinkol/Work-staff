import type { ReactNode } from "react";
import styles from "./Container.module.sass";

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};