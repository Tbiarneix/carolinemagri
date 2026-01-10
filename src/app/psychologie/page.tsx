import { InfoCards } from "@/components/Cards/InfoCards/InfoCards";
import styles from "./page.module.css";
import shared from "../shared.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "La Psychologie",
  description:
    "Accompagnement psychologique pour enfants, adolescents, adultes et familles à Pinsaguel. Consultations individuelles, familiales et de couple.",
};

export default function PsychologyPage() {
  return (
    <div className={shared.pageContainer}>
      <section className={shared.pageHero}>
        <h1>La Psychologie</h1>
      </section>

      <section id="consultation">
        <h2>Pourquoi et qui consulter&nbsp;?</h2>
        <p>
          Il existe de nombreuses difficultés qui peuvent être un motif de consultations à
          différents moments de votre vie, au sein à l&apos;écoute de vos demandes et de vos besoins
          afin de vous accompagner au mieux vers un équilibre personnel et/ou professionnel.
        </p>
        <p>
          Le premier grand pas à franchir dans vos difficultés est de les reconnaître et vouloir
          aller de l&apos;avant en demandant de l&apos;aide à un professionnel. Au cours de sa vie,
          toute personne peut être amenée à rencontrer un psychologue en fonction de ses
          difficultés.
        </p>

        <div className={styles.imageGrid}>
          <InfoCards
            title="De la petite enfance à l'adolescence"
            imgSrc="/images/Enfance-adolescence.webp"
          >
            <ul>
              <li>Naissance difficile</li>
              <li>Bébé ou enfant angoissé</li>
              <li>Troubles du sommeil</li>
              <li>Difficultés de séparation</li>
              <li>Difficultés scolaires et apprentissage</li>
              <li>Retard de langage</li>
              <li>Difficultés de communication</li>
            </ul>
          </InfoCards>

          <InfoCards title="Couples et familles" imgSrc="/images/Couple-hetero.webp">
            <ul>
              <li>Accompagnement à la parentalité</li>
              <li>Difficultés d&apos;autorité</li>
              <li>Difficultés de communication</li>
              <li>Rupture du lien familliale</li>
              <li>Séparation</li>
            </ul>
          </InfoCards>

          <InfoCards title="Adultes" imgSrc="/images/Femme.webp">
            <ul>
              <li>Difficultés professionnelles</li>
              <li>Expériences difficiles</li>
              <li>Deuil</li>
              <li>Relations relationnelles</li>
              <li>Problématique familiale</li>
            </ul>
          </InfoCards>
        </div>
      </section>

      <section id="process">
        <h2>Déroulement d&apos;un suivi</h2>
        <div className={shared.contentBlock}>
          <p>
            La première séance est là pour nous permettre de prendre contact, de commencer à nous
            connaître. Vous me ferez part de vos demandes, vos besoins, les raisons qui vous
            poussent à venir voir un psychologue et vos attentes.
          </p>
          <p>
            Une anamnèse sera réalisée, c&apos;est-à-dire votre histoire de vie, de la grossesse
            jusqu&apos;à présent. Cela permet de comprendre votre construction, comment vous êtes
            devenu(e) la personne que vous êtes aujourd&apos;hui et qui me permet de mieux vous
            connaître.
          </p>
          <p>
            En fin de séance, je vous proposerai un suivi adapté à votre demande, à vos besoins et à
            vos difficultés ainsi que les modalités d&apos;organisation des séances. Ce ne sont que
            des propositions, vous serez être sujet à discussion.
          </p>
          <p>
            Cette première rencontre n&apos;est pas un engagement. Vous êtes libre de poursuivre
            avec moi ou pas et être en route professionnel proposant une pratique différente, si
            vous ne vous sentez pas à l&apos;aise. Si le cadre de travail proposé ne vous convenait
            pas, n&apos;hésitez surtout pas à m&apos;en parler.
          </p>
          <p>
            Pour la suite, des objectifs seront fixés ensemble en début de suivi. <br />
            Nous verrons par ces objectifs seront fixés discutés au suivi et pourront évoluer au fur
            et à mesure.
          </p>
          <p>
            Les temps de séances et ce lieu sont à votre disposition. Alors surtout, posez toutes
            les questions qu&apos;il vous sera nécessaire.
          </p>
        </div>
      </section>

      <section id="differences">
        <h2>Quelles différences entre tous ces «&nbsp;psy&nbsp;»&nbsp;?</h2>
        <div className={shared.contentBlock}>
          <p>Psychologue, psychiatre, psychothérapeute, sophrologue... À qui s&apos;adresser ?</p>
          <ul className={shared.noBullets}>
            <li>
              <strong>Le psychologue</strong> Diplômé d&apos;un Master de psychologie (bac+5), il à
              suivi un cursus universitaire théorique et pratique spécialisé. Professionnel de
              l&apos;écoute thérapeutique, il pratique des tests d&apos;évaluation psychologique de
              la personnalité et des capacités cognitives. Il travaille sur la relation d&apos;aide
              et le développement de la personne. Il est formé à l&apos;entretien clinique et à la
              pratique professionnelle lors de plusieurs stages différents (qui permettent) la
              mesure de la pratique relationnelle. Il s&apos;intéresse aux processus
              d&apos;apprentissage par l&apos;exemple, sont dans une perspective comportementale,
              comme de vie, sans difficulté ni familiales, etc. Le titre est reconnu et protégé par
              l&apos;État Français depuis 1985, tout psychologue doit être enregistré à
              l&apos;Agence Régionale de Santé et posséder un numéro ADELI.
            </li>
            <li>
              <strong>Le psychiatre</strong> Il est avant tout un médecin et est le seul à pouvoir
              prescrire des médicaments. Le psychiatre s&apos;est spécialisé dans les troubles
              mentaux après plusieurs années d&apos;études de médecine. À l&apos;hôpital auprès de
              personnes présentant des troubles psychiques graves, mais peut aussi recevoir des
              personnes souffrant de dépression légère ayant besoin d&apos;un soutien médicamenteux.
              Le titre est protégé par l&apos;État Français, tout psychiatre est membre de
              l&apos;Ordre des médecins.
            </li>
            <li>
              <strong>Le psychothérapeute</strong> Reconnu officiellement depuis 2010, le titre de
              psychothérapeute garantit en principe une formation théorique et pratique rigoureuse
              en psychopathologie. Toutefois, la vigilance reste de mise : une dérogation légale a
              permis à des praticiens exerçant avant cette date de conserver leur titre, sans
              nécessairement posséder le cursus universitaire désormais exigé. Face à cette
              disparité de profils, il est vivement recommandé de se renseigner sur la formation
              initiale et le parcours spécifique du professionnel que vous consultez.
            </li>
            <li>
              <strong>Le psychanalyste</strong> Généralement psychologue ou psychiatre, il peut être
              issu de n&apos;importe quelle formation en psychologie. Il utilise la théorie
              psychanalytique freudienne ou lacanienne par exemple. Il est important de vérifier que
              le psychanalyste est diplômé en psychologie ou en psychiatrie même s&apos;il est
              membre d&apos;une société psychanalytique reconnue. Le titre de psychanalyste
              n&apos;est ni encadré, ni reconnu par l&apos;État français.
            </li>
            <li>
              <strong>Le psychopraticien</strong> A voir plutôt comme un coach, les psychopraticiens
              ne sont pas reconnus ni réglementés par l&apos;État français. Le terme de
              psychopraticien est d&apos;ailleurs apparu spécifiquement suite à l&apos;encadrement
              strict du titre de psychothérapeute. L&apos;usage de ces appellations étant libre, il
              est indispensable de vérifier que le professionnel indépendant que vous choisissez a
              suivi une formation sérieuse et certifiée en accompagnement psychologique.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
