import React, { useState } from "react";
import styles from "./Faculties.module.scss";
import { LinkButton } from "../../ui/LinkButton";
import Link from "../../icons/link.svg?react";

interface FacultyContent {
  id: string;
  title: string;
  description: string;
  linkUrl: string;
  backgroundImage: string;
}

const typedFaculties: FacultyContent[] = [
  {
    id: "acting",
    title: "Актёрский факультет",
    description:
      "Актёрский факультет сочетает прохождение классической театральной школы, погружение в специфику кино и освоение методов преподавания актёрского мастерства. Подготовка актёров, способных работать в киноиндустрии, на телевидении, в современных цифровых форматах (сериалы, веб-проекты), театре, образовании, психологии, арт-терапии.",
    linkUrl: "#",
    backgroundImage: "/images/faculties/actors.png",
  },
  {
    id: "film",
    title: "Кинофакультет",
    description:
      "Кинофакультет готовит профессионалов киноиндустрии, способных создавать кинопроекты разных жанров и масштабов. В программе факультета — изучение выразительных средств кино, исследование языка кино, освоение современных технологий кинопроизводства, изучение профессии в одной из пяти мастерских, работа над кинопроектами в творческих командах, производственная практика в кинопродакшенах.",
    linkUrl: "#",
    backgroundImage: "/images/faculties/cinema.png",
  },
  {
    id: "general",
    title: "Общее образование",
    description:
      "Особенности образовательной системы Нового Киноколледжа — углублённое преподавание гуманитарных предметов: истории искусств (изобразительного искусства, музыки, театра, кино), философии, психологии, истории религий; развитие учебных навыков; психологическая подготовка к творческой профессии (навыки рефлексии, работы с эмоциями и чувствами); практика в социальных проектах и экспедициях.",
    linkUrl: "#",
    backgroundImage: "/images/faculties/general.png",
  },
];

const Faculties: React.FC = () => {
  const [activeFaculty, setActiveFaculty] = useState(typedFaculties[0].id);
  const currentFaculty =
    typedFaculties.find((faculty) => faculty.id === activeFaculty) ||
    typedFaculties[0];

  return (
    <section className={styles["faculty-section"]}>
      <div className={styles.container}>
        <img
          className={styles["faculty-background"]}
          alt="Faculty background"
          src={currentFaculty.backgroundImage}
        />
        <div className={styles["faculty-tabs"]} data-active={activeFaculty}>
          {typedFaculties.map((faculty) => (
            <button
              key={faculty.id}
              className={`${styles["faculty-tab"]} ${activeFaculty === faculty.id ? styles.active : ""}`}
              onClick={() => setActiveFaculty(faculty.id)}
            >
              <span className={styles["faculty-tab-text"]}>
                {faculty.title.toUpperCase()}
              </span>{" "}
            </button>
          ))}
        </div>
        <div className={styles["faculty-content"]}>
          <p>{currentFaculty.description}</p>
          <LinkButton
            variant="outline"
            size="lg"
            href={currentFaculty.linkUrl}
            icon={Link}
          >
            Подробнее о факультете
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default Faculties;
