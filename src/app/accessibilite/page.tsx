import { Icon } from "@/components/Icon/Icon";
import shared from "../shared.module.css";
import Link from "next/link";

export default function AccessibilitePage() {
  return (
    <div className={shared.pageContainer}>
      <section className={shared.pageHero}>
        <h1>Déclaration d&apos;accessibilité</h1>
      </section>

      <section>
        <p>
          Caroline Magri - Psychologue, Sophrologue s&apos;engage à rendre son site internet
          accessible conformément à l&apos;article 47 de la loi n° 2005-102 du 11 février 2005.
        </p>
        <p>
          Cette déclaration d&apos;accessibilité s&apos;applique au site{" "}
          <strong>carolinemagri.fr</strong>.
        </p>
      </section>

      <section>
        <h2>État de conformité</h2>
        <p>
          Le site carolinemagri.fr est <strong>non conforme</strong> avec le référentiel général
          d&apos;amélioration de l&apos;accessibilité (RGAA) version 4.1.
        </p>
        <p>Le site n&apos;a pas encore fait l&apos;objet d&apos;un audit d&apos;accessibilité.</p>
        <p>
          Cependant, le site a été développé en tenant compte des meilleures pratiques pour assurer
          une accessibilité optimale.
        </p>
      </section>

      <section>
        <h2>Contenus non accessibles</h2>
        <p>
          En l&apos;absence d&apos;audit, nous ne sommes pas en mesure de lister les contenus non
          accessibles. Nous nous engageons à améliorer progressivement l&apos;accessibilité du site.
        </p>
      </section>

      <section>
        <h2>Établissement de cette déclaration d&apos;accessibilité</h2>
        <p>Cette déclaration a été établie le 6 janvier 2026.</p>
      </section>

      <section>
        <h2>Retour d&apos;information et contact</h2>
        <p>
          Si vous n&apos;arrivez pas à accéder à un contenu ou à un service, vous pouvez contacter
          la responsable du site pour être orienté vers une alternative accessible ou obtenir le
          contenu sous une autre forme.
        </p>
        <ul>
          <li>
            E-mail :{" "}
            <Link href="mailto:magri.caroline@gmail.com">
              magri.caroline@gmail.com <Icon name="external-link" size={16} aria-hidden="true" />
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <h2>Voies de recours</h2>
        <p>
          Cette procédure est à utiliser dans le cas suivant : vous avez signalé au responsable du
          site un défaut d&apos;accessibilité qui vous empêche d&apos;accéder à un contenu ou à un
          des services du portail et vous n&apos;avez pas obtenu de réponse satisfaisante.
        </p>
        <p>Vous pouvez :</p>
        <ul>
          <li>
            Écrire un message au{" "}
            <Link
              href="https://formulaire.defenseurdesdroits.fr/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Défenseur des droits, site officiel - Nouvel onglet"
            >
              Défenseur des droits <Icon name="external-link" size={16} aria-hidden="true" />
            </Link>
          </li>
          <li>
            Contacter le délégué du{" "}
            <Link
              href="https://www.defenseurdesdroits.fr/saisir/delegues"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Défenseur des droits, site officiel - Nouvel onglet"
            >
              Défenseur des droits dans votre région{" "}
              <Icon name="external-link" size={16} aria-hidden="true" />
            </Link>
          </li>
          <li>
            Envoyer un courrier par la poste (gratuit, ne pas mettre de timbre) :<br />
            Défenseur des droits
            <br />
            Libre réponse 71120
            <br />
            75342 Paris CEDEX 07
          </li>
        </ul>
      </section>
    </div>
  );
}
