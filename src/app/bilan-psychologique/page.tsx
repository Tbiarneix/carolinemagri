export default function BilanPsychologiquePage() {
  return (
    <div className="page-container">
      <section className="page-hero">
        <h1>Bilan Psychologique</h1>
      </section>

      <section id="definition">
        <h2>Qu&apos;est-ce qu&apos;un bilan psychologique ?</h2>
        <p>
          Le bilan psychologique est une évaluation approfondie des capacités cognitives, émotionnelles et comportementales d&apos;une personne. Il permet de mieux comprendre le fonctionnement intellectuel et psychologique.
        </p>
        <p>
          Cet outil d&apos;évaluation standardisé aide à identifier les forces et les difficultés, et à proposer des recommandations adaptées.
        </p>
      </section>

      <section id="pour-qui">
        <h2>Pour qui ?</h2>
        <div className="content-block">
          <p>
            Le bilan psychologique peut être proposé à différents publics :
          </p>
          <ul>
            <li>Enfants présentant des difficultés scolaires ou comportementales</li>
            <li>Adolescents en questionnement sur leur orientation</li>
            <li>Adultes souhaitant mieux comprendre leur fonctionnement</li>
            <li>Dans le cadre d&apos;une demande de reconnaissance de handicap</li>
            <li>Pour une suspicion de haut potentiel intellectuel</li>
            <li>Pour une évaluation des troubles de l&apos;attention</li>
          </ul>
        </div>
      </section>

      <section id="deroulement">
        <h2>Déroulement du bilan</h2>
        <div className="content-block">
          <ul>
            <li>
              <strong>Entretien préalable</strong> permettant de recueillir l&apos;histoire de vie, les difficultés rencontrées et les attentes.
            </li>
            <li>
              <strong>Passation des tests</strong> à l&apos;aide d&apos;outils standardisés et validés scientifiquement (WISC, WAIS, tests projectifs, etc.).
            </li>
            <li>
              <strong>Analyse des résultats</strong> avec une interprétation clinique approfondie.
            </li>
            <li>
              <strong>Restitution</strong> lors d&apos;un entretien dédié avec remise d&apos;un compte-rendu écrit détaillé.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
