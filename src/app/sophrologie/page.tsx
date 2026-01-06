import Image from "next/image";
import shared from "../shared.module.css";

export default function SophrologiePage() {
  return (
    <div className={shared.pageContainer}>
      <section className={shared.pageHero}>
        <h1>La Sophrologie</h1>
      </section>

      <section id="definition">
        <h2>Qu&apos;est-ce que la sophrologie&nbsp;?</h2>
        <p>La sophrologie est un terme créé par Alfonso Caycedo, médecin neuropsychiatre, pour désigner une méthode qu&apos;il a conçue pour l&apos;étude de la conscience harmonieuse et la conquête de l&apos;équilibre corps - esprit, par la répétition de techniques psychocorporelles qui lui sont propres.</p>
        <blockquote>
          « Entendez aussi à travers le mot « sophrologie » une méthode composée d&apos;un ensemble de techniques. Elle est souvent présentée comme une méthode de relaxation ayant pour base la respiration et l&apos;action tension-relâchement musculaire impliquant le corps comme support avec une intention volontaire (esprit) posée sur ces deux actions (harmonie corps/esprit). Bien évidemment, il existe de nombreuses méthodes de détente, mais celle-ci a un plus merveilleux : l&apos;accès à la conscience, à nos potentiels, nos capacités et nos valeurs fondamentales. Elle permet de vivre les manifestations de la vie en nous. Tout ce dont nous possédons dans notre corps, dans notre esprit et notre âme, peut s&apos;allier positivement pour une existence pleine et riche de sens. La sophrologie rend à chaque être sa place dans le monde. »
        </blockquote>
        <p>Isabelle Lefèvre-Vallée.</p>
        <p>
          Il ne s&apos;agit pas de voir « la vie en rose » ou de se détacher de la réalité. Les difficultés quotidiennes, le « négatif » sont inhérents à la vie. Mais il s&apos;agit de sortir d&apos;une vision non réaliste et négative, pour essayer le plus possible de voir les choses telles qu&apos;elles sont, en renforçant le positif que nous avons en nous.
        </p>
        <div className={shared.center}>
          <Image 
            src="/images/Zenitude.jpg" 
            alt="" 
            width={400} 
            height={300}
            style={{ borderRadius: '12px', maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </section>

      <section id="bienfaits">
        <h2>Comment la sophrologie peut vous aider&nbsp;?</h2>
        <div className={shared.contentBlock}>
          <p>
            La sophrologie peut vous aider dans de nombreuses situations :
          </p>
          <ul>
            <li>De manière non exhaustive : gérer votre stress et vos angoisses, atténuer les troubles du sommeil, les troubles alimentaires, ou les manifestations psychosomatiques, se préparer à des compétitions sportives, examens, hospitalisations…</li>
            <li>Vivre dans le bien-être au quotidien, trouver un équilibre émotionnel, la confiance en soi, appréhender et faire face aux événements de votre vie (licenciement, divorce…)</li>
            <li>Pour votre enfant : vous êtes témoin de ses difficultés scolaires, relationnelles, comportementales, vous souhaitez qu&apos;il s&apos;initie à une technique simple et ludique de relaxation pour qu&apos;il conserve son capital santé…</li>
            <li>Pour les adolescents : préparer un examen, une épreuve sportive, une audition, améliorer la relation à soi-même et aux autres…</li>
            <li>Pour surmonter des difficultés scolaires ou des troubles du comportement (énurésie, agitation, agressivité…), passer un examen, construire un projet de vie, améliorer les troubles de la communication, gestion des émotions…</li>
          </ul>
        </div>
      </section>

      <section id="deroulement">
        <h2>Proposition de prise en charge</h2>
        <div className={shared.contentBlock}>
          <p>
            En individuel : un forfait de plusieurs séances vous sera proposé selon votre demande et vos besoins.
          </p>
          <p>
            Avec mon accord, la première ou la deuxième séance peut-être enregistrée, si vous en ressentez le besoin, pour vous aider à vous entraîner chez vous ensuite.
          </p>
        </div>
      </section>
    </div>
  );
}
