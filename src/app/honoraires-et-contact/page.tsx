import styles from './page.module.css';

export default function HonorairesContactPage() {
  return (
    <div className={styles.honorairesPage}>
      <section className={styles.hero}>
        <h1>Honoraires et Contact</h1>
      </section>

      <section id="honoraires" className={styles.consultation}>
        <h2>Honoraires</h2>
        <p>
          Les séances de psychologie ne sont pas remboursées par la Sécurité Sociale. Cependant, de nombreuses mutuelles proposent un remboursement partiel ou total des consultations. N&apos;hésitez pas à vous renseigner auprès de votre mutuelle.
        </p>
        <div className={styles.tarifs}>
          <div className={styles.tarif}>
            <h3>Consultation individuelle</h3>
            <p className={styles.prix}>60 €</p>
            <p>Durée : 45 minutes à 1 heure</p>
          </div>
          <div className={styles.tarif}>
            <h3>Consultation couple/famille</h3>
            <p className={styles.prix}>80 €</p>
            <p>Durée : 1 heure à 1h30</p>
          </div>
          <div className={styles.tarif}>
            <h3>Bilan psychologique</h3>
            <p className={styles.prix}>Sur devis</p>
            <p>Comprend les entretiens, la passation et le compte-rendu</p>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.process}>
        <h2>Contact</h2>
        <div className={styles.processContent}>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <h3>Adresse du cabinet</h3>
              <p>123 Rue Exemple<br />75000 Paris</p>
            </div>
            <div className={styles.contactItem}>
              <h3>Téléphone</h3>
              <p>06 00 00 00 00</p>
            </div>
            <div className={styles.contactItem}>
              <h3>Email</h3>
              <p>contact@exemple.fr</p>
            </div>
          </div>
        </div>
      </section>

      <section id="rdv" className={styles.differences}>
        <h2>Prendre rendez-vous</h2>
        <div className={styles.differencesContent}>
          <p>
            Vous pouvez prendre rendez-vous par téléphone ou par email. Je vous répondrai dans les plus brefs délais.
          </p>
          <p>
            Les consultations se font uniquement sur rendez-vous.
          </p>
        </div>
      </section>
    </div>
  );
}
