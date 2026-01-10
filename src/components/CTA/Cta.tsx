"use client";

import styles from "./Cta.module.css";
import { Icon } from "@/components/Icon/Icon";
import { Button } from "@/components/Button/Button";
import { useEffect, useState } from "react";

export const Cta = () => {
  // null = pas encore monté côté client, vue complète par défaut pendant SSR
  const [isCompactView, setIsCompactView] = useState<boolean | null>(null);

  useEffect(() => {
    const checkSize = () => {
      const width = window.innerWidth;
      setIsCompactView(width >= 1024 && width <= 1280);
    };

    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return (
    <Button
      href="https://perfactive.fr/caroline-magri/book"
      target="_blank"
      rounded
      ariaLabel={isCompactView === true ? "Prendre rendez-vous" : undefined}
      className={styles.ctaButton}
    >
      <Icon name="calendar-plus" size={18} aria-hidden="true" />
      <span className={styles.buttonText}>Prendre rendez-vous</span>
    </Button>
  );
};
