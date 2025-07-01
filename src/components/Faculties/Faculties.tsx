import React, { useState } from "react";
import styles from "./Faculties.module.scss";
import facultiesData from "../../data/faculties.json";
import { LinkButton } from "../../ui/LinkButton";

interface FacultyContent {
  id: string;
  title: string;
  description: string;
  linkUrl: string;
  backgroundImage: string;
}

const typedFaculties: FacultyContent[] = facultiesData;

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
              {faculty.title.toUpperCase()}
            </button>
          ))}
        </div>
        <div className={styles["faculty-content"]}>
          <p>{currentFaculty.description}</p>
          <LinkButton
            variant="outline"
            size="lg"
            href={currentFaculty.linkUrl}
            icon="/icons/link.svg"
          >
            Подробнее о факультете
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default Faculties;
