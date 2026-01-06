"use client";

import { useRef, useState, useCallback } from 'react';
import styles from './Testimonials.module.css';
import testimonialData from '@/data/testimonials.json';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

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

  const checkScrollButtons = useCallback(() => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  }, []);

  const handleManualScroll = useCallback((direction: 'left' | 'right') => {
    if (containerRef.current) {
      const container = containerRef.current;
      const testimonialWidth = container.firstElementChild?.clientWidth || 0;
      container.scrollTo({
        left: container.scrollLeft + (direction === 'left' ? -testimonialWidth : testimonialWidth),
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
      onKeyDown={handleKeyDown}
      role="region"
      aria-roledescription="Carrousel d'avis clients"
    >
      <h2 id="testimonials-title">
        Avis des patients
      </h2>
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
            <div>
            <div className={styles.testimonial__header}>
              <h3 className={styles.testimonial__name}>{testimonial.name}</h3>
              <StarRating rating={testimonial.rating} />
            </div>
            <p className={styles.testimonial__text}>{testimonial.text}</p>
            </div>
            <p className={styles.testimonial__date}>{testimonial.date}</p>
          </li>
        ))}
      </ul>
      <div className={styles.testimonials__navigation}>
        <button
          onClick={() => handleManualScroll('left')}
          className={`${styles.nav_button} ${styles.prev_button}`}
          disabled={!canScrollLeft}
          aria-label="Voir les avis précédents"
        >
          <ChevronLeft aria-hidden="true" />
        </button>
        <button
          onClick={() => handleManualScroll('right')}
          className={`${styles.nav_button} ${styles.next_button}`}
          disabled={!canScrollRight}
          aria-label="Voir les avis suivants"
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>
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
          <ExternalLink />
        </Link>
      </footer>
    </section>
  );
};
