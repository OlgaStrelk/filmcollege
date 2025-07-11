import React from "react";
import styles from "./CardItem.module.scss";

import Icon1 from "../../assets/icons/workshop/icon1.svg?react";
import Icon2 from "../../assets/icons/workshop/icon2.svg?react";
import Icon3 from "../../assets/icons/workshop/icon3.svg?react";
import Icon4 from "../../assets/icons/workshop/icon4.svg?react";
import Icon5 from "../../assets/icons/workshop/icon5.svg?react";
import Icon6 from "../../assets/icons/workshop/icon6.svg?react";

interface CardItemProps {
  title: string;
  image?: string; // Для Workshops — фоновая картинка
  icon: string; // Название иконки ("icon1", "icon2", ...)
  popupDescription?: string; // Описание для попапа (для Workshops)
  places?: number; // Количество мест (для Faculties)
  bgColor?: string; // Цвет фона иконки (для Faculties)
  textColor?: string; // Цвет текста (для Faculties)
  onClick?: () => void; // Обработчик клика для открытия попапа
  className?: string; // Дополнительный класс для ховер-эффектов
}

const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
  icon1: Icon1,
  icon2: Icon2,
  icon3: Icon3,
  icon4: Icon4,
  icon5: Icon5,
  icon6: Icon6,
};

const CardItem: React.FC<CardItemProps> = ({
  title,
  image,
  icon,
  // popupDescription,
  places,
  bgColor,
  textColor,
  onClick,
  className,
}) => {
  const Icon = iconMap[icon];

  if (!Icon) {
    console.error(`Icon ${icon} not found`);
    return null;
  }

  return (
    <div
      className={`${styles.cardItem} ${className || ""}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`Подробнее о ${title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onClick?.();
        }
      }}
    >
      <div className={styles.cardBackground}></div>
      <Icon
        className={styles.cardIcon}
        style={bgColor ? { backgroundColor: bgColor } : undefined}
      />
      {image && (
        <div
          className={styles.hoverImage}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      )}
      <div
        className={styles.title}
        style={textColor ? { color: textColor } : undefined}
      >
        {title}
      </div>
      {places && (
        <div
          className={styles.places}
          style={textColor ? { color: textColor } : undefined}
        >
          {places}
        </div>
      )}
    </div>
  );
};

export default CardItem;
