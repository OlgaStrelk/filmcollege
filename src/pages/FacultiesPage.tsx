import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./FacultiesPage.module.scss";
import Faculty from "../ui/Faculty/Faculty";
import CurriculumCards from "../ui/CurriculumCards/CurriculumCards";
import ActorFaculty from "../assets/images/faculties/page_faculties/actors.png";
import CinemaFaculty from "../assets/images/faculties/page_faculties/cinema.png";
import GeneralFaculty from "../assets/images/faculties/page_faculties/general.png";

type FacultyData = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
};

const facultiesData: FacultyData[] = [
  {
    id: "actors",
    title: "Актёрский факультет",
    description:
      "Актёрский факультет сочетает прохождение классической театральной школы, погружение в специфику кино и освоение методов преподавания актерского мастерства. Подготовка актеров, способных работать в киноиндустрии, на телевидении, в современных цифровых форматах (сериалы, веб-проекты), театре, образовании, психологии, арт-терапии.",
    imageSrc: ActorFaculty,
  },
  {
    id: "cinema",
    title: "Кинофакультет",
    description:
      "Освоение современных техник и технологий (позиция мастера и ремесленника). Продвижение проектов и творческих команд с помощью проектно-продюсерского центра.",
    imageSrc: CinemaFaculty,
  },
  {
    id: "general",
    title: "Общее образование",
    description:
      "Особенности образовательной системы Нового Киноколледжа - углубленное преподавание гуманитарных предметов - история искусств (изо, музыка, театр) история кино, философия, психология, история религий итд; психологическая подготовка к творческой профессии (навыки рефлексии и работы с эмоциями и чувствами); практика в социальных проектах и экспедициях.",
    imageSrc: GeneralFaculty,
  },
];

const FacultiesPage: React.FC = () => {
  const { facultyId } = useParams<{ facultyId?: string }>();
  const [selectedFaculty, setSelectedFaculty] = useState<string>(
    facultyId || facultiesData[0].id,
  );

  useEffect(() => {
    if (facultyId && facultiesData.some((f) => f.id === facultyId)) {
      setSelectedFaculty(facultyId);
    } else {
      setSelectedFaculty(facultiesData[0].id);
    }
  }, [facultyId]);

  const handleFacultyChange = (facultyId: string) => {
    setSelectedFaculty(facultyId);
    // Обновляем URL без перезагрузки
    window.history.pushState({}, "", `/faculties/${facultyId}`);
  };

  const currentFaculty =
    facultiesData.find((f) => f.id === selectedFaculty) || facultiesData[0];

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        {facultiesData.map((faculty) => (
          <button
            key={faculty.id}
            onClick={() => handleFacultyChange(faculty.id)}
            className={selectedFaculty === faculty.id ? styles.active : ""}
          >
            {faculty.title}
          </button>
        ))}
      </div>
      <Faculty
        title={currentFaculty.title}
        description={currentFaculty.description}
        imageSrc={currentFaculty.imageSrc}
      />
      <CurriculumCards selectedFaculty={currentFaculty.title} />
    </div>
  );
};

export default FacultiesPage;
