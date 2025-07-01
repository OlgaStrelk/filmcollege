import styles from "./Workshops.module.scss";
import workshopsData from "../../data/workshops.json";
import { Link } from "react-router-dom";

interface Workshop {
  title: string;
  image: string;
  icon: string;
}

const workshops: Workshop[] = workshopsData;

const Workshops: React.FC = () => (
  <section className={styles.workshops} id="programs">
    <h2>Мастерские</h2>
    <div className={styles["workshop-grid"]}>
      {workshops.map((workshop, index) => (
        <Link
          to="#"
          key={workshop.title + index}
          className={styles["workshop-item"]}
        >
          <div className={styles["card-background"]}></div>
          <img
            className={styles["workshop-icon"]}
            src={workshop.icon}
            alt={`${workshop.title} icon`}
          />
          <img
            className={styles["workshop-icon-hover"]}
            src={`/icons/workshop/hover/icon${index + 1}.svg`}
            alt={`${workshop.title} hover icon`}
          />
          <div className={styles.title}>{workshop.title}</div>
          <div
            className={styles["hover-image"]}
            style={{ backgroundImage: `url(${workshop.image})` }}
          ></div>
        </Link>
      ))}
    </div>
  </section>
);

export default Workshops;
