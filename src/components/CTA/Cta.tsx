'use client';

import styles from './Cta.module.css';
import { CalendarPlus } from 'lucide-react';
import { useEffect, useState } from 'react';

export const Cta = () => {
  const [isCompactView, setIsCompactView] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      const width = window.innerWidth;
      setIsCompactView(width >= 1024 && width <= 1280);
    };

    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <a 
      href="#contact" 
      className={styles.button}
      aria-label={isCompactView ? 'Prendre rendez-vous' : undefined}
    >
      <CalendarPlus size={18} aria-hidden="true" />
      <span className={styles.buttonText}>Prendre rendez-vous</span>
    </a>
  );
};
