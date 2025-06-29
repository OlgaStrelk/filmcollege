import styles from "/Teachers.module.scss";
import teachersData from "../../data/teachers.json";

interface Teacher {
  name: string;
  role: string;
  image: string;
}

interface TeachersProps {
  teachers: Teacher[];
}

const teachers: Teacher[] = teachersData;

const Teachers: React.FC<TeachersProps> = () => (
  <section className={styles.teachers}>
    <div className={styles.container}>
      <h2>Педагоги и сотрудники</h2>
      <div className={styles["teachers-carousel"]}>
        {[...teachers, ...teachers].map((teacher, index) => (
          <div className={styles["teacher-card"]} key={index}>
            <img
              src={teacher.image}
              alt={`Portrait of ${teacher.name}`}
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

export default Teachers;
