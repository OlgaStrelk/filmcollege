import React, { useState } from "react";
import styles from "./Faculties.module.scss";
import facultiesData from "../../data/faculties.json";
import { LinkButton } from "../../ui/LinkButton";

interface FacultyContent {
  id: string;
  title: string;
  description: string;
  linkText: string;
  linkIcon: string;
  linkUrl: string;
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
          src="https://c.animaapp.com/mcixopytg2MdNB/img/union.png"
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
          <h3>{currentFaculty.title}</h3>
          <p>{currentFaculty.description}</p>
          <LinkButton
            variant="outline"
            size="lg"
            icon={currentFaculty.linkIcon}
            href={currentFaculty.linkUrl}
          >
            {currentFaculty.linkText}
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default Faculties;
