import styles from "./Workshops.module.scss";
import workshopsData from "../../data/workshops.json";

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
        <div className={styles["workshop-item"]} key={index}>
          <img className={styles["workshop-icon"]} src={workshop.icon}></img>
          <div className={styles.title}>{workshop.title}</div>
          <div
            className={styles["hover-image"]}
            style={{ backgroundImage: `url(${workshop.image})` }}
          ></div>
        </div>
      ))}
    </div>
  </section>
);

export default Workshops;
