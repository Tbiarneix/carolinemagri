import { Cta } from "../CTA/Cta";
import styles from "./Alert.module.css";

export const Alert = () => {
  return (
    <section className={styles.alert}>
      <h2>Information importante</h2>
      <p>
        Depuis le vendredi 9 janvier 2026, j&apos;ai fait la transition entre Doctolib et
        Perfactive. Vous pouvez désormais prendre rendez-vous directement depuis ma page Perfactive
        en cliquant sur le bouton "Prendre rendez-vous".
      </p>
      <span>
        <Cta />
      </span>
    </section>
  );
};
