import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";
import { Icon } from "@/components/Icon/Icon";

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
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        © {currentYear} Caroline Magri - Tous droits réservés - Réalisation{" "}
        <Link href="https://www.thomasbiarneix.com/" target="_blank" rel="noopener noreferrer">
          Thomas Biarneix <Icon name="external-link" size={16} aria-hidden="true" />
        </Link>{" "}
        -{" "}
        <Link
          href="https://annuaire.esante.gouv.fr/pp/detail/10009652727?exeProId=5845577"
          target="_blank"
          rel="noopener noreferrer"
        >
          Numéro RPPS 10009652727 <Icon name="external-link" size={16} aria-hidden="true" />
        </Link>
      </div>
    </footer>
  );
};
