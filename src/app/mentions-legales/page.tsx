import { ExternalLinkIcon } from "lucide-react";
import shared from "../shared.module.css";
import Link from "next/link";

export default function MentionsLegalesPage() {
  return (
    <div className={shared.pageContainer}>
      <section className={shared.pageHero}>
        <h1>Mentions légales</h1>
      </section>

      <section>
        <p>
          Conformément aux dispositions de la loi 2004-575 pour la confiance dans l&apos;économie numérique, il est porté à la connaissance des utilisateurs du site carolinemagri.fr les présentes mentions légales :
        </p>
      </section>

      <section>
        <h2>Responsable de publication</h2>
        <p>
          La responsable de publication est <strong>Caroline Magri</strong>.<br />
          E-mail : <Link href="mailto:contact@carolinemagri.fr">contact@carolinemagri.fr <ExternalLinkIcon size={16} aria-hidden="true" /></Link>
        </p>
      </section>

      <section>
        <h2>Hébergement</h2>
        <p>
          Le site « carolinemagri.fr » est hébergé chez <strong>HOSTINGER INTERNATIONAL LIMITED</strong>.<br />
          Siège social pour l'Union Européenne: 61 Lordou Vironos str., 6023 Larnaca, Chypre.
        </p>
      </section>

      <section>
        <h2>Droit applicable</h2>
        <p>
          Les présentes Mentions Légales sont régies par la loi française. En cas de différend et à défaut d&apos;accord amiable, le litige sera porté devant les tribunaux français.
        </p>
      </section>

      <section>
        <h2>Signalement</h2>
        <p>
          Pour tout signalement de contenus ou d&apos;activités illicites, l&apos;utilisateur peut contacter l&apos;éditeur à l&apos;adresse :<br />
          <Link href="mailto:contact@carolinemagri.fr">contact@carolinemagri.fr <ExternalLinkIcon size={16} aria-hidden="true" /></Link>
        </p>
      </section>

      <section>
        <h2>Crédits</h2>
        <ul>
          <li>Le logo a été réalisé par Marine Estebant</li>
          <li>Les images du site ont été produite avec Gemini - Nano Banana</li>
          <li>Le site a été réalisé par <strong><Link href="https://www.thomasbiarneix.com/" target="_blank" rel="noopener noreferrer">Thomas Biarneix <ExternalLinkIcon size={16} aria-hidden="true" /></Link></strong></li>
        </ul>
      </section>
    </div>
  );
}
