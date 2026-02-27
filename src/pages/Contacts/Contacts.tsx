import { Section } from "@/shared/ui/Section/Section";
import { Container } from "@/shared/ui/Container/Container";

import styles from "./Contacts.module.sass";
import { HeroContacts } from "@/widgets/HeroContacts/HeroContacts";
import { OurContacts } from "@/widgets/OurContacts/OurContacts";

export const ContactsPage = () => {
  return (
  <>
    <Section className={styles.heroSection}>
      <Container>
        <HeroContacts />
      </Container>
    </Section>
    <Section className={styles.ourSection}>
      <Container>
        <OurContacts />
      </Container>
    </Section>
  </>
  )
};