import Image from "next/image";
import Link from "next/link";
import styles from "./LinkCards.module.css";

interface LinkCardsProps {
  theme: Theme;
  href: string;
  title: string;
  imgSrc: string;
  width: number;
  height: number;
  alt?: string;
}

export enum Theme {
  Dark = 'dark',
  Light = 'light'
}

export const LinkCards = ({theme, href, title, imgSrc, width, height, alt}: LinkCardsProps) => {
  return (
    <Link href={href} tabIndex={-1} className={styles.linkCard + ' ' + styles[theme]}>
      <h3>{title}</h3>
      <div className={styles.imageContainer}>
        <Image
          src={imgSrc}
          alt={alt ? alt : ""}
          width={width}
          height={height}
          className={styles.image}
        />
      </div>
    </Link>
  );
};
