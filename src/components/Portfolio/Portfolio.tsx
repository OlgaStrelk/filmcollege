import React, { useState, type ReactNode } from "react";
import styles from "./Portfolio.module.scss";

type FacultyName =
  | "Для Актера"
  | "Для Сценариста"
  | "Для Режиссера"
  | "Для Режиссера монтажа"
  | "Для Звукорежиссера"
  | "Для Оператора";

const faculties: FacultyName[] = [
  "Для Актера",
  "Для Сценариста",
  "Для Режиссера",
  "Для Режиссера монтажа",
  "Для Звукорежиссера",
  "Для Оператора",
];

const Portfolio: React.FC = () => {
  const [selectedFaculty, setSelectedFaculty] =
    useState<FacultyName>("Для Актера");

  const content: { [key in FacultyName]: ReactNode } = {
    "Для Актера": (
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
              Все работы должны быть напечатаны в одном файле, в формате "Word".
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
    ),
    "Для Сценариста": (
      <div className={styles.stack2}>
        <div className={styles.sectionHeader2}>
          <div className={styles.sectionTitle2}>Портфолио Сценариста</div>
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
              враги», «Мои мечты», «Почему я хочу стать сценаристом».
            </span>
            <span className={styles.textWrapper19}>
              Объем сочинений – на усмотрение автора, главное – раскрыть тему.
              Все работы должны быть напечатаны в одном файле, в формате "Word".
            </span>
          </p>
        </div>
        <div className={styles.section2}>
          <div className={styles.sectionDetail}>
            <div className={styles.sectionText4}>Литературные этюды</div>
          </div>
          <div className={styles.flexcontainer2}>
            {[
              "Описание увиденных в жизни реальных ситуаций взаимодействия между людьми (не больше 1 страницы машинописного текста).",
              "Два-три описания незнакомого человека в общественном месте – ½ страницы машинописного текста.",
              "Описание состояний природы (в городе, за городом – на выбор) – ½ страницы машинописного текста.",
            ].map((item) => (
              <p key={item} className={styles.spanWrapper}>
                <span className={styles.textWrapper18}>{item}</span>
              </p>
            ))}
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.sectionDetail}>
            <div className={styles.sectionText4}>
              Разбор произведения экранного искусства
            </div>
          </div>
          <p className={styles.sectionText5}>
            <span className={styles.textWrapper18}>
              Разбор (размышление) одного произведения экранного искусства
              (мультфильма, фильма) – на выбор (объем не более 3 страниц).
            </span>
          </p>
        </div>
        <div className={styles.section2}>
          <div className={styles.sectionDetail}>
            <div className={styles.sectionText4}>
              Идея и разработка сценария
            </div>
          </div>
          <p className={styles.sectionText5}>
            <span className={styles.textWrapper18}>
              Идея и разработка (в свободной форме) для собственного будущего
              сценария. Рекомендуется приложить к тексту референсы из кино,
              близкие к вашему замыслу.
            </span>
          </p>
        </div>
        <div className={styles.section2}>
          <div className={styles.sectionDetail}>
            <div className={styles.sectionText4}>
              Законченные литературные работы
            </div>
          </div>
          <p className={styles.sectionText5}>
            <span className={styles.textWrapper18}>
              Законченные литературные работы любого рода и жанра –
              стихотворения, рассказы, повести, пьесы, сценарии и т.д. – при
              наличии.
            </span>
          </p>
        </div>
      </div>
    ),
    "Для Режиссера": (
      <div className={styles.stack2}>
        <div className={styles.sectionHeader2}>
          <div className={styles.sectionTitle2}>Портфолио Режиссера</div>
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
              враги», «Мои мечты», «Почему я хочу стать режиссером».
            </span>
            <span className={styles.textWrapper19}>
              Объем сочинений – на усмотрение автора, главное – раскрыть тему.
              Все работы должны быть напечатаны в одном файле, в формате "Word".
            </span>
          </p>
        </div>
        <div className={styles.section2}>
          <div className={styles.sectionDetail}>
            <div className={styles.sectionText4}>
              Фотопортреты близких людей
            </div>
          </div>
          <div className={styles.flexcontainer2}>
            {[
              "Необходимо сделать 5 фотографий. Портрет должен отражать характер человека и ваше отношение к нему через выбор и способ применения таких выразительных средств, как крупность, ракурс, свет, цвет, соотношение объекта и фона и т.д.",
              "В каждом из пяти снимков выразительные средства должны отличаться друг от друга.",
              "К каждой фотографии в альбоме должна быть подпись: кто изображен на фотографии; где и когда она сделана.",
            ].map((item) => (
              <p key={item} className={styles.spanWrapper}>
                <span className={styles.textWrapper18}>{item}</span>
              </p>
            ))}
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.sectionDetail}>
            <div className={styles.sectionText4}>
              Фотокопии кинокадров (5 фотографий)
            </div>
          </div>
          <div className={styles.flexcontainer2}>
            {[
              "Необходимо выбрать один фильм, который произвёл на вас впечатление своими визуальными и смысловыми качествами. Выбрать из него 5 наиболее визуально выразительных кадров. Кадры должны отличаться друг от друга по композиции и крупности. Нужно, чтобы в большинстве выбранных кадров присутствовал персонаж.",
              "Сделайте скриншоты из такого фильма. Они должны быть в хорошем качестве, без искажений композиции и соотношения сторон, без рамок, интерфейсов и логотипов плееров и приложений.",
              "Снимите фотокопии этих кадров. Повторите в фотографии: атмосферу, композицию, световое решение и другие выразительные средства. Формат кадра и соотношение сторон фотокопии должны соответствовать оригинальному кадру из фильма.",
              "Создайте папку с названием фильма. Расположите последовательно файлы в этой папке, а именно: скриншот кадра, его копия, скриншот кадра, его копия и т.д.",
              "В описании к фотографиям необходимо указать: название фильма, фокусное расстояние объектива, значения диафрагмы, выдержки и ISO для каждой фотографии.",
            ].map((item) => (
              <p key={item} className={styles.spanWrapper}>
                <span className={styles.textWrapper18}>{item}</span>
              </p>
            ))}
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.sectionDetail}>
            <div className={styles.sectionText4}>
              Фотографии в стилистике двух мастеров фотографии
            </div>
          </div>
          <div className={styles.flexcontainer2}>
            {[
              "Необходимо сделать 6 фотографий, по 3 фотографии для стилистики каждого мастера.",
              "Необходимо выделить жанры и основные выразительные средства из работ мастеров и использовать их при создании собственных фотографий.",
              "К каждому снимку в альбоме должна быть подпись: имя выбранного мастера; кто или что изображено на фотографии; где и когда она сделана.",
            ].map((item) => (
              <p key={item} className={styles.spanWrapper}>
                <span className={styles.textWrapper18}>{item}</span>
              </p>
            ))}
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.sectionDetail}>
            <div className={styles.sectionText4}>
              Видео-работа из четырёх кадров
            </div>
          </div>
          <div className={styles.flexcontainer2}>
            {[
              "Снять четыре кадра и смонтировать их в целостную видео-работу. Каждый отдельный кадр может быть любой длительности. Общий хронометраж задания не более 5 минут.",
              "Четыре кадра должны складываться в сюжетную последовательность или в поэтические рифмы. Видео может быть на любую тему. Сюжет может быть любым. Жанр и визуальные решения задания на выбор абитуриента.",
              "Необходимо придумать название работы и указать его в титрах и названии файла. В видео должны быть начальные и финальные титры.",
              "Важно! Видеозаписи своих творческих работ необходимо разместить в отдельных папках с названием каждой работы на облачном диске mail или yandex.",
            ].map((item) => (
              <p key={item} className={styles.spanWrapper}>
                <span className={styles.textWrapper18}>{item}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    ),
    "Для Режиссера монтажа": (
      <div className={styles.stack2}>
        <div className={styles.sectionHeader2}>
          <div className={styles.sectionTitle2}>
            Портфолио Режиссера монтажа
          </div>
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
              враги», «Мои мечты», «Почему я хочу стать режиссером монтажа».
            </span>
            <span className={styles.textWrapper19}>
              Объем сочинений – на усмотрение автора, главное – раскрыть тему.
              Все работы должны быть напечатаны в одном файле, в формате "Word".
            </span>
          </p>
        </div>
        <div className={styles.section2}>
          <div className={styles.sectionDetail}>
            <div className={styles.sectionText4}>
              Фотопортреты близких людей
            </div>
          </div>
          <div className={styles.flexcontainer2}>
            {[
              "Необходимо сделать 5 фотографий. Портрет должен отражать характер человека и ваше отношение к нему через выбор и способ применения таких выразительных средств, как крупность, ракурс, свет, цвет, соотношение объекта и фона и т.д.",
              "В каждом из пяти снимков выразительные средства должны отличаться друг от друга.",
              "К каждой фотографии в альбоме должна быть подпись: кто изображен на фотографии; где и когда она сделана.",
            ].map((item) => (
              <p key={item} className={styles.spanWrapper}>
                <span className={styles.textWrapper18}>{item}</span>
              </p>
            ))}
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.sectionDetail}>
            <div className={styles.sectionText4}>
              Фотокопии кинокадров (5 фотографий)
            </div>
          </div>
          <div className={styles.flexcontainer2}>
            {[
              "Необходимо выбрать один фильм, который произвёл на вас впечатление своими визуальными и смысловыми качествами. Выбрать из него 5 наиболее визуально выразительных кадров. Кадры должны отличаться друг от друга по композиции и крупности. Нужно, чтобы в большинстве выбранных кадров присутствовал персонаж.",
              "Сделайте скриншоты из такого фильма. Они должны быть в хорошем качестве, без искажений композиции и соотношения сторон, без рамок, интерфейсов и логотипов плееров и приложений.",
              "Снимите фотокопии этих кадров. Повторите в фотографии: атмосферу, композицию, световое решение и другие выразительные средства. Формат кадра и соотношение сторон фотокопии должны соответствовать оригинальному кадру из фильма.",
              "Создайте папку с названием фильма. Расположите последовательно файлы в этой папке, а именно: скриншот кадра, его копия, скриншот кадра, его копия и т.д.",
              "В описании к фотографиям необходимо указать: название фильма, фокусное расстояние объектива, значения диафрагмы, выдержки и ISO для каждой фотографии.",
            ].map((item) => (
              <p key={item} className={styles.spanWrapper}>
                <span className={styles.textWrapper18}>{item}</span>
              </p>
            ))}
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.sectionDetail}>
            <div className={styles.sectionText4}>
              Фотографии в стилистике двух мастеров фотографии
            </div>
          </div>
          <div className={styles.flexcontainer2}>
            {[
              "Необходимо сделать 6 фотографий, по 3 фотографии для стилистики каждого мастера.",
              "Необходимо выделить жанры и основные выразительные средства из работ мастеров и использовать их при создании собственных фотографий.",
              "К каждому снимку в альбоме должна быть подпись: имя выбранного мастера; кто или что изображено на фотографии; где и когда она сделана.",
            ].map((item) => (
              <p key={item} className={styles.spanWrapper}>
                <span className={styles.textWrapper18}>{item}</span>
              </p>
            ))}
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.sectionDetail}>
            <div className={styles.sectionText4}>
              Смонтированный тизер или трейлер к фильму
            </div>
          </div>
          <div className={styles.flexcontainer2}>
            {[
              "Фильм может быть как существующий, так и вымышленный. Материал можно брать из интернета, вырезать из фильма или снимать самостоятельно. Хронометраж от 30 секунд до 5 минут.",
              "Важно! Видеозаписи своих творческих работ необходимо разместить в отдельных папках с названием каждой работы на облачном диске mail или yandex.",
            ].map((item) => (
              <p key={item} className={styles.spanWrapper}>
                <span className={styles.textWrapper18}>{item}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    ),
    "Для Звукорежиссера": (
      <div className={styles.stack2}>
        <div className={styles.sectionHeader2}>
          <div className={styles.sectionTitle2}>Портфолио Звукорежиссера</div>
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
              враги», «Мои мечты», «Почему я хочу стать звукорежиссером».
            </span>
            <span className={styles.textWrapper19}>
              Объем сочинений – на усмотрение автора, главное – раскрыть тему.
              Все работы должны быть напечатаны в одном файле, в формате "Word".
            </span>
          </p>
        </div>
        <div className={styles.section2}>
          <div className={styles.sectionDetail}>
            <div className={styles.sectionText4}>
              Фотопортреты близких людей
            </div>
          </div>
          <div className={styles.flexcontainer2}>
            {[
              "Необходимо сделать 5 фотографий. Портрет должен отражать характер человека и ваше отношение к нему через выбор и способ применения таких выразительных средств, как крупность, ракурс, свет, цвет, соотношение объекта и фона и т.д.",
              "В каждом из пяти снимков выразительные средства должны отличаться друг от друга.",
              "К каждой фотографии в альбоме должна быть подпись: кто изображен на фотографии; где и когда она сделана.",
            ].map((item) => (
              <p key={item} className={styles.spanWrapper}>
                <span className={styles.textWrapper18}>{item}</span>
              </p>
            ))}
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.sectionDetail}>
            <div className={styles.sectionText4}>
              Фотокопии кинокадров (5 фотографий)
            </div>
          </div>
          <div className={styles.flexcontainer2}>
            {[
              "Необходимо выбрать один фильм, который произвёл на вас впечатление своими визуальными и смысловыми качествами. Выбрать из него 5 наиболее визуально выразительных кадров. Кадры должны отличаться друг от друга по композиции и крупности. Нужно, чтобы в большинстве выбранных кадров присутствовал персонаж.",
              "Сделайте скриншоты из такого фильма. Они должны быть в хорошем качестве, без искажений композиции и соотношения сторон, без рамок, интерфейсов и логотипов плееров и приложений.",
              "Снимите фотокопии этих кадров. Повторите в фотографии: атмосферу, композицию, световое решение и другие выразительные средства. Формат кадра и соотношение сторон фотокопии должны соответствовать оригинальному кадру из фильма.",
              "Создайте папку с названием фильма. Расположите последовательно файлы в этой папке, а именно: скриншот кадра, его копия, скриншот кадра, его копия и т.д.",
              "В описании к фотографиям необходимо указать: название фильма, фокусное расстояние объектива, значения диафрагмы, выдержки и ISO для каждой фотографии.",
            ].map((item) => (
              <p key={item} className={styles.spanWrapper}>
                <span className={styles.textWrapper18}>{item}</span>
              </p>
            ))}
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.sectionDetail}>
            <div className={styles.sectionText4}>
              Задание на слуховую память
            </div>
          </div>
          <div className={styles.flexcontainer2}>
            {[
              "Необходимо вспомнить и описать в подробностях несколько (4-5) событий (состояний) из жизни (можно из детства), в которых вы могли выделить интересные, необычные окружающие вас звуки, которые вас удивили/вдохновили/повлияли на ваше состояние или настроение.",
            ].map((item) => (
              <p key={item} className={styles.spanWrapper}>
                <span className={styles.textWrapper18}>{item}</span>
              </p>
            ))}
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.sectionDetail}>
            <div className={styles.sectionText4}>
              Звуковой поэтический эскиз
            </div>
          </div>
          <div className={styles.flexcontainer2}>
            {[
              "Аудио-сцена должна предполагать под собой общий базовый сюжет, который будет уловим при прослушивании. Выбор сюжета – на усмотрение поступающего.",
              "В фонограмме могут присутствовать только звуки шумов, найденные в интернете, либо записанные абитуриентом на любое устройство звукозаписи.",
              "Не допускается наличие музыки или дикторского голоса.",
              "К прослушиванию принимаются форматы аудио: wav, mp3. Длительность не более 1 минуты.",
            ].map((item) => (
              <p key={item} className={styles.spanWrapper}>
                <span className={styles.textWrapper18}>{item}</span>
              </p>
            ))}
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.sectionDetail}>
            <div className={styles.sectionText4}>
              Звуковой разбор сцены из фильма
            </div>
          </div>
          <div className={styles.flexcontainer2}>
            {[
              "Необходимо проанализировать сцену с интересным, на ваш взгляд, звуковым решением.",
              "Опишите, как авторы пользуются музыкой, шумами, атмосферами и речью. Как это влияет на ощущения зрителя. Объем – примерно 1 страница.",
            ].map((item) => (
              <p key={item} className={styles.spanWrapper}>
                <span className={styles.textWrapper18}>{item}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    ),
    "Для Оператора": (
      <div className={styles.stack2}>
        <div className={styles.sectionHeader2}>
          <div className={styles.sectionTitle2}>Портфолио Оператора</div>
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
              враги», «Мои мечты», «Почему я хочу стать оператором».
            </span>
            <span className={styles.textWrapper19}>
              Объем сочинений – на усмотрение автора, главное – раскрыть тему.
              Все работы должны быть напечатаны в одном файле, в формате "Word".
            </span>
          </p>
        </div>
        <div className={styles.section2}>
          <div className={styles.sectionDetail}>
            <div className={styles.sectionText4}>
              Фотопортреты близких людей
            </div>
          </div>
          <div className={styles.flexcontainer2}>
            {[
              "Необходимо сделать 5 фотографий. Портрет должен отражать характер человека и ваше отношение к нему через выбор и способ применения таких выразительных средств, как крупность, ракурс, свет, цвет, соотношение объекта и фона и т.д.",
              "В каждом из пяти снимков выразительные средства должны отличаться друг от друга.",
              "К каждой фотографии в альбоме должна быть подпись: кто изображен на фотографии; где и когда она сделана.",
            ].map((item) => (
              <p key={item} className={styles.spanWrapper}>
                <span className={styles.textWrapper18}>{item}</span>
              </p>
            ))}
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.sectionDetail}>
            <div className={styles.sectionText4}>
              Фотокопии кинокадров (5 фотографий)
            </div>
          </div>
          <div className={styles.flexcontainer2}>
            {[
              "Необходимо выбрать один фильм, который произвёл на вас впечатление своими визуальными и смысловыми качествами. Выбрать из него 5 наиболее визуально выразительных кадров. Кадры должны отличаться друг от друга по композиции и крупности. Нужно, чтобы в большинстве выбранных кадров присутствовал персонаж.",
              "Сделайте скриншоты из такого фильма. Они должны быть в хорошем качестве, без искажений композиции и соотношения сторон, без рамок, интерфейсов и логотипов плееров и приложений.",
              "Снимите фотокопии этих кадров. Повторите в фотографии: атмосферу, композицию, световое решение и другие выразительные средства. Формат кадра и соотношение сторон фотокопии должны соответствовать оригинальному кадру из фильма.",
              "Создайте папку с названием фильма. Расположите последовательно файлы в этой папке, а именно: скриншот кадра, его копия, скриншот кадра, его копия и т.д.",
              "В описании к фотографиям необходимо указать: название фильма, фокусное расстояние объектива, значения диафрагмы, выдержки и ISO для каждой фотографии.",
            ].map((item) => (
              <p key={item} className={styles.spanWrapper}>
                <span className={styles.textWrapper18}>{item}</span>
              </p>
            ))}
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.sectionDetail}>
            <div className={styles.sectionText4}>
              Фотоснимки в стилистике двух мастеров фотографии
            </div>
          </div>
          <div className={styles.flexcontainer2}>
            {[
              "Необходимо сделать 6 фотографий, по 3 фотографии в стилистике каждого мастера.",
              "Выберите двух заслуженных мастеров фотографии, изучите их работы, выделите характерные черты и стилистику, которые используются каждым из мастеров.",
              "При создании собственных фотографий повторите выявленные выразительные средства и стилистические особенности из работ мастеров фотографии. Цель задания – выявление метода работы, а не прямое копирование мастера.",
              "Внутри папки с заданием создайте две отдельные папки, назовите их фамилией и именем мастеров.",
              "В описание к фотографиям необходимо указать: фокусное расстояние объектива, значения диафрагмы, выдержки и ISO для каждой фотографии.",
            ].map((item) => (
              <p key={item} className={styles.spanWrapper}>
                <span className={styles.textWrapper18}>{item}</span>
              </p>
            ))}
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.sectionDetail}>
            <div className={styles.sectionText4}>
              Фоторепортаж (пять фотографий)
            </div>
          </div>
          <div className={styles.flexcontainer2}>
            {[
              "Снимите фоторепортаж. Репортаж — это рассказ одной истории, у которой есть начало и конец.",
              "Отберите пять фотографий различной крупности, дающих зрителю представление о зафиксированном на них событии, и об отношении автора снимков к этому событию.",
              "Дайте общее и ёмкое название репортажу и событию, укажите их в названии папки. Выстройте порядок, в котором фотографии будут представлены зрителю в этой папке.",
              "В описание к фотографиям необходимо указать: фокусное расстояние объектива, значения диафрагмы, выдержки и ISO для каждой фотографии.",
            ].map((item) => (
              <p key={item} className={styles.spanWrapper}>
                <span className={styles.textWrapper18}>{item}</span>
              </p>
            ))}
          </div>
        </div>
        <div className={styles.section2}>
          <div className={styles.sectionDetail}>
            <div className={styles.sectionText4}>
              Кинозадание «Визуальное изменение»
            </div>
          </div>
          <div className={styles.flexcontainer2}>
            {[
              "Снимите видео длительностью не более 1-ой минуты. Снимать можно на любое доступное видеозаписывающее устройство.",
              "В кадре нужно зафиксировать, как происходит изменение состояния (настроения, атмосферы) внутри кадра, через один из этих приёмов или их комбинации: 1) Движение камеры, 2) Движение объекта или персонажа, 3) Движение или изменение света.",
              "В видео не должно быть звука, монтажных склеек и монтажных эффектов. Обрезать начало и конец кадра можно.",
              "Файл должен быть загружен в форматах .mp4, .mov.",
              "Важно! Видеозаписи своих творческих работ необходимо разместить в отдельных папках с названием каждой работы на облачном диске mail или yandex.",
            ].map((item) => (
              <p key={item} className={styles.spanWrapper}>
                <span className={styles.textWrapper18}>{item}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className={styles.portfolio}>
      <div className={styles.facultyList2}>
        <div className={styles.title}>Состав портфолио:</div>
        <div className={styles.vStack}>
          {faculties.map((item, index) => (
            <div key={item} className={styles.field}>
              {index === 0 && <div className={styles.vector}></div>}
              <div
                className={
                  selectedFaculty === item
                    ? styles.facultyName
                    : styles.facultyName2
                }
                onClick={() => setSelectedFaculty(item)}
              >
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>
      {content[selectedFaculty]}
    </div>
  );
};

export default Portfolio;
