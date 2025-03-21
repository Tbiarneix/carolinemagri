"use client";

import Link from "next/link";
import styles from "./SkipLink.module.css";

export const SkipLink = () => {
  const handleNavigationClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.innerWidth > 1025) {
      e.preventDefault();
      const nav = document.getElementById('mainMenu');
      if (nav) {
        const firstFocusable = nav.querySelector<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (firstFocusable instanceof HTMLElement) {
          firstFocusable.focus();
        }
      }
    }
    if (window.innerWidth <= 1025) {
      e.preventDefault();
      const menuButton = document.querySelector('button[aria-controls="mainMenu"]');
      if (menuButton instanceof HTMLElement) {
        menuButton.focus();
      }
    }
  };

  return (
    <nav className={styles.skiplinks} aria-label="Accès rapide">
      <ul className={styles.skiplinks__list}>
        <li>
          <a href="#main-navigation" onClick={handleNavigationClick}>Aller au menu de navigation</a>
        </li>
        <li>
          <a href="#main-content">Aller au contenu</a>
        </li>
        <li>
          <Link href="/sitemap">Aller au plan du site</Link>
        </li>
      </ul>
    </nav>
  );
};
