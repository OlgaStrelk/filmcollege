import styles from "./Hero.module.scss";
import heroData from "../../data/hero.json";

interface HeroData {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonUrl: string;
}

const hero: HeroData = heroData;

const Hero: React.FC = () => (
  <section className={styles.hero}>
    <video
      className={styles["hero-video"]}
      autoPlay
      loop
      muted
      playsInline
      src={heroData.video}
    >
      <source src={heroData.video} type="video/mvo" />
      Ваш браузер не поддерживает тег видео.
    </video>
    <div
      className={styles["hero-overlay"]}
      style={{ background: heroData.gradient }}
    ></div>
    <div className={styles["hero-content"]}>
      <h1>{hero.title}</h1>
      <p>{hero.subtitle}</p>
      <div className={styles["hero-buttons"]}>
        <a href={hero.buttonUrl} className={styles["hero-button"]}>
          <span className={styles["button-text"]}>{hero.buttonText}</span>
          <div className={styles["button-icon"]} />
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
