import React, { useEffect, useState } from "react";
import styles from "./Faculties.module.scss";
import { LinkButton } from "../../ui/LinkButton";
import Link from "../../icons/link.svg?react";
import Actors from "../../assets/images/faculties/actors.png";
import Cinema from "../../assets/images/faculties/cinema.png";
import General from "../../assets/images/faculties/general.png";

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
    description: "...",
    linkUrl: "#",
    backgroundImage: Actors,
  },
  {
    id: "film",
    title: "Кинофакультет",
    description: "...",
    linkUrl: "#",
    backgroundImage: Cinema,
  },
  {
    id: "general",
    title: "Общее образование",
    description: "...",
    linkUrl: "#",
    backgroundImage: General,
  },
];

const Faculties: React.FC = () => {
  const [activeFaculty, setActiveFaculty] = useState(typedFaculties[0].id);

  useEffect(() => {
    typedFaculties.forEach((faculty) => {
      const img = new Image();
      img.src = faculty.backgroundImage;
    });
  }, []);

  const currentFaculty =
    typedFaculties.find((faculty) => faculty.id === activeFaculty) ||
    typedFaculties[0];

  return (
    <section className={styles["faculty-section"]} id="faculties">
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
              </span>
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
