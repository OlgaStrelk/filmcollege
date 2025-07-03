import styles from "./Hero.module.scss";

interface HeroData {
  video: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonUrl: string;
}

const hero: HeroData = {
  video: "/videos/hero-video.mov",
  title: "Новый киноколледж — среда, где человек раскрывается как автор",
  subtitle: "Учеба как рост, кино как язык",
  buttonText: "Записаться",
  buttonUrl: "https://t.me/+11Tx3t59WzNkODBi",
};

const Hero: React.FC = () => (
  <section className={styles.hero}>
    <video
      className={styles["hero-video"]}
      autoPlay
      loop
      muted
      playsInline
      src={hero.video}
    >
      <source src={hero.video} type="video/mvo" />
      Ваш браузер не поддерживает тег видео.
    </video>
    <div className={styles["hero-overlay"]}></div>
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
