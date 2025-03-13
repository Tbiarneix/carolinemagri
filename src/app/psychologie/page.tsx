import styles from './page.module.css';
import Image from 'next/image';

export default function PsychologyPage() {
  return (
    <div className={styles.psychologyPage}>
      <section className={styles.hero}>
        <h1>La Psychologie</h1>
      </section>

      <section className={styles.consultation}>
        <h2>Pourquoi et qui consulter ?</h2>
        <p>
          Il existe de nombreuses difficultés qui peuvent être un motif de consultations à différents moments de votre vie, au sein à l&apos;écoute de vos demandes et de vos besoins afin de vous accompagner au mieux vers un équilibre personnel et/ou professionnel.
        </p>
        <p>
          Le premier grand pas à franchir dans vos difficultés est de les reconnaître et vouloir aller de l&apos;avant en demandant de l&apos;aide à un professionnel. Au cours de sa vie, toute personne peut être amenée à rencontrer un psychologue en fonction de ses difficultés.
        </p>

        <div className={styles.imageGrid}>
          <div className={styles.imageCard}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/enfants.jpg"
                alt="Illustration représentant l'accompagnement des enfants et adolescents"
                width={300}
                height={300}
                className={styles.image}
              />
            </div>
            <ul>
              <li>De la petite enfance à l&apos;adolescence :</li>
              <li>Troubles affectifs</li>
              <li>Bébé ou enfant agité</li>
              <li>Troubles du sommeil</li>
              <li>Difficultés de séparation</li>
              <li>Difficultés scolaires et apprentissage</li>
              <li>Retard de langage</li>
              <li>Difficultés de communication</li>
            </ul>
          </div>

          <div className={styles.imageCard}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/couples.jpg"
                alt="Illustration représentant l'accompagnement scolaire et familial"
                width={300}
                height={300}
                className={styles.image}
              />
            </div>
            <ul>
              <li>Scolarité - Etudes :</li>
              <li>Accompagnement à la scolarité</li>
              <li>Difficultés d&apos;autorité</li>
              <li>Difficultés de communication</li>
              <li>Séparation</li>
            </ul>
          </div>

          <div className={styles.imageCard}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/adultes.jpg"
                alt="Illustration représentant l'accompagnement des adultes"
                width={300}
                height={300}
                className={styles.image}
              />
            </div>
            <ul>
              <li>Adultes :</li>
              <li>Difficultés professionnelles</li>
              <li>Expériences difficiles</li>
              <li>Deuil</li>
              <li>Relations relationnelles</li>
              <li>Problématique familiale</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <h2>Déroulement d&apos;un suivi</h2>
        <div className={styles.processContent}>
          <p>
            La première séance est là pour nous permettre de prendre contact, de commencer à nous connaître. Vous me ferez part de vos demandes, vos besoins, les raisons qui vous poussent à venir voir un psychologue et vos attentes.
          </p>
          <p>
            Une deuxième sera dédiée, c&apos;est-à-dire votre histoire de vie, de la grossesse jusqu&apos;à présent. Cela permet de comprendre votre construction, comment vous êtes devenu(e) la personne que vous êtes aujourd&apos;hui et qui me permet de mieux vous connaître.
          </p>
          <p>
            En fin de séance, je vous proposerai un suivi adapté à votre demande, à vos besoins et à vos difficultés ainsi que les modalités d&apos;organisation des séances. Ce ne sont que des propositions, vous serez être sujet à discussion.
          </p>
          <p>
            Cette première rencontre n&apos;est pas un engagement. Vous êtes libre de poursuivre avec moi ou pas et être en route professionnel proposant une pratique différente, si vous ne vous sentez pas à l&apos;aise. Il est important que vous considériez que vous n&apos;hésitez pas à en parler.
          </p>
          <p>
            Pour la suite, des objectifs seront fixés ensemble en début de suivi.
          </p>
          <p>
            Nous verrons par ces objectifs seront fixés discutés au suivi et pourront évoluer au fur et à mesure.
          </p>
          <p>
            Les temps de séances se vie sont à votre disposition. N&apos;hésitez à poser toutes les questions qu&apos;il vous sera nécessaire.
          </p>
        </div>
      </section>

      <section className={styles.differences}>
        <h2>Quelles différences entre tous ces « psy » ?</h2>
        <div className={styles.differencesContent}>
          <p>
            Psychologue, psychiatre, psychothérapeute, sophrologue... À qui s&apos;adresser ?
          </p>
          <ul>
            <li>
              <strong>Le psychologue</strong> s&apos;est diplômé d&apos;un Master de psychologie (bac+5) et à suivi un cursus universitaire théorique et pratique spécialisé. Professionnel de l&apos;écoute thérapeutique, il pratique des tests d&apos;évaluation psychologique de la personnalité et des capacités cognitives. Il travaille sur la relation d&apos;aide et le développement de la personne. Il est formé à l&apos;entretien clinique et à la pratique professionnelle lors de plusieurs stages différents (qui permettent) la mesure de la pratique relationnelle. Il s&apos;intéresse aux processus d&apos;apprentissage par l&apos;exemple, sont dans une perspective comportementale, comme de vie, sans difficulté ni familiales, etc. Le titre est reconnu et protégé par l&apos;État Français depuis 1985, tout psychologue doit être enregistré à l&apos;Agence Régionale de Santé et posséder un numéro ADELI.
            </li>
            <li>
              <strong>Le psychiatre</strong> est avant tout un médecin, il est le seul à pouvoir prescrire des médicaments. Le psychiatre s&apos;est spécialisé dans les troubles mentaux après plusieurs années d&apos;études de médecine. À l&apos;hôpital auprès de personnes présentant des troubles psychiques graves, mais peut aussi recevoir des personnes souffrant de dépression légère exclusivement besoin d&apos;un soutien médicamenteux. Le titre est protégé par l&apos;État Français, tout psychiatre est membre de l&apos;Ordre des médecins.
            </li>
            <li>
              <strong>Le psychothérapeute</strong> s&apos;est formé au titre d&apos;études et de société. Titre reconnu seulement depuis 2010, le psychothérapeute a suivi une formation théorique et pratique en plus. Cependant, ce titre peut être conservé par dérogation à la psychothérapie principalement le décret, et ce sans formation universitaire. Le titre est donc encore peu encadré. À l&apos;inverse de la remarque au possible sur la formation du praticien.
            </li>
            <li>
              <strong>Le psychanalyste</strong> (généralement psychologue ou psychiatre) peut être issu de n&apos;importe quelle formation en psychologie, s&apos;utilise la théorie psychanalytique freudienne notamment. Il est important de vérifier que le psychanalyste soit diplômé en psychologie ou en psychiatrie, ce bien qu&apos;il soit membre d&apos;une société psychanalytique reconnue. Le titre de psychanalyste n&apos;est ni encadré, ni reconnu par l&apos;État français.
            </li>
            <li>
              <strong>Le psychopraticien</strong> le coach : dans nos marques et nos discours par l&apos;État français, les psychopraticiens sont apparus suite à l&apos;encadrement du titre de psychothérapeute. Comme avec les coachs, il convient donc de vérifier que ces professionnels indépendants aient bien suivi une formation les accompagnement psychologique de personne.
            </li>
          </ul>
        </div>
      </section>

      <div className={styles.cta}>
        <a href="#contact" className={styles.button}>
          Prendre rendez-vous
        </a>
      </div>
    </div>
  );
}
