"use client";

import Link from "next/link";
import { useEffect, useState, useRef, useCallback } from "react";
import styles from "./Navigation.module.css";
import Image from "next/image";
import { Cta } from "../CTA/Cta";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [ariaLabel, setAriaLabel] = useState("Ouvrir le menu");
  const menuRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const handleTabKey = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      const firstFocusable = buttonRef.current;
      const focusableElements = menuRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const lastFocusable =
        focusableElements?.[focusableElements.length - 1] || null;

      if (!e.shiftKey && document.activeElement === lastFocusable) {
        e.preventDefault();
        firstFocusable?.focus();
      }

      if (e.shiftKey && document.activeElement === firstFocusable) {
        e.preventDefault();
        lastFocusable?.focus();
      }
    },
    [isOpen]
  );

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", (e) => {
        if (e.key === "Tab") handleTabKey(e);
      });
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleTabKey);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, handleTabKey]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setAriaLabel(isOpen ? "Fermer le menu" : "Ouvrir le menu");
  }, [isOpen]);

  return (
    <nav className={styles.nav} role="navigation" aria-label="Menu principal" id="main-navigation" tabIndex={-1}>
      <div className={styles.logo}>
        <Link onClick={() => setIsOpen(false)} href="/" aria-label="Aller à la page d'accueil">
          <Image
            src="/images/logo-text-bicolor.png"
            alt="Logo de Caroline Magri"
            width={isMobile ? 80 : 136}
            height={isMobile ? 30 : 50}
          />
        </Link>
      </div>

      <button
        ref={buttonRef}
        className={`${styles.menuButton} ${isOpen ? styles.menuButtonOpen : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mainMenu"
        aria-label={ariaLabel}
      >
        <span className={styles.menuIcon}></span>
      </button>

      <ul
        id="mainMenu"
        ref={menuRef}
        className={`${styles.menuItems} ${isOpen ? styles.open : ""}`}
      >
        <li onClick={() => setIsOpen(false)}>
          <Link href="/psychologie" className={pathname === '/psychologie' ? styles.active : ''}>La Psychologie</Link>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <Link href="/sophrologie" className={pathname === '/sophrologie' ? styles.active : ''}>La Sophrologie</Link>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <Link href="/bilan-psychologique" className={`${styles.wrapText} ${pathname === '/bilan-psychologique' ? styles.active : ''}`}>Bilan psychologique</Link>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <Link href="/cpim" className={pathname === '/cpim' ? styles.active : ''}>CPIM</Link>
        </li>
        <li onClick={() => setIsOpen(false)}>
          <Link href="/honoraires-et-contact" className={`${styles.wrapText} ${pathname === '/honoraires-et-contact' ? styles.active : ''}`}>Honoraires et contact</Link>
        </li>
        <li className={styles.inMenuCta}>
          <Cta />
        </li>
      </ul>
      <div className={styles.outMenuCta}>
        <Cta />
      </div>
    </nav>
  );
};
