import styles from "./Workshops.module.scss";
import { Link } from "react-router-dom";

import ActorImage from "../../assets/images/workshops/actor.png";
import ScreenwriterImage from "../../assets/images/workshops/screenwriter.png";
import DirectorImage from "../../assets/images/workshops/director.png";
import EditorImage from "../../assets/images/workshops/editor.png";
import SoundengineerImage from "../../assets/images/workshops/soundengineer.png";
import CinematographerImage from "../../assets/images/workshops/cinematographer.png";

import Icon1 from "../../icons/workshop/icon1.svg?react";
import Icon2 from "../../icons/workshop/icon2.svg?react";
import Icon3 from "../../icons/workshop/icon3.svg?react";
import Icon4 from "../../icons/workshop/icon4.svg?react";
import Icon5 from "../../icons/workshop/icon5.svg?react";
import Icon6 from "../../icons/workshop/icon6.svg?react";
import HoverIcon1 from "../../icons/workshop/hover/icon1.svg?react";
import HoverIcon2 from "../../icons/workshop/hover/icon2.svg?react";
import HoverIcon3 from "../../icons/workshop/hover/icon3.svg?react";
import HoverIcon4 from "../../icons/workshop/hover/icon4.svg?react";
import HoverIcon5 from "../../icons/workshop/hover/icon5.svg?react";
import HoverIcon6 from "../../icons/workshop/hover/icon6.svg?react";

interface Workshop {
  title: string;
  image: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  hoverIcon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const workshops: Workshop[] = [
  {
    title: "Актер",
    image: ActorImage,
    icon: Icon1,
    hoverIcon: HoverIcon1,
  },
  {
    title: "Сценарист",
    image: ScreenwriterImage,
    icon: Icon2,
    hoverIcon: HoverIcon2,
  },
  {
    title: "Режиссер",
    image: DirectorImage,
    icon: Icon3,
    hoverIcon: HoverIcon3,
  },
  {
    title: "Режиссер монтажа",
    image: EditorImage,
    icon: Icon4,
    hoverIcon: HoverIcon4,
  },
  {
    title: "Звукорежиссер",
    image: SoundengineerImage,
    icon: Icon5,
    hoverIcon: HoverIcon5,
  },
  {
    title: "Оператор",
    image: CinematographerImage,
    icon: Icon6,
    hoverIcon: HoverIcon6,
  },
];

const Workshops: React.FC = () => (
  <section className={styles.workshops} id="programs">
    <h2>Мастерские</h2>
    <div className={styles["workshop-grid"]}>
      {workshops.map((workshop, index) => {
        const Icon = workshop.icon;
        const HoverIcon = workshop.hoverIcon;
        return (
          <Link
            to="#"
            key={workshop.title + index}
            className={styles["workshop-item"]}
            aria-label={`Подробнее о мастерской ${workshop.title}`}
          >
            <div className={styles["card-background"]}></div>
            <Icon className={styles["workshop-icon"]} />
            <HoverIcon className={styles["workshop-icon-hover"]} />
            <div className={styles.title}>{workshop.title}</div>
            <div
              className={styles["hover-image"]}
              style={{ backgroundImage: `url(${workshop.image})` }}
            ></div>
          </Link>
        );
      })}
    </div>
  </section>
);

export default Workshops;
