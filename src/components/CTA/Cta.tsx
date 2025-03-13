import styles from './Cta.module.css';

export const Cta = () => {
  return (
    <div className={styles.cta}>
      <a href="#contact" className={styles.button}>
        Prendre rendez-vous
      </a>
    </div>
  );
};
