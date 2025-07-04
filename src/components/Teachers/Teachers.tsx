import styles from "./Teachers.module.scss";
import { useEffect, useMemo, useState } from "react";
// import { LinkButton } from "../../ui/LinkButton";
// import WhiteLink from "../../icons/link_white.svg?react";

import OlgaKerzina from "../../assets/images/team_photo/olga_kerzina.png";
import EvgeniyGoryainov from "../../assets/images/team_photo/evgeniy_goryainov.png";
import VyacheslavIvanov from "../../assets/images/team_photo/vyacheslav_ivanov.png";
import ArseniyKolmykov from "../../assets/images/team_photo/arseniy_kolmykov.png";
import GabrielaSelivanova from "../../assets/images/team_photo/gabriela_selivanova.png";
import SergeyPetrov from "../../assets/images/team_photo/sergey_petrov.png";
import RomanLapin from "../../assets/images/team_photo/roman_lapin.png";
import SemyonYakovlev from "../../assets/images/team_photo/semyon_yakovlev.png";
import OlgaLipman from "../../assets/images/team_photo/olga_lipman.png";
import VeraPopova from "../../assets/images/team_photo/vera_popova.png";
import AlekseySuharev from "../../assets/images/team_photo/aleksey_suharev.png";
import AlesyaVelyaminova from "../../assets/images/team_photo/alesya_velyaminova.png";
import AnzhelikaKatysheva from "../../assets/images/team_photo/anzhelika_katysheva.png";
import AlekseyMartynov from "../../assets/images/team_photo/aleksey_martynov.png";
import VeraDorohina from "../../assets/images/team_photo/vera_dorohina.png";
import AnnaSavranskaya from "../../assets/images/team_photo/anna_savranskaya.png";
import VeraElnikova from "../../assets/images/team_photo/vera_elnikova.png";
import AndreySkripskiy from "../../assets/images/team_photo/andrey_skripskiy.png";
import NinaGromyko from "../../assets/images/team_photo/nina_gromyko.png";
import MariyaPonomareva from "../../assets/images/team_photo/mariya_ponomareva.png";
import MarinaVasina from "../../assets/images/team_photo/marina_vasina.png";
import AlexandraKozlova from "../../assets/images/team_photo/aleksandra_kozlova.png";
import VladimirGolovnyak from "../../assets/images/team_photo/vladimir_golovnyak.png";
import YuriyVasilev from "../../assets/images/team_photo/yuriy_vasilev.png";
import LadaFisher from "../../assets/images/team_photo/lada_fisher.png";
import MikaLipman from "../../assets/images/team_photo/mika_lipman.png";
import AndreyKorostelev from "../../assets/images/team_photo/andrey_korostelev.png";

interface Teacher {
  name: string;
  role: string;
  image: string;
}

const teachersData: Teacher[] = [
  {
    name: "Ольга Керзина",
    role: "Директор, руководитель кинофакультета, педагог по истории мировых религий",
    image: OlgaKerzina,
  },
  {
    name: "Евгений Горяинов",
    role: 'Руководитель мастерской "Звукорежиссёр", педагог по звукорежиссуре',
    image: EvgeniyGoryainov,
  },
  {
    name: "Вячеслав Иванов",
    role: 'Руководитель мастерской "Режиссёр", педагог по истории и языку кино, современному кино и кинопроизводству',
    image: VyacheslavIvanov,
  },
  {
    name: "Арсений Колмыков",
    role: 'Руководитель мастерской "Режиссёр монтажа", педагог по монтажу и кинопроизводству',
    image: ArseniyKolmykov,
  },
  {
    name: "Габриела Селиванова",
    role: 'Руководитель мастерской "Сценарист", педагог по истории и теории кино, координатор образовательной программы кинофакультета',
    image: GabrielaSelivanova,
  },
  {
    name: "Сергей Петров",
    role: 'Со-руководитель мастерской "Режиссёр монтажа", педагог по монтажу, куратор производственной практики',
    image: SergeyPetrov,
  },
  {
    name: "Роман Лапин",
    role: "Педагог по режиссуре кино и кинодраматургии",
    image: RomanLapin,
  },
  {
    name: "Семён Яковлев",
    role: 'Руководитель мастерской "Кинооператор", педагог по операторскому мастерству',
    image: SemyonYakovlev,
  },
  {
    name: "Ольга Липман",
    role: "Заместитель директора, руководитель актёрского факультета, психолог",
    image: OlgaLipman,
  },
  {
    name: "Вера Попова",
    role: "Педагог по актёрскому мастерству",
    image: VeraPopova,
  },
  {
    name: "Алексей Сухарев",
    role: "Педагог по классическому танцу и сценическому движению",
    image: AlekseySuharev,
  },
  {
    name: "Алеся Вельяминова",
    role: "Продюсер проектно-продюсерского центра, педагог по продюсированию, партнёр колледжа по производственной практике",
    image: AlesyaVelyaminova,
  },
  {
    name: "Анжелика Катышева",
    role: "Педагог по актёрскому мастерству",
    image: AnzhelikaKatysheva,
  },
  {
    name: "Алексей Мартынов",
    role: "Педагог по актёрскому мастерству",
    image: AlekseyMartynov,
  },
  {
    name: "Вера Дорохина",
    role: "Педагог по актёрскому мастерству",
    image: VeraDorohina,
  },
  {
    name: "Анна Савранская",
    role: "Педагог по актёрскому мастерству",
    image: AnnaSavranskaya,
  },
  {
    name: "Вера Ельникова",
    role: "Педагог по сценической речи",
    image: VeraElnikova,
  },
  {
    name: "Андрей Скрипский",
    role: "Преподаватель психологии, естествознания, ОБЖ",
    image: AndreySkripskiy,
  },
  {
    name: "Нина Громыко",
    role: "Преподаватель философии",
    image: NinaGromyko,
  },
  {
    name: "Мария Пономарева",
    role: "Преподаватель философии",
    image: MariyaPonomareva,
  },
  {
    name: "Марина Васина",
    role: "Преподаватель истории изобразительного искусства и рисунка",
    image: MarinaVasina,
  },
  {
    name: "Александра Козлова",
    role: "Преподаватель английского и испанского языков",
    image: AlexandraKozlova,
  },
  {
    name: "Владимир Головняк",
    role: "Преподаватель математики, физики и информатики",
    image: VladimirGolovnyak,
  },
  {
    name: "Юрий Васильев",
    role: "Преподаватель философии и истории",
    image: YuriyVasilev,
  },
  {
    name: "Лада Фишер",
    role: "Преподаватель математики",
    image: LadaFisher,
  },
  {
    name: "Мика Липман",
    role: "Продюсер проектно-продюсерского центра, педагог по продюсированию, партнёр колледжа по производственной практике",
    image: MikaLipman,
  },
  {
    name: "Андрей Коростелев",
    role: "Продюсер проектно-продюсерского центра, руководитель производственной практики, педагог по продюсированию",
    image: AndreyKorostelev,
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
    <section className={styles.teachers} id="teachers">
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
      {/* <div className={styles["button-container"]}>
        <LinkButton variant="default" size="lg" icon={WhiteLink} href="">
          Все преподаватели
        </LinkButton>
      </div> */}
    </section>
  );
};

export default Teachers;
