'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Navigation.module.css';
import Image from 'next/image';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav} role="navigation" aria-label="Menu principal">
      <div className={styles.logo}>
        <Link href="/" aria-label="Accueil">
          <Image
            src="/images/logo-draw.png"
            alt="Logo de Caroline Magri"
            width={127}
            height={50}
          />
          {/* <Image
            src="/images/logo-text-bicolor.png"
            alt="Logo de Caroline Magri"
            width={336}
            height={123}
          /> */}
        </Link>
      </div>

      <button 
        className={styles.menuButton} 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mainMenu"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        <span className={styles.menuIcon}></span>
      </button>

      <ul 
        id="mainMenu" 
        className={`${styles.menuItems} ${isOpen ? styles.open : ''}`}
      >
        <li><Link href="/psychologie">La Psychologie</Link></li>
        <li><Link href="/sophrologie">La Sophrologie</Link></li>
        <li><Link href="/bilan">Bilan psychologique</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <Link href="/contact" className={styles.button}>Prendre rendez-vous</Link>
    </nav>
  );
}
