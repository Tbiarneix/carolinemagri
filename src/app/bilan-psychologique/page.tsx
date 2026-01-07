import shared from "../shared.module.css";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bilan Psychologique",
  description:
    "Bilan psychologique WISC-V pour enfants et adolescents de 6 à 16 ans à Pinsaguel. Évaluation cognitive et projective avec compte-rendu détaillé.",
};

export default function BilanPsychologiquePage() {
  return (
    <div className={shared.pageContainer}>
      <section className={shared.pageHero}>
        <h1>Bilan Psychologique</h1>
      </section>

      <section id="definition">
        <h2>Qu&apos;est-ce qu&apos;un bilan psychologique&nbsp;?</h2>
        <p>
          La première séance de bilan se déroule de la même manière qu&apos;une première séance de
          suivi. On prend le temps d&apos;une rencontre pour me permettre de commencer à vous
          connaître avant de débuter le bilan. Une explication en détails de la suite vous sera
          faite. La première séance nous permet également de discuter autour de votre demande et de
          vos attentes.
        </p>
        <p>Toutes les questions seront abordées à ce moment.</p>
        <div className={shared.center}>
          <Image
            src="/images/Famille.jpg"
            alt=""
            width={400}
            height={300}
            style={{ borderRadius: "12px", maxWidth: "100%", height: "auto" }}
          />
        </div>
      </section>

      <section id="pour-qui">
        <h2>Bilan psychologique (cognitif et projectif)</h2>
        <div className={shared.contentBlock}>
          <p>
            Le bilan que je propose s&apos;adresse uniquement aux enfants et aux adolescents de 6 à
            16 ans et 11 mois. Des difficultés scolaires sont souvent à l&apos;origine de la demande
            de bilan chez les plus jeunes mais la demande peut concerner également des
            questionnements sur le fonctionnement cognitif du jeune.
          </p>
          <p>
            Le bilan cognitif est constitué de la passation d&apos;un Quotient Intellectuel, via une
            échelle actuelle et adaptée à la personne.
          </p>
          <p>
            Au sein de mon cabinet, j&apos;utilise comme échelle cognitive, le WISC-V, adaptée aux
            enfants et aux adolescents de 6 à 16 ans et 11 mois. Le WISC-V est un test standardisé
            qui permet de situé l&apos;enfant ou l&apos;adolescent par rapport à un groupe de
            référence (des enfants ou des adolescents de même âge). C&apos;est une batterie de tests
            complets qui analysent avec précision les différentes composantes de l&apos;intelligence
            d&apos;un enfant ou d&apos;un adolescent.
          </p>
          <p>
            Pour le test projectif, j&apos;utilise le test de Patte Noire. Dans ce test, on demande
            à l&apos;enfant de raconter une histoire à travers des images. Il vise à explorer les
            conflits de l&apos;enfant. Ce qui est évalué est la façon dont il fait face à des
            situations conflictuelles.
          </p>
        </div>
      </section>

      <section id="deroulement">
        <h2>Déroulement d&apos;un bilan psychologique</h2>
        <div className={shared.contentBlock}>
          <p>
            Un bilan psychologique complet se déroule sur 5 séances. Une première séance pour nous
            rencontrer suivi de deux séances assez rapprochées consacrées à la passation du WISC-V
            et une séance pour la passation du Test projectif de Patte Noire.
          </p>
          <p>
            La dernière séance permet de vous transmettre le compte rendu écrit et oral après
            l&apos;analyse des processus mis en œuvre lors de la passation. Une proposition de prise
            en charge pourra vous être proposée suite au compte rendu.
          </p>
        </div>
      </section>
    </div>
  );
}
