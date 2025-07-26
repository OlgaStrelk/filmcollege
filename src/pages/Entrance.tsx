import React from "react";
import styles from "./Entrance.module.scss";
import lineSvg from "../assets/icons/line-1.svg";
import CardItem from "../ui/CardItem/CardItem";
import CardsGrid from "../ui/CardsGrid/CardsGrid";
import Portfolio from "../components/Portfolio/Portfolio";

const Entrance: React.FC = () => {
  const faculties = [
    {
      title: "Актёр",
      places: 35,
      icon: "icon1",
    },
    {
      title: "Сценарист",
      places: 15,
      icon: "icon2",
    },
    {
      title: "Режиссёр",
      places: 15,
      icon: "icon3",
    },
    {
      title: "Режиссёр монтажа",
      places: 15,
      icon: "icon4",
    },
    {
      title: "Звукорежиссёр",
      places: 10,
      icon: "icon5",
    },
    {
      title: "Оператор",
      places: 15,
      icon: "icon6",
    },
  ];

  return (
    <>
      <div className={styles.faculties}>
        <div className={styles.facultyList}>
          <div className={styles.title}>Поступление</div>
          <p className={styles.text}>
            Уважаемые абитуриенты и родители! Открыт прием портфолио для
            поступающих. Для того, чтобы отправить свое портфолио, нужно
            заполнить анкету и прикрепить портфолио по{" "}
            <a
              href="https://forms.yandex.ru/u/6825c3cb90fa7b5bd73656df"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.link}>ссылке</span>
            </a>
          </p>
        </div>
        <div className={styles.stack}>
          <div className={styles.container}>
            <p className={styles.sectionText}>
              Прием портфолио осуществляется:
              <br />
              с 01 по 10 июля до 23:59 в мастерские "Звукорежиссер", "Оператор";
              <br />с 01 по 16 июля до 23.59 в остальные мастерские
            </p>
            <img className={styles.line} src={lineSvg} alt="Line" />
            <p className={styles.sectionText}>
              Обратная связь и списки прошедших на очные испытания
              <br />
              12 июля для мастерских «Звукорежиссер» и «Оператор»
              <br />
              20 июля для остальных мастерских
            </p>
            <img className={styles.line} src={lineSvg} alt="Line" />
            <p className={styles.sectionText}>
              <span className={styles.textWrapper3}>Очные испытания —</span>{" "}
              <span className={styles.textWrapper4}>24-26 июля</span>
            </p>
            <div className={styles.flexcontainer}>
              <p className={styles.text}>
                Если абитуриент планирует поступать в несколько мастерских
                сразу, необходимо заполнить отдельные анкеты и прикрепить
                портфолио по каждой мастерской.
              </p>
              <p className={styles.text}>
                Перед отправкой анкеты с портфолио убедитесь, что задания
                выполнены в соответствии с требованиями, ссылка на портфолио
                открывается и настроена на "доступ всем, у кого есть ссылка"
              </p>
              <p className={styles.text}>Ждем ваших заявок!</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.faculties}>
        <div className={styles.sectionTitleWrapper}>
          <p className={styles.text}>
            <span className={styles.textWrapper6}>Очные испытания </span>
            <span className={styles.textWrapper7}>
              (для тех абитуриентов, чьи портфолио пройдут предварительный
              отбор)
            </span>
          </p>
        </div>
        <div className={styles.stack}>
          <div className={styles.container}>
            <p className={styles.sectionText}>
              <span className={styles.textWrapper4}>14-16 июля</span>
              <span className={styles.textWrapper3}>
                — 1ая волна очных испытаний для поступающих на кинофакультет
              </span>
            </p>
            <img className={styles.line} src={lineSvg} alt="Line" />
            <p className={styles.sectionText}>
              <span className={styles.textWrapper4}>24-26 июля</span>
              <span className={styles.textWrapper3}>
                — 2ая волна очных испытаний для поступающих на все факультеты
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.classes}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionTitle}>
            Количество мест <br />
            на 1 курсе в Новом Киноколледже по мастерским:
          </p>
        </div>
        <CardsGrid>
          {faculties.map((faculty, index) => (
            <div
              className={styles["card-container"]}
              key={`${faculty.title}-${index}`}
            >
              <CardItem title={faculty.title} icon={faculty.icon}>
                <span className={styles.places}>{faculty.places}</span>
                <img className={styles.line} src={lineSvg} alt="Разделитель" />
                <span className={styles.facultyTitle}>{faculty.title}</span>
              </CardItem>
            </div>
          ))}
        </CardsGrid>
      </div>
      <div className={styles.classes}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTitle}>Стоимость обучения:</div>
        </div>
        <div className={styles.frame}>
          <div className={styles.frameWrapper}>
            <div className={styles.frame2}>
              <div className={styles.frame3}>
                <div className={styles.textWrapper14}>380.000₽</div>
                <div className={styles.textWrapper15}>/в год</div>
              </div>
              <div className={styles.textWrapper16}>
                Полная стоимость обучения
              </div>
            </div>
          </div>
          <div className={styles.divWrapper}>
            <div className={styles.frame2}>
              <div className={styles.frame3}>
                <div className={styles.textWrapper14}>285.000₽</div>
                <div className={styles.textWrapper15}>/в год</div>
              </div>
              <p className={styles.textWrapper16}>
                Стоимость льготного обучения с 25% скидкой
              </p>
            </div>
          </div>
          <div className={styles.card2}>
            <div className={styles.frame4}>
              <p className={styles.textWrapper17}>
                Также существуют стипендиальные (бесплатные) места — пока их
                несколько, точное количество будет опубликовано в августе
              </p>
            </div>
          </div>
        </div>
      </div>
      <Portfolio />
    </>
  );
};

export default Entrance;
