import type { ReactNode } from "react";
import styles from "./Section.module.sass";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Section = ({ children, className }: Props) => {
  return (
    <section className={`${styles.section} ${className || ""}`}>
      {children}
    </section>
  );
};