import styles from "./Teachers.module.scss";
import { useEffect, useMemo, useState } from "react";
import { LinkButton } from "../../ui/LinkButton";
import WhiteLink from "../../icons/link_white.svg?react";

interface Teacher {
  name: string;
  role: string;
  image: string;
}

const teachersData: Teacher[] = [
  {
    name: "Ольга Керзина",
    role: "Директор, руководитель кинофакультета, педагог по истории мировых религий",
    image: "/images/team_photo/olga_kerzina.png",
  },
  {
    name: "Евгений Горяинов",
    role: 'Руководитель мастерской "Звукорежиссёр", педагог по звукорежиссуре',
    image: "/images/team_photo/evgeniy_goryainov.png",
  },
  {
    name: "Вячеслав Иванов",
    role: 'Руководитель мастерской "Режиссёр", педагог по истории и языку кино, современному кино и кинопроизводству',
    image: "/images/team_photo/vyacheslav_ivanov.png",
  },
  {
    name: "Арсений Колмыков",
    role: 'Руководитель мастерской "Режиссёр монтажа", педагог по монтажу и кинопроизводству',
    image: "/images/team_photo/arseniy_kolmykov.png",
  },
  {
    name: "Габриела Селиванова",
    role: 'Руководитель мастерской "Сценарист", педагог по истории и теории кино, координатор образовательной программы кинофакультета',
    image: "/images/team_photo/gabriela_selivanova.png",
  },
  {
    name: "Сергей Петров",
    role: 'Со-руководитель мастерской "Режиссёр монтажа", педагог по монтажу, куратор производственной практики',
    image: "/images/team_photo/sergey_petrov.png",
  },
  {
    name: "Роман Лапин",
    role: "Педагог по режиссуре кино и кинодраматургии",
    image: "/images/team_photo/roman_lapin.png",
  },
  {
    name: "Семён Яковлев",
    role: 'Руководитель мастерской "Кинооператор", педагог по операторскому мастерству',
    image: "/images/team_photo/semyon_yakovlev.png",
  },
  {
    name: "Ольга Липман",
    role: "Заместитель директора, руководитель актёрского факультета, психолог",
    image: "/images/team_photo/olga_lipman.png",
  },
  {
    name: "Вера Попова",
    role: "Педагог по актёрскому мастерству",
    image: "/images/team_photo/vera_popova.png",
  },
  {
    name: "Алексей Сухарев",
    role: "Педагог по классическому танцу и сценическому движению",
    image: "/images/team_photo/aleksey_suharev.png",
  },
  {
    name: "Алеся Вельяминова",
    role: "Продюсер проектно-продюсерского центра, педагог по продюсированию, партнёр колледжа по производственной практике",
    image: "/images/team_photo/alesya_velyaminova.png",
  },
  {
    name: "Анжелика Катышева",
    role: "Педагог по актёрскому мастерству",
    image: "/images/team_photo/anzhelika_katysheva.png",
  },
  {
    name: "Алексей Мартынов",
    role: "Педагог по актёрскому мастерству",
    image: "/images/team_photo/aleksey_martynov.png",
  },
  {
    name: "Вера Дорохина",
    role: "Педагог по актёрскому мастерству",
    image: "/images/team_photo/vera_dorohina.png",
  },
  {
    name: "Анна Савранская",
    role: "Педагог по актёрскому мастерству",
    image: "/images/team_photo/anna_savranskaya.png",
  },
  {
    name: "Вера Ельникова",
    role: "Педагог по сценической речи",
    image: "/images/team_photo/vera_elnikova.png",
  },
  {
    name: "Андрей Скрипский",
    role: "Преподаватель психологии, естествознания, ОБЖ",
    image: "/images/team_photo/andrey_skripskiy.png",
  },
  {
    name: "Нина Громыко",
    role: "Преподаватель философии",
    image: "/images/team_photo/nina_gromyko.png",
  },
  {
    name: "Мария Пономарева",
    role: "Преподаватель философии",
    image: "/images/team_photo/mariya_ponomareva.png",
  },
  {
    name: "Марина Васина",
    role: "Преподаватель истории изобразительного искусства и рисунка",
    image: "/images/team_photo/marina_vasina.png",
  },
  {
    name: "Александра Козлова",
    role: "Преподаватель английского и испанского языков",
    image: "/images/team_photo/aleksandra_kozlova.png",
  },
  {
    name: "Владимир Головняк",
    role: "Преподаватель математики, физики и информатики",
    image: "/images/team_photo/vladimir_golovnyak.png",
  },
  {
    name: "Юрий Васильев",
    role: "Преподаватель философии и истории",
    image: "/images/team_photo/yuriy_vasilev.png",
  },
  {
    name: "Лада Фишер",
    role: "Преподаватель математики",
    image: "/images/team_photo/lada_fisher.png",
  },
  {
    name: "Мика Липман",
    role: "Продюсер проектно-продюсерского центра, педагог по продюсированию, партнёр колледжа по производственной практике",
    image: "/images/team_photo/mika_lipman.png",
  },
  {
    name: "Андрей Коростелев",
    role: "Продюсер проектно-продюсерского центра, руководитель производственной практики, педагог по продюсированию",
    image: "/images/team_photo/andrey_korostelev.png",
  },
];
const Teachers: React.FC = () => {
  const [teachers, setTeachers] = useState<Teacher[]>(teachersData);

  const doubledTeachers = useMemo(() => [...teachers, ...teachers], [teachers]);

  useEffect(() => {
    setTeachers(teachersData);

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
  }, [teachers.length]);
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
      <div className={styles["button-container"]}>
        <LinkButton variant="default" size="lg" icon={WhiteLink} href="#">
          Все преподаватели
        </LinkButton>
      </div>
    </section>
  );
};

export default Teachers;
