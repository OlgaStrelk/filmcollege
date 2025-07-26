import React from "react";
import styles from "./Faculty.module.scss";

interface FacultyProps {
  title: string;
  description: string;
  imageSrc: string;
}

const Faculty: React.FC<FacultyProps> = ({ title, description, imageSrc }) => {
  return (
    <div className={styles["faculty-container"]}>
      <div className={styles["content"]}>
        <h2>{title}</h2>
        <hr className={styles["full-width-line"]} />
        <div className={styles["details"]}>
          <img src={imageSrc} alt={title} className={styles["faculty-image"]} />
          <p className={styles["faculty-description"]}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
