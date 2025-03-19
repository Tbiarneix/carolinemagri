"use client";

import Link from "next/link";
import styles from "./SkipLink.module.css";

export const SkipLink = () => {

  return (
    <nav className={styles.skiplinks} aria-label="Accès rapide">
      <ul className={styles.skiplinks__list}>
        <li>
          <a href="#main-navigation">Aller au menu de navigation</a>
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
