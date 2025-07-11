import React from "react";
import styles from "./Entrance.module.scss";
import lineSvg from "../assets/icons/line-1.svg";
import subtractSvg from "../assets/icons/card-overlay.svg";
import masksSvg from "../assets/icons/workshop/icon1.svg";
import scriptSvg from "../assets/icons/workshop/icon2.svg";
import trumpetSvg from "../assets/icons/workshop/icon3.svg";
import filmCropSvg from "../assets/icons/workshop/icon4.svg";
import settingsSvg from "../assets/icons/workshop/icon5.svg";
import arrowSquareSvg from "../assets/icons/workshop/icon6.svg";

const Entrance: React.FC = () => {
  const faculties = [
    {
      title: "Актёр",
      places: 35,
      icon: masksSvg,
      subtract: subtractSvg,
      bgColor: "#0b4a4c",
      textColor: "#efeeea",
    },
    {
      title: "Сценарист",
      places: 15,
      icon: scriptSvg,
      subtract: subtractSvg,
      bgColor: "#191919",
      textColor: "#19191999",
    },
    {
      title: "Режиссёр",
      places: 15,
      icon: trumpetSvg,
      subtract: subtractSvg,
      bgColor: "#191919",
      textColor: "#19191999",
    },
    {
      title: "Режиссёр монтажа",
      places: 15,
      icon: filmCropSvg,
      subtract: subtractSvg,
      bgColor: "#191919",
      textColor: "#19191999",
    },
    {
      title: "Звукорежиссёр",
      places: 10,
      icon: settingsSvg,
      subtract: subtractSvg,
      bgColor: "#191919",
      textColor: "#19191999",
    },
    {
      title: "Оператор",
      places: 15,
      icon: arrowSquareSvg,
      subtract: subtractSvg,
      bgColor: "#191919",
      textColor: "#19191999",
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
                {" "}
                — 1ая волна очных испытаний для поступающих на кинофакультет
              </span>
            </p>
            <img className={styles.line} src={lineSvg} alt="Line" />
            <p className={styles.sectionText}>
              <span className={styles.textWrapper4}>24-26 июля</span>
              <span className={styles.textWrapper3}>
                {" "}
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
        <div className={styles.cards}>
          {faculties.map((faculty) => (
            <div key={faculty.title} className={styles.card}>
              <div className={styles.overlapGroup}>
                <div
                  className={styles.icon}
                  style={{ backgroundColor: faculty.bgColor }}
                >
                  <img
                    className={styles.img}
                    src={faculty.icon}
                    alt={faculty.title}
                  />
                </div>
                <img
                  className={styles.subtract}
                  src={faculty.subtract}
                  alt="Subtract"
                />
                <img className={styles.line2} src={lineSvg} alt="Line" />
                <div
                  className={styles.facultyTitle}
                  style={{ color: faculty.textColor }}
                >
                  {faculty.title}
                </div>
                <div
                  className={styles.places}
                  style={{ color: faculty.textColor }}
                >
                  {faculty.places}
                </div>
              </div>
            </div>
          ))}
        </div>
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
      <div className={styles.portfolio}>
        <div className={styles.facultyList2}>
          <div className={styles.title}>Состав портфолио:</div>
          <div className={styles.vStack}>
            {[
              "Для Актера",
              "Для Сценариста",
              "Для Режиссера",
              "Для Режиссера монтажа",
              "Для Звукорежиссера",
              "Для Оператора",
            ].map((item, index) => (
              <div key={item} className={styles.field}>
                {index === 0 && <div className={styles.vector}></div>}
                <div
                  className={
                    index === 0 ? styles.facultyName : styles.facultyName2
                  }
                >
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.stack2}>
          <div className={styles.sectionHeader2}>
            <div className={styles.sectionTitle2}>Портфолио Актера</div>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionDetail}>
              <p className={styles.sectionText4}>
                Пять сочинений в свободной форме
              </p>
            </div>
            <p className={styles.sectionText5}>
              <span className={styles.textWrapper18}>
                Напишите пять сочинений на темы: «Моя семья», «Мои друзья», «Мои
                враги», «Мои мечты», «Почему я хочу стать (название профессии)».
              </span>
              <span className={styles.textWrapper19}>
                Объем сочинений – на усмотрение автора, главное – раскрыть тему.
                Все работы должны быть напечатаны в одном файле, в формате
                "Word".
              </span>
            </p>
          </div>
          <div className={styles.section2}>
            <div className={styles.sectionDetail}>
              <div className={styles.sectionText4}>
                Актерские номера (на видео):
              </div>
            </div>
            <div className={styles.flexcontainer2}>
              {[
                "1. Стихотворения: одно из русской классики, второе на выбор – читать наизусть",
                "2. Проза: отрывок из русской классики, второе на выбор – читать наизусть",
                "3. Басня - читать наизусть",
                "4. Танцевальный номер (народный танец, классический или современный.) Продолжительность 1-2 мин. Можно также отдельно записать несколько базовых движений, показывающих вашу гибкость и растяжку (шпагат, мостик и тд.).",
                "5. Танцевальная копия или танцевальный отрывок на основе репертуара хореографа-постановщика.",
                "Из списка предлагаемых хореографов выбрать одного и найти в его творчестве сольный номер (отрывок из танцевальной постановки). Продолжительность номера до 2 мин. Музыка в записи должна быть хорошо слышна. Разрешается переносить место танца на улицу.",
                "Список хореографов: Морис Бежар, Пина Бауш, Саша Вальц, Антонио Гадес, Марта Грэм, Начо Дуато, Иржи Киллиан, Джин Келли, Мерс Каннингем, Игорь Моисеев, Кениет Макмиллан, Охад Нахарин, Анжелан Прельжокаж, Кристал Пайт, Иван Перез, Боб Фосс, Алвин Эйли, Матс Эк.",
                "6. Песня (исполнение а-капелла).",
                "7. Вокальная копия музыкальной композиции любого исполнителя. Запись можно сделать под любое музыкальное сопровождение. Важно петь с актёрским посылом, попадая в ноты.",
                "* Также можно дополнить выступление имитацией-пародией на разные звуки, или спеть песню от лица разных персонажей, с разным характером: от лица ребёнка, юноши, девушки.",
                "Требования к видеосъемке номеров:",
                "- Хорошее качество съёмки (изображение не должно быть размытым)",
                "- Свет и фон нейтральные",
                "- В записи видео используйте, по возможности, разные планы (общий - в полный рост, средний план и крупный - лицо). Например, танец можно снять общим планом, стихотворение - средним, прозу - крупным.",
                "Важно! Видеозаписи своих творческих номеров необходимо разместить в отдельных папках с названием каждой работы на облачном диске mail или yandex.",
              ].map((item) => (
                <p key={item} className={styles.spanWrapper}>
                  <span className={styles.textWrapper18}>{item}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Entrance;
