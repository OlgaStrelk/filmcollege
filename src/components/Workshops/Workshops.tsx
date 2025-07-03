import styles from "./Workshops.module.scss";
import { Link } from "react-router-dom";

interface Workshop {
  title: string;
  image: string;
  icon: string;
}

const workshops: Workshop[] = [
  {
    title: "Актер",
    image: "/images/workshops/actor.png",
    icon: "/icons/workshop/icon1.svg",
  },
  {
    title: "Сценарист",
    image: "/images/workshops/screenwriter.png",
    icon: "/icons/workshop/icon2.svg",
  },
  {
    title: "Режиссер",
    image: "/images/workshops/director.png",
    icon: "/icons/workshop/icon3.svg",
  },
  {
    title: "Режиссер монтажа",
    image: "/images/workshops/editor.png",
    icon: "/icons/workshop/icon4.svg",
  },
  {
    title: "Звукорежиссер",
    image: "/images/workshops/soundengineer.png",
    icon: "/icons/workshop/icon5.svg",
  },
  {
    title: "Оператор",
    image: "/images/workshops/cinematographer.png",
    icon: "/icons/workshop/icon6.svg",
  },
];

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
