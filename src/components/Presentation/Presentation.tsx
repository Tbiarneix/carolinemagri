import styles from './Presentation.module.css';

export const Presentation = () => {
  return (
    <section className={styles.presentation}>
      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <h3>La Psychologie</h3>
          <div className={styles.imageContainer}>
            <div className={styles.image} role="img" aria-label="Illustration de la psychologie"></div>
          </div>
        </div>
        <div className={styles.gridItem}>
          <h3>La Sophrologie</h3>
          <div className={styles.imageContainer}>
            <div className={styles.image} role="img" aria-label="Illustration de la sophrologie"></div>
          </div>
        </div>
        <div className={styles.gridItem}>
          <h3>Bilan Psychologique</h3>
          <div className={styles.imageContainer}>
            <div className={styles.image} role="img" aria-label="Illustration du bilan psychologique"></div>
          </div>
        </div>
        <div className={styles.gridItem}>
          <h3>Contact</h3>
          <div className={styles.imageContainer}>
            <div className={styles.image} role="img" aria-label="Illustration du contact"></div>
          </div>
        </div>
        <div className={styles.gridItem}>
          <h3>Rendez-vous</h3>
          <div className={styles.imageContainer}>
            <div className={styles.image} role="img" aria-label="Illustration des rendez-vous"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
