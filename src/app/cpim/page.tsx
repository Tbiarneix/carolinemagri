import styles from './page.module.css';

export default function CpimPage() {
  return (
    <div className={styles.cpimPage}>
      <section className={styles.hero}>
        <h1>CPIM</h1>
      </section>

      <section id="definition" className={styles.consultation}>
        <h2>Qu&apos;est-ce que le CPIM ?</h2>
        <p>
          Le CPIM (Cycle Psychologique d&apos;Intégration par le Mouvement) est une approche thérapeutique innovante qui combine les processus psychologiques avec le mouvement corporel.
        </p>
        <p>
          Cette méthode permet de travailler sur les blocages émotionnels et les traumatismes en intégrant le corps dans le processus thérapeutique.
        </p>
      </section>

      <section id="pour-qui" className={styles.process}>
        <h2>À qui s&apos;adresse le CPIM ?</h2>
        <div className={styles.processContent}>
          <p>
            Le CPIM peut être bénéfique pour :
          </p>
          <ul>
            <li>Les personnes ayant vécu des événements traumatiques</li>
            <li>Ceux qui souhaitent travailler sur leurs émotions de manière corporelle</li>
            <li>Les personnes en recherche de mieux-être global</li>
            <li>Ceux qui ressentent des blocages inexpliqués dans leur vie</li>
          </ul>
        </div>
      </section>

      <section id="deroulement" className={styles.differences}>
        <h2>Déroulement d&apos;une séance</h2>
        <div className={styles.differencesContent}>
          <ul>
            <li>
              <strong>Accueil et écoute</strong> de vos besoins et de votre état du moment.
            </li>
            <li>
              <strong>Travail corporel</strong> associant mouvements doux et prise de conscience.
            </li>
            <li>
              <strong>Intégration</strong> des prises de conscience et des changements.
            </li>
            <li>
              <strong>Clôture</strong> avec un temps d&apos;échange sur les ressentis.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
