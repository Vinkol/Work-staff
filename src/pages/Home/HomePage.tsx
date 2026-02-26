import { Section } from "@/shared/ui/Section/Section";
import { Container } from "@/shared/ui/Container/Container";
import { HeroMain } from "@/widgets/HeroMain/HeroMain";

import styles from "./HomePage.module.sass"

export const HomePage = () => {
  return (
    <>
      <Section className={styles.heroSection}>
        <Container>
          <HeroMain />
        </Container>
      </Section>

    </>
  )
};