import styles from './page.module.css';
import { LinkCards, Theme } from '@/components/Cards/LinkCards/LinkCards';
import { Testimonials } from '@/components/Testimonials/Testimonials';
import { ExternalLink } from 'lucide-react';

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
                Vous trouverez également sur ce site quelques informations complémentaires, par exemple sur les différentes professions «&nbsp;psy&nbsp;» ou encore des informations sur la prise en charge en sophrologie.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.discovery}>
        <h2>Découvrir</h2>
        <ul className={styles.discovery__container}>
          <li className={styles.discovery__item} aria-label="La Psychologie">
            <LinkCards
              theme={Theme.Light}
              href="/psychologie"
              title="La Psychologie"
              imgSrc="/images/Psychologue-et-enfant-1.jpg"
              width={300}
              height={250}
              alt=""
            />
          </li>
          <li className={styles.discovery__item} aria-label="La Sophrologie">
            <LinkCards
              theme={Theme.Light}
              href="/sophrologie"
              title="La Sophrologie"
              imgSrc="/images/Zenitude.jpg"
              width={300}
              height={250}
              alt=""
            />
          </li>
          <li className={styles.discovery__item} aria-label="Bilan Psychologique">
            <LinkCards
              theme={Theme.Light}
              href="/bilan-psychologique"
              title="Bilans"
              imgSrc="/images/Famille.jpg"
              width={300}
              height={250}
              alt=""
            />
          </li>
          <li className={styles.discovery__item} aria-label="Contact">
            <LinkCards
              theme={Theme.Light}
              href="/honoraires-et-contact"
              title="Contact"
              imgSrc="/images/Solidaire.jpg"
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
              Spécialisée dans le développement, je suis diplômée d&apos;un Master professionnel de Psychologie du développement de l&apos;enfant et de l&apos;adolescent obtenu à l&apos;Université de Basse Normandie à Caen. Je suis également diplômée en Sophrologie et inscrit au Répertoire National des Certifications professionnelles.<br />
              <a href="http://www.cncp.gouv.fr/" target="_blank" rel="noopener noreferrer">http://www.cncp.gouv.fr/ <ExternalLink size={16} aria-hidden="true" /></a>
            </p>
            <p>
              De part ma formation et ma pratique, je considère la personne dans sa globalité et tiens compte des contextes au sein desquels elle évolue afin de soutenir l&apos;émergence de ses capacités, de favoriser son autonomie et son mieux-être. L&apos;intégration de la sphère familiale, sociale et scolaire/professionnelle de la personne, constitue à mon sens un point central de la prise en charge psychologique.
            </p>
            <p>
              La psychologie du développement s&apos;intéresse au développement de l&apos;individu de la naissance à l&apos;adolescence. L&apos;objet de la psychologie du développement concerne l&apos;analyse des changements développementaux et l&apos;étude de multiples facteurs et de leur interaction intervenant sur l&apos;évolution. Elle ne se restreint pas aux changements qui se produisent pendant l&apos;enfance mais s&apos;intéresse à l&apos;ensemble des changements qui se produisent dès la conception jusqu&apos;à la fin de la vie.
            </p>
            <p>
              Elle cherche donc à comprendre l&apos;organisation psychique d&apos;un individu, et son évolution dans le temps. Le psychologue du développement s&apos;intéresse à la manière dont un individu s&apos;est construit sur les plans affectif, social et cognitif, et aux outils dont il dispose pour évoluer dans son environnement.
            </p>
            <p>
              
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
              mon numéro numéro ADELI est le 359154141.<br />
              <a href="https://www.occitanie.ars.sante.fr/" target="_blank" rel="noopener noreferrer">https://www.occitanie.ars.sante.fr/ <ExternalLink size={16} aria-hidden="true" /></a> 
            </p>
            <p>
              Je travaille dans le respect du Code de Déontologie des Psychologues.<br />
              <a href="http://www.codededeontologiedespsychologues.fr/" target="_blank" rel="noopener noreferrer">http://www.codededeontologiedespsychologues.fr/ <ExternalLink size={16} aria-hidden="true" /></a>
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
