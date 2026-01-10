import { Icon } from "@/components/Icon/Icon";
import shared from "../shared.module.css";
import Link from "next/link";

export default function PolitiqueDeConfidentialitePage() {
  return (
    <div className={shared.pageContainer}>
      <section className={shared.pageHero}>
        <h1>Politique de confidentialité</h1>
      </section>

      <section>
        <p>
          Caroline Magri - Psychologue, Sophrologue, accorde de l&apos;importance à votre vie
          privée. Nous prenons au sérieux nos responsabilités en matière de traitement des données
          personnelles et veillons ainsi à la protection de vos données.
        </p>
        <p>
          La présente politique de confidentialité s&apos;applique au site carolinemagri.fr. Elle
          vous informe sur la manière dont nous collectons et utilisons vos données personnelles.
        </p>
        <p>
          Elle complète les <Link href="/mentions-legales">mentions légales</Link> du site.
        </p>
      </section>

      <section>
        <h2>Les données personnelles collectées</h2>
        <p>
          Conformément aux dispositions du Règlement européen 2016/679, la collecte et le traitement
          des données des utilisateurs sont clairement explicités ci-dessous.
        </p>
        <p>
          Les données à caractère personnel collectées sur le site carolinemagri.fr sont celles que
          nous collectons directement auprès de vous, à savoir :
        </p>
        <ul>
          <li>
            les données des différents formulaires disponibles sur le présent site Internet&nbsp;;
          </li>
          <li>
            les commentaires et autres informations que vous nous fournissez, questions et
            informations que vous envoyez au service client (contact [@] carolinemagri.fr).
          </li>
        </ul>
        <br />
        <p>
          Nous conservons dans nos systèmes informatiques du site et dans des conditions
          raisonnables de sécurité l&apos;ensemble des données collectées pour une durée de un an.
        </p>
        <p>
          La collecte et le traitement des données répondent à la finalité suivante : les données
          sont celles fournies par vous-même afin que nous rentrions en contact.
        </p>
        <p>
          Les données personnelles collectées par le site ne sont transmises à aucun tiers et ne
          sont traitées que par l&apos;éditeur du site : Caroline Magri – Psychologue, Sophrologue.
        </p>
      </section>

      <section>
        <h2>Responsable du traitement des données</h2>
        <p>
          La responsable des données à caractère personnel est Caroline Magri. Vous pouvez la
          contacter par mail{" "}
          <Link href="mailto:magri.caroline@gmail.com">
            magri.caroline@gmail.com <Icon name="external-link" size={16} aria-hidden="true" />
          </Link>
          .
        </p>
        <p>
          La responsable du traitement des données s&apos;engage à protéger au mieux les données, à
          ne pas les transmettre à des tiers sans que vous en soyez informé et à respecter les
          finalités pour lesquelles ces données ont été collectées.
        </p>
        <p>
          Le site dispose d&apos;un certificat SSL afin de garantir que les informations échangées
          sont sécurisées.
        </p>
        <p>
          Dans le cas où l&apos;intégrité, la confidentialité ou la sécurité des données à caractère
          personnel est compromise, la responsable du traitement des données s&apos;engage à vous
          informer par tout moyen.
        </p>
      </section>

      <section>
        <h2>Vos droits</h2>
        <p>Conformément à la réglementation, vous avez les droits suivants :</p>
        <ul>
          <li>Droit d&apos;accès, de modification et droit à l&apos;effacement</li>
          <li>Droit à la portabilité des données</li>
          <li>Droit à la limitation et à l&apos;opposition du traitement des données</li>
          <li>
            Droit de ne pas faire l&apos;objet d&apos;une décision fondée exclusivement sur un
            procédé automatisé
          </li>
          <li>Droit de déterminer le sort des données après la mort</li>
          <li>Droit de saisir l&apos;autorité de contrôle compétente (la CNIL)</li>
        </ul>
        <p>
          Pour faire valoir vos droits, vous pouvez le faire à l&apos;adresse{" "}
          <Link href="mailto:magri.caroline@gmail.com">
            magri.caroline@gmail.com <Icon name="external-link" size={16} aria-hidden="true" />
          </Link>{" "}
          en précisant vos coordonnées (Prénom, Nom, e-mail) et l&apos;objet de votre demande.
        </p>
      </section>

      <section>
        <h2>Les Cookies</h2>
        <p>
          Le site n'a pas recours aux techniques de « cookies ». Nous ne récupérons ni ne stockons
          aucune donnée personnelle par ce biais.
        </p>
      </section>

      <section>
        <p>
          La présente politique de confidentialité peut être consultée à tout moment à
          l&apos;adresse{" "}
          <Link href="/politique-de-confidentialite/">
            carolinemagri.fr/politique-de-confidentialite
          </Link>
        </p>
        <p>
          Nous nous réservons le droit de la modifier afin de garantir sa conformité et vous
          invitons à la consulter régulièrement.
        </p>
        <p>
          <em>La dernière mise à jour est du : 06/01/2026</em>
        </p>
      </section>
    </div>
  );
}
