import styles from "./Teachers.module.scss";
import teachersData from "../../data/teachers.json";
import { useEffect, useMemo } from "react";

interface Teacher {
  name: string;
  role: string;
  image: string;
}

const teachers: Teacher[] = teachersData;

const Teachers: React.FC = () => {
  const doubledTeachers = useMemo(() => [...teachers, ...teachers], []);

  useEffect(() => {
    const carousel = document.querySelector(`.${styles["teachers-carousel"]}`);
    if (carousel) {
      const cardWidth = 307.33 + 20;
      const maxOffset = teachers.length * cardWidth;
      const randomOffset = Math.floor(Math.random() * maxOffset);
      (carousel as HTMLElement).style.setProperty(
        "--random-offset",
        `-${randomOffset}px`,
      );
    }
  }, []);
  return (
    <section className={styles.teachers}>
      <div className={styles.container}>
        <h2>Педагоги и сотрудники</h2>
        <div className={styles["teachers-carousel"]}>
          {doubledTeachers.map((teacher, index) => (
            <div
              className={styles["teacher-card"]}
              key={`${teacher.name}-${index}`}
            >
              <img
                src={teacher.image}
                alt={`${teacher.name}, портрет`}
                className={styles["teacher-image"]}
              />
              <div className={styles["teacher-info"]}>
                <h3 className={styles["teacher-name"]}>{teacher.name}</h3>
                <p className={styles["teacher-role"]}>{teacher.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
