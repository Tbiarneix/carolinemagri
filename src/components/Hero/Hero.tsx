import Image from 'next/image';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.presentation}>
          <h1 className={styles.title}>
            Caroline Magri
            <span className={styles.subtitle}>Psychologue et Sophrologue</span>
          </h1>
          <div>
            <h2>Bienvenue</h2>
            <p>
              Je m&apos;appelle Caroline MAGRI, je suis psychologue du développement de l&apos;enfant et de l&apos;adolescent et sophrologue. Je vous souhaite la bienvenue sur mon site, qui a pour objectif de vous éclairer sur ma pratique dans l&apos;accompagnement psychologique-enfants, d&apos;adolescents et d&apos;adultes en difficulté, à un moment de leur vie.
            </p>
            <p>
              Vous trouverez également sur ce site quelques informations complémentaires, par exemple sur les différentes professions « psy » ou encore des informations sur la prise en charge en sophrologie.
            </p>
          </div>
        </div>
      </div>
      <Image src="/images/hero-wide.jpg" alt="" width={1400} height={475} className={styles.imageBanner} />
    </section>
  );
};
