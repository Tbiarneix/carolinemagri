import styles from "./page.module.css";
import shared from "../shared.module.css";
import { InfoCards } from "@/components/Cards/InfoCards/InfoCards";
import { ExternalLink } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Honoraires et Contact",
  description:
    "Tarifs des consultations et coordonnées du cabinet de psychologie et sophrologie à Pinsaguel. Prise de rendez-vous en ligne.",
};

export default function HonorairesContactPage() {
  return (
    <div className={shared.pageContainer}>
      <section className={shared.pageHero}>
        <h1>Honoraires et Contact</h1>
      </section>

      <section id="honoraires">
        <h2>Honoraires</h2>
        <ul className={styles.tarifs}>
          <li>
            <InfoCards title="Séance individuelle">
              <p className={styles.prix}>55 €</p>
              <p>Accompagnement individuel pour enfants, adolescents et adultes.</p>
            </InfoCards>
          </li>
          <li>
            <InfoCards title="Séance familliale">
              <p className={styles.prix}>65 €</p>
              <p>Accompagnement familial, parental et conjugal.</p>
            </InfoCards>
          </li>
          <li>
            <InfoCards title="Consultation à domicile">
              <p className={styles.prix}>+ 15 €</p>
              <p>A ajouter aux tarifs des séances. Dans un rayon de 5 km.</p>
            </InfoCards>
          </li>
          <li>
            <InfoCards title="Bilan cognitif et projectif">
              <p className={styles.prix}>300 €</p>
              <p>Forfait de 5 séances comprenant passation + analyse + restitution</p>
            </InfoCards>
          </li>
          <li>
            <InfoCards title="Bilan cognitif ">
              <p className={styles.prix}>280 €</p>
              <p>Forfait de 4 séances comprenant passation + analyse + restitution</p>
            </InfoCards>
          </li>
          <li>
            <InfoCards title="Séance de sophrologie">
              <p className={styles.prix}>55 €</p>
              <p>Accompagnement individuel pour enfants, adolescents et adultes.</p>
            </InfoCards>
          </li>
        </ul>
        <br />
        <p>
          Le <b>règlement</b> se fait à chaque séance en <b>espèces</b> ou en <b>chèque</b>. Pensez
          à vous munir d&apos;un moyen de paiement.
        </p>
        <p>
          Je ne suis <b>pas conventionnée Mon Parcours Psy</b> (parcours gouvernemental). Pour en
          comprendre les raisons (si vous le souhaitez), je vous invite à lire{" "}
          <a href="https://associationm3p-psychologues.fr/une-escroquerie-nommee-monpsy-article-du-co-dirigeant-de-lassociation-m3p-lionel-camalet/">
            cet article <ExternalLink size={16} aria-hidden="true" />
          </a>
          .
        </p>
        <p>
          Il peut arriver à tout le monde d&apos;oublier un rendez-vous (à moi aussi
          d&apos;ailleurs). Toutefois le nombre de rendez-vous manqués augmente et entraine divers
          désgraments pour vous, pour d&apos;autres patients et pour mon activité.
        </p>
        <p>
          En cas d&apos;impossibilité, je vous demande un <b>appel</b> ou un <b>mail</b>,{" "}
          <b>48h à l&apos;avance</b>, ce qui peut permettre à d&apos;autres patients de bénéficier
          du créneau.
        </p>
        <p>
          Donc pour les <b>RENDEZ-VOUS NON HONORES</b> : le tarif de la séance <b>sera facturé</b>{" "}
          lors de la séance suivante.
        </p>
        <p>
          Les séances de psychologie et de sophrologie ne sont pas prises en charge par la Sécurité
          Sociale. Cependant, certaines mutuelles remboursent quelques séances par an. Je vous
          délivrerai une facture de chaque séance pour vous permettre de leur envoyer.
          N&apos;hésitez pas à vous renseigner auprès de votre mutuelle.
        </p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <div className={styles.contactSection}>
          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <h3>Adresse du cabinet</h3>
              <p>
                1 Rue Théodore Monod
                <br />
                31120 Pinsaguel
              </p>
              <p>Facilités d&apos;accès : Parking en face du cabinet</p>
            </div>
            <div className={styles.contactItem}>
              <h3>Téléphone</h3>
              <p>
                <a href="tel:0562486421">
                  05.62.48.64.21 <ExternalLink size={16} aria-hidden="true" />
                </a>
              </p>
            </div>
            <div className={styles.contactItem}>
              <h3>Email</h3>
              <p>
                <a href="mailto:magri.caroline@gmail.com">
                  magri.caroline@gmail.com <ExternalLink size={16} aria-hidden="true" />
                </a>
              </p>
            </div>
          </div>
          <div className={styles.contactMap}>
            <a
              href="https://www.google.com/maps/search/?api=1&query=1+Rue+Th%C3%A9odore+Monod%2C+31120+Pinsaguel"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
              aria-label="Ouvrir l'adresse du cabinet dans Google Maps"
            >
              <Image
                src="/images/map-custom.webp"
                alt="Localisation du cabinet - 1 Rue Théodore Monod, 31120 Pinsaguel"
                fill
                style={{ objectFit: "cover" }}
              />
              <span className={styles.mapOverlay}>
                <ExternalLink size={18} aria-hidden="true" />
                Ouvrir dans Google Maps
              </span>
            </a>
          </div>
        </div>
      </section>

      <section id="rdv">
        <h2>Prendre rendez-vous</h2>
        <div className={shared.contentBlock}>
          <p>
            Vous pouvez prendre rendez-vous sur ma page Perfactive{" "}
            <a
              href="https://perfactive.fr/caroline-magri/book"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://perfactive.fr/ <ExternalLink size={16} aria-hidden="true" />
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
