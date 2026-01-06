import styles from './page.module.css';

export default function SophrologiePage() {
  return (
    <div className={styles.sophrologiePage}>
      <section className={styles.hero}>
        <h1>La Sophrologie</h1>
      </section>

      <section id="definition" className={styles.consultation}>
        <h2>Qu&apos;est-ce que la sophrologie ?</h2>
        <p>
          La sophrologie est une méthode psychocorporelle qui vise à renforcer l&apos;équilibre entre les émotions, les pensées et le corps. Elle utilise des techniques de relaxation, de respiration et de visualisation positive.
        </p>
        <p>
          Cette discipline permet de développer la conscience de soi et d&apos;accéder à un mieux-être au quotidien.
        </p>
      </section>

      <section id="bienfaits" className={styles.process}>
        <h2>Les bienfaits de la sophrologie</h2>
        <div className={styles.processContent}>
          <p>
            La sophrologie peut vous aider dans de nombreuses situations :
          </p>
          <ul>
            <li>Gestion du stress et de l&apos;anxiété</li>
            <li>Amélioration du sommeil</li>
            <li>Préparation aux examens ou événements importants</li>
            <li>Accompagnement de la grossesse et de la maternité</li>
            <li>Gestion de la douleur</li>
            <li>Confiance en soi et développement personnel</li>
          </ul>
        </div>
      </section>

      <section id="deroulement" className={styles.differences}>
        <h2>Déroulement d&apos;une séance</h2>
        <div className={styles.differencesContent}>
          <p>
            Une séance de sophrologie dure généralement entre 45 minutes et 1 heure. Elle se déroule en plusieurs étapes :
          </p>
          <ul>
            <li>
              <strong>Un temps d&apos;échange</strong> pour accueillir votre état du moment et définir l&apos;objectif de la séance.
            </li>
            <li>
              <strong>La pratique</strong> comprenant des exercices de relaxation dynamique (mouvements doux associés à la respiration) et de visualisation.
            </li>
            <li>
              <strong>Un temps de partage</strong> pour exprimer vos ressentis et intégrer les bénéfices de la séance.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
