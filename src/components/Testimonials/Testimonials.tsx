"use client";

import { useRef, useState, useEffect, useCallback } from 'react';
import styles from './Testimonials.module.css';
import testimonialData from '@/data/testimonials.json';
import Link from 'next/link';

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className={styles.testimonial__rating} aria-label={`Note : ${rating} sur 5`}>
      {[...Array(5)].map((_, index) => (
        <span key={index} aria-hidden="true">
          {index < rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

export const Testimonials = () => {
  const containerRef = useRef<HTMLUListElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const scrollSpeedRef = useRef(0.05); // Vitesse réduite : 0.05 pixels par milliseconde

  const checkScrollButtons = useCallback(() => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);

  const scroll = useCallback((direction: 'left' | 'right', amount: number) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = direction === 'left' ? -amount : amount;
      container.scrollLeft += scrollAmount;

      // Retour au début si on est à la fin
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 1) {
        container.scrollLeft = 0;
      }
      checkScrollButtons();
    }
  }, [checkScrollButtons]);

  const animate = useCallback((timestamp: number) => {
    if (!lastTimeRef.current) lastTimeRef.current = timestamp;
    const deltaTime = timestamp - lastTimeRef.current;
    lastTimeRef.current = timestamp;

    if (!isPaused) {
      // Utiliser deltaTime pour un mouvement fluide indépendant du framerate
      const pixelsToMove = scrollSpeedRef.current * deltaTime;
      scroll('right', pixelsToMove);
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [isPaused, scroll]);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      checkScrollButtons();
      container.addEventListener('scroll', checkScrollButtons);
      window.addEventListener('resize', checkScrollButtons);

      // Démarrer l'animation
      animationRef.current = requestAnimationFrame(animate);

      return () => {
        container.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
        if (animationRef.current !== null) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [checkScrollButtons, animate]);

  const handleManualScroll = useCallback((direction: 'left' | 'right') => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = 100; // Défilement plus rapide pour les clics manuels
      container.scrollTo({
        left: container.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount),
        behavior: 'smooth'
      });
      checkScrollButtons();
    }
  }, [checkScrollButtons]);

  // Gestion du clavier pour l'accessibilité
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handleManualScroll('left');
    } else if (e.key === 'ArrowRight') {
      handleManualScroll('right');
    }
  }, [handleManualScroll]);

  return (
    <section 
      className={styles.testimonials} 
      aria-labelledby="testimonials-title"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      role="region"
      aria-roledescription="Carrousel d'avis clients"
    >
      <h2 id="testimonials-title">
        Avis des patients
      </h2>
      <button
        onClick={() => handleManualScroll('left')}
        className={`${styles.nav_button} ${styles.prev_button}`}
        disabled={!canScrollLeft}
        aria-label="Voir les avis précédents"
      >
        ←
      </button>
      <ul 
        ref={containerRef}
        className={styles.testimonials__container}
        role="list"
        aria-live="polite"
      >
        {testimonialData.testimonials.map((testimonial) => (
          <li 
            key={testimonial.id} 
            className={styles.testimonial}
            tabIndex={0}
          >
            <div className={styles.testimonial__header}>
              <h3 className={styles.testimonial__name}>{testimonial.name}</h3>
              <StarRating rating={testimonial.rating} />
            </div>
            <p className={styles.testimonial__text}>{testimonial.text}</p>
            <p className={styles.testimonial__date}>{testimonial.date}</p>
          </li>
        ))}
      </ul>
      <button
        onClick={() => handleManualScroll('right')}
        className={`${styles.nav_button} ${styles.next_button}`}
        disabled={!canScrollRight}
        aria-label="Voir les avis suivants"
      >
        →
      </button>

      <footer className={styles.testimonials__footer}>
        <div className={styles.average_rating}>
          <span>Note moyenne :</span>
          <StarRating rating={testimonialData.averageRating} />
          <span>{testimonialData.averageRating}/5</span>
        </div>
        <Link 
          href={testimonialData.googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.google_link}
          aria-label="Voir tous les avis sur Google"
        >
          Voir tous les avis sur Google
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M16 8v-4l8 8-8 8v-4h-16v-8h16z"/>
          </svg>
        </Link>
      </footer>
    </section>
  );
};
