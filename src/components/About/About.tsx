import styles from "./About.module.scss";
import aboutData from "../../data/about.json";

interface AboutData {
  title: string;
  content: string[];
  sidebar: string[];
}

const about: AboutData = aboutData;

const About: React.FC = () => (
  <section className={styles.about}>
    <h2>{about.title}</h2>
    <div className={styles["about-container"]}>
      <div className={styles["about-content"]}>
        {about.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className={styles["about-sidebar"]}>
        {about.sidebar.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  </section>
);

export default About;
