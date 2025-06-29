import styles from "./Faculties.module.scss";

interface FacultyContent {
  title: string;
  description: string;
  linkText: string;
}

interface FacultiesProps {
  activeFaculty: string;
  setActiveFaculty: (faculty: string) => void;
}

const Faculties: React.FC<FacultiesProps> = ({
  activeFaculty,
  setActiveFaculty,
}) => {
  const faculties: Record<string, FacultyContent> = {
    "АКТЁРСКИЙ ФАКУЛЬТЕТ": {
      title: "Актёрский факультет",
      description:
        "Актёрский факультет сочетает прохождение классической театральной школы, погружение в специфику кино и освоение методов преподавания актёрского мастерства. Подготовка актёров, способных работать в киноиндустрии, на телевидении, в современных цифровых форматах (сериалы, веб-проекты), театре, образовании, психологии, арт-терапии.",
      linkText: "Подробнее о факультете",
    },
    КИНОФАКУЛЬТЕТ: {
      title: "Кинофакультет",
      description:
        "В программе факультета — изучение выразительных средств кино, исследование языка кино, освоение современных технологий кинопроизводства, изучение профессии в одной из пяти мастерских, работа над кинопроектами в творческих командах, производственная практика в кинопродакшенах.",
      linkText: "Подробнее о факультете",
    },
    "ОБЩЕЕ ОБРАЗОВАНИЕ": {
      title: "Общее образование",
      description:
        "Особенности образовательной системы Нового Киноколледжа — углублённое преподавание гуманитарных предметов: истории искусств (изобразительного искусства, музыки, театра, кино), философии, психологии, истории религий; развитие учебных навыков; психологическая подготовка к творческой профессии (навыки рефлексии, работы с эмоциями и чувствами); практика в социальных проектах и экспедициях.",
      linkText: "Подробнее о факультете",
    },
  };

  const currentFaculty =
    faculties[activeFaculty] || faculties["АКТЁРСКИЙ ФАКУЛЬТЕТ"];

  return (
    <section className={styles["faculty-section"]}>
      <div className={styles.container}>
        <div className={styles["faculty-tabs"]}>
          {Object.keys(faculties).map((faculty) => (
            <button
              key={faculty}
              className={`${styles["faculty-tab"]} ${activeFaculty === faculty ? styles.active : ""}`}
              onClick={() => setActiveFaculty(faculty)}
            >
              {faculty}
            </button>
          ))}
        </div>
        <div className={styles["faculty-content"]}>
          <h3>{currentFaculty.title}</h3>
          <p>{currentFaculty.description}</p>
          <a href="#" className={styles["more-link"]}>
            {currentFaculty.linkText}{" "}
            <span className={styles.icon}>
              <i className="fas fa-arrow-right"></i>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faculties;
