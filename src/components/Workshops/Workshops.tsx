import styles from "./Workshops.module.scss";
import { Link } from "react-router-dom";
import ActorImage from "/images/workshops/actor.png";
import ScreenwriterImage from "/images/workshops/screenwriter.png";
import DirectorImage from "/images/workshops/director.png";
import EditorImage from "/images/workshops/editor.png";
import SoundengineerImage from "/images/workshops/soundengineer.png";
import CinematographerImage from "/images/workshops/cinematographer.png";

interface Workshop {
  title: string;
  image: string;
  icon: string;
}

const workshops: Workshop[] = [
  {
    title: "Актер",
    image: ActorImage,
    icon: "/icons/workshop/icon1.svg",
  },
  {
    title: "Сценарист",
    image: ScreenwriterImage,
    icon: "/icons/workshop/icon2.svg",
  },
  {
    title: "Режиссер",
    image: DirectorImage,
    icon: "/icons/workshop/icon3.svg",
  },
  {
    title: "Режиссер монтажа",
    image: EditorImage,
    icon: "/icons/workshop/icon4.svg",
  },
  {
    title: "Звукорежиссер",
    image: SoundengineerImage,
    icon: "/icons/workshop/icon5.svg",
  },
  {
    title: "Оператор",
    image: CinematographerImage,
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
