// import Link from 'next/link';
import styles from './page.module.css';
// import Image from 'next/image';
import { LinkCards, Theme } from '@/components/Cards/LinkCards/LinkCards';
import { Testimonials } from '@/components/Testimonials/Testimonials';

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.hero__content}>
          <div className={styles.hero__presentation}>
            <h1 className={styles.hero__title}>
              Caroline Magri
              <span className={styles.hero__subtitle}>Psychologue et Sophrologue</span>
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
      </section>

      <section className={styles.discovery}>
        <h2>Découvrir</h2>
        <ul className={styles.discovery__container}>
          <li className={styles.discovery__item} tabIndex={0} aria-label="La Psychologie" role="link">
            <LinkCards
              theme={Theme.Light}
              href="/psychologie"
              title="La Psychologie"
              imgSrc="/images/adultes.jpg"
              width={300}
              height={250}
              alt=""
            />
          </li>
          <li className={styles.discovery__item} tabIndex={0} aria-label="La Sophrologie" role="link">
            <LinkCards
              theme={Theme.Light}
              href="/sophrologie"
              title="La Sophrologie"
              imgSrc="/images/adultes.jpg"
              width={300}
              height={250}
              alt=""
            />
          </li>
          <li className={styles.discovery__item} tabIndex={0} aria-label="Bilan Psychologique" role="link">
            <LinkCards
              theme={Theme.Light}
              href="/bilan"
              title="Bilans"
              imgSrc="/images/adultes.jpg"
              width={300}
              height={250}
              alt=""
            />
          </li>
          <li className={styles.discovery__item} tabIndex={0} aria-label="Contact" role="link">
            <LinkCards
              theme={Theme.Light}
              href="/honoraires-et-contact"
              title="Contact"
              imgSrc="/images/adultes.jpg"
              width={300}
              height={250}
              alt=""
            />
          </li>
        </ul>
      </section>
      
      <section className={styles.professional}>
        <h2>Présentation</h2>
        <div className={styles.professional__content}>
          <div className={styles.professional__column}>
            <h3>Mon parcours professionnel</h3>
            <p>
              Spécialisée dans le développement, je suis diplomée d&apos;un Master professionnel 
              de Psychologie du développement de l&apos;enfant et de l&apos;adolescent obtenu à 
              l&apos;Université de Rouen Normandie à Caen. Je suis également diplomée en 
              sophrologie et inscrite au Répertoire National des Certifications 
              professionnelles.
            </p>
            <p>
              De part ma formation et ma pratique, je considère la personne dans sa 
              globalité et dans l&apos;ensemble des contextes où elle évolue afin de mieux 
              comprendre les difficultés qu&apos;elle peut rencontrer. Ma formation de 
              psychologue du développement m&apos;a permis d&apos;acquérir une approche intégrative 
              professionnelle de la personne humaine : il s&apos;agit non pas d&apos;un point central de la 
              prise en charge psychologique.
            </p>
            <p>
              La psychologie du développement s&apos;intéresse au développement de l&apos;individu 
              de la naissance à l&apos;adolescence. L&apos;objet de la psychologie du développement 
              concerne l&apos;analyse des changements développementaux et l&apos;étude de multiples 
              facteurs et de leur interaction intervenant sur l&apos;évolution. Elle ne se résume 
              pas aux enseignements qui se produisent pendant l&apos;enfance mais s&apos;intéresse à 
              l&apos;ensemble des changements qui se produisent de la conception jusqu&apos;à la fin 
              de la vie.
            </p>
            <p>
              Mon travail dans le domaine de la psychologie du développement s&apos;intéresse à la 
              manière dont un individu n&apos;est considéré que sur son plan affectif, social et cognitif 
              et des outils dont il dispose pour évoluer dans son environnement.
            </p>
          </div>
          <div className={styles.professional__column}>
            <h3>Le cabinet</h3>
            <p>
              Je reçois au sein de mon cabinet (libéral) des enfants, des adolescents et des 
              adultes, ainsi que des couples et des familles rencontrant des difficultés à un 
              moment de leur vie.
            </p>
            <p>
              En fonction de vos difficultés et de votre demande, je pourrais vous proposer un 
              suivi psychologique individuel, familial et/ou un bilan psychologique (enfants 
              et adolescents) et un suivi sophrologique.
            </p>
            <p>
              En tant que membre du Registre de Santé, mon numéro RPPS est le 10089531727, 
              mon numéro numéro ADELI est le 359154141.
            </p>
            <p>
              Je travaille dans le respect du Code de Déontologie des Psychologues.
            </p>
            <p>
              Je travaille également avec d&apos;autres professionnels des communes 
              avoisinantes : les écoles, les médecins traitants, les orthophonistes, les 
              psychomotriciens...
            </p>
          </div>
        </div>
    </section>
    <Testimonials />
    </>
  );
}
