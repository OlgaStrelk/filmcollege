import React, { useState } from "react";
import styles from "./Workshops.module.scss";
import CloseIcon from "../../assets/icons/close.svg?react";

import ActorImage from "../../assets/images/workshops/actor.png";
import ScreenwriterImage from "../../assets/images/workshops/screenwriter.png";
import DirectorImage from "../../assets/images/workshops/director.png";
import EditorImage from "../../assets/images/workshops/editor.png";
import SoundengineerImage from "../../assets/images/workshops/soundengineer.png";
import CinematographerImage from "../../assets/images/workshops/cinematographer.png";

import Icon1 from "../../assets/icons/workshop/icon1.svg?react";
import Icon2 from "../../assets/icons/workshop/icon2.svg?react";
import Icon3 from "../../assets/icons/workshop/icon3.svg?react";
import Icon4 from "../../assets/icons/workshop/icon4.svg?react";
import Icon5 from "../../assets/icons/workshop/icon5.svg?react";
import Icon6 from "../../assets/icons/workshop/icon6.svg?react";

interface Workshop {
  title: string;
  image: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  popupDescription: string;
}

const workshops: Workshop[] = [
  {
    title: "Актер",
    image: ActorImage,
    icon: Icon1,
    popupDescription:
      "Информация о мастерской 'Актер' находится в стадии разработки. Скоро здесь появится больше деталей!",
  },
  {
    title: "Сценарист",
    image: ScreenwriterImage,
    icon: Icon2,
    popupDescription:
      "Информация о мастерской 'Сценарист' находится в стадии разработки. Скоро здесь появится больше деталей!",
  },
  {
    title: "Режиссер",
    image: DirectorImage,
    icon: Icon3,
    popupDescription:
      "Информация о мастерской 'Режиссер' находится в стадии разработки. Скоро здесь появится больше деталей!",
  },
  {
    title: "Режиссер монтажа",
    image: EditorImage,
    icon: Icon4,
    popupDescription:
      "Информация о мастерской 'Режиссер монтажа' находится в стадии разработки. Скоро здесь появится больше деталей!",
  },
  {
    title: "Звукорежиссер",
    image: SoundengineerImage,
    icon: Icon5,
    popupDescription:
      "Информация о мастерской 'Звукорежиссер' находится в стадии разработки. Скоро здесь появится больше деталей!",
  },
  {
    title: "Оператор",
    image: CinematographerImage,
    icon: Icon6,
    popupDescription:
      "Информация о мастерской 'Оператор' находится в стадии разработки. Скоро здесь появится больше деталей!",
  },
];

const Workshops: React.FC = () => {
  const [popup, setPopup] = useState<{
    isOpen: boolean;
    title?: string;
    description?: string;
  }>({
    isOpen: false,
  });

  const openPopup = (title: string, description: string) => {
    setPopup({ isOpen: true, title, description });
  };

  const closePopup = () => {
    setPopup({ isOpen: false });
  };

  return (
    <section className={styles.workshops} id="workshops">
      <h2>Мастерские</h2>
      <div className={styles["workshop-grid"]}>
        {workshops.map((workshop, index) => {
          const Icon = workshop.icon;
          return (
            <div
              key={workshop.title + index}
              className={styles["workshop-item"]}
              onClick={() =>
                openPopup(workshop.title, workshop.popupDescription)
              }
              role="button"
              tabIndex={0}
              aria-label={`Подробнее о мастерской ${workshop.title}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  openPopup(workshop.title, workshop.popupDescription);
                }
              }}
            >
              <div className={styles["card-background"]}></div>
              <Icon className={styles["workshop-icon"]} />
              <div className={styles.title}>{workshop.title}</div>
              <div
                className={styles["hover-image"]}
                style={{ backgroundImage: `url(${workshop.image})` }}
              ></div>
            </div>
          );
        })}
      </div>

      {popup.isOpen && (
        <div className={styles.popup}>
          <div className={styles["popup-overlay"]} onClick={closePopup}></div>
          <div className={styles["popup-content"]}>
            <div className={styles["popup-header"]}>
              <h3 className={styles["popup-title"]}>
                Мастерская "{popup.title}"
              </h3>
              <CloseIcon
                className={styles["popup-close"]}
                onClick={closePopup}
                role="button"
                aria-label="Закрыть попап"
              />
            </div>
            <p className={styles["popup-description"]}>{popup.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Workshops;
