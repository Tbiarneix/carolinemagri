import Image from 'next/image';
import styles from './InfoCards.module.css';
import { ReactNode } from 'react';

interface InfoCardsProps {
  children: ReactNode;
  imgSrc: string;
  imgAlt?: string;
  title: string;
  width?: number;
  height?: number;
}

export const InfoCards = ({ children, imgSrc, imgAlt, title, width = 300, height = 300 }: InfoCardsProps) => {
    const alt = imgAlt ? imgAlt : "";
  
    return (
    <div className={styles.imageCard}>
      <div className={styles.imageWrapper}>
        <Image
          src={imgSrc}
          alt={alt}
          width={width}
          height={height}
          className={styles.image}
        />
      </div>
      <h3>{title}</h3>
      {children}
    </div>
  );
};