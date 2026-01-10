import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";
import { Icon } from "@/components/Icon/Icon";
import { Button } from "../Button/Button";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer role="contentinfo" className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.leftSection}>
          <Image src="/images/logo-full-blanc.webp" alt="" width={250} height={165} sizes="250px" />
          <p className={styles.tagline}>
            Caroline Magri
            <br />
            Psychologue du développement et sophrologue
            <br />
            1 Rue Théodore Monod
            <br />
            31120 Pinsaguel
          </p>
        </div>

        <div className={styles.rightSection}>
          <div>
            <h3 id="footer-sitemap" tabIndex={0}>
              Plan du site
            </h3>
            <ul className={styles.siteMap}>
              <li>
                <Link href="/">Accueil</Link>
              </li>
              <li>
                <Link href="/psychologie">La psychologie</Link>
              </li>
              <li>
                <Link href="/sophrologie">La sophrologie</Link>
              </li>
              <li>
                <Link href="/bilan-psychologique">Bilan psychologique</Link>
              </li>
              {/* <li><Link href="/cpim">CPIM</Link></li> */}
              <li>
                <Link href="/honoraires-et-contact">Honoraires et contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3>A propos</h3>
            <ul className={styles.siteMap}>
              <li>
                <Link href="/mentions-legales">Mentions légales</Link>
              </li>
              <li>
                <Link href="/politique-de-confidentialite">Données personnelles et cookies</Link>
              </li>
              <li>
                <Link href="/accessibilite">Accessibilité: Non conforme</Link>
              </li>
              <li>
                <Link
                  href="https://perfactive.fr/caroline-magri/book"
                  target="_blank"
                  aria-label="Prendre rendez-vous - Nouvel onglet"
                >
                  Prendre rendez-vous <Icon name="external-link" size={16} aria-hidden="true" />
                </Link>
              </li>
              <li>
                <a
                  href="https://bff.ecoindex.fr/redirect/?url=https://carolinemagri.fr"
                  target="_blank"
                  className={styles.noUnderline}
                  aria-label="Analyse Ecoindex - Nouvel onglet"
                >
                  <img
                    src="https://bff.ecoindex.fr/badge/?theme=light&url=https://carolinemagri.fr"
                    alt="Ecoindex Badge"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        © {currentYear} Caroline Magri - Tous droits réservés - Réalisation{" "}
        <Link
          href="https://www.thomasbiarneix.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Thomas Biarneix, site personnel - Nouvel onglet"
        >
          Thomas Biarneix <Icon name="external-link" size={16} aria-hidden="true" />
        </Link>{" "}
        -{" "}
        <Link
          href="https://annuaire.esante.gouv.fr/pp/detail/10009652727?exeProId=5845577"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Numéro RPPS, fiches d'information - Nouvel onglet"
        >
          Numéro RPPS 10009652727 <Icon name="external-link" size={16} aria-hidden="true" />
        </Link>
      </div>
    </footer>
  );
};
