import Image from 'next/image';
import styles from './Footer.module.css';
import Link from 'next/link';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.leftSection}>
          <Image
            src="/images/logo-full.png"
            alt="Logo de Caroline Magri, psychologue et sophrologue à Pinsaguel"
            width={250}
            height={165}
          />
          <p className={styles.tagline}>
            Caroline Magri<br/>
            Psychologue du développement et sophrologue<br/>
            1 Rue Théodore Monod<br/>
            31120 Pinsaguel
          </p>
        </div>
        
        <div className={styles.rightSection}>
          <div>
            <h3>Plan du site</h3>
            <ul className={styles.siteMap}>
              <li><Link href="/">Accueil</Link></li>
              <li><Link href="/psychologie">La psychologie</Link></li>
              <li><Link href="/sophrologie">La sophrologie</Link></li>
              <li><Link href="/bilan">Bilan psychologique</Link></li>
              <li><Link href="/cpim">CPIM</Link></li>
              <li><Link href="/honoraires-et-contact">Honoraires et contact</Link></li>
          </ul>
          </div>
          <div>
            <h3>A propos</h3>
            <ul className={styles.siteMap}>
              <li><Link href="/a-propos">Accessibilité</Link></li>
              <li><Link href="/mentions-legales">Mentions légales</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className={styles.copyright}>
        © {currentYear} Caroline Magri - Tous droits réservés - Réalisation <Link href="https://www.thomasbiarneix.com/" target="_blank" rel="noopener noreferrer">Thomas Biarneix</Link>
      </div>
    </footer>
  );
};
