import styles from './Professional.module.css';

export const Professional = () => {
  return (
    <section className={styles.professional}>
      <h2>Présentation</h2>
      <div className={styles.content}>
        <div className={styles.column}>
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
        <div className={styles.column}>
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
          <div className={styles.cta}>
            <a href="#contact" className={styles.button}>
              Prendre rendez-vous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
