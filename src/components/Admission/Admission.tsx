import React from "react";
import styles from "./Admission.module.scss";
import { LinkButton } from "../../ui/LinkButton";
import WhiteLink from "../../assets/icons/link_white.svg?react";

interface AdmissionStep {
  label: string;
  date: string[];
  showSeparator: boolean;
}

interface AdmissionData {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  steps: AdmissionStep[];
  note: string[];
  buttonText: string;
}

const admission: AdmissionData = {
  title: "Поступление",
  description:
    "Уважаемые абитуриенты и родители! Открыт прием портфолио для поступающих. Для того, чтобы отправить свое портфолио, нужно заполнить анкету и прикрепить портфолио по ",
  linkText: "ссылке",
  linkUrl: "https://forms.yandex.ru/u/6825c3cb90fa7b5bd73656df",
  steps: [
    {
      label: "Прием портфолио осуществляется:",
      date: [
        "с 1 по 10 июля до 23:59 в мастерские «Звукорежиссер» и «Оператор»",
        "с 1 по 16 июля до 23:59 в остальные мастерские",
      ],
      showSeparator: true,
    },
    {
      label: "Обратная связь и списки прошедших на очные испытания",
      date: [
        "12 июля для мастерских «Звукорежиссер» и «Оператор»",
        "20 июля для остальных мастерских",
      ],
      showSeparator: true,
    },
    {
      label: "Очные испытания:",
      date: [
        "14–16 июля — первая волна очных испытаний для поступающих на кинофакультет",
        "24–26 июля — вторая волна очных испытаний для поступающих на все факультеты",
      ],
      showSeparator: false,
    },
  ],
  note: [
    "Если абитуриент планирует поступать в несколько мастерских сразу, необходимо заполнить отдельные анкеты и прикрепить портфолио для каждой мастерской.",
    "Перед отправкой анкеты с портфолио убедитесь, что задания выполнены в соответствии с требованиями, а ссылка на портфолио открывается и настроена на «доступ всем, у кого есть ссылка».",
    "Ждем ваших заявок!",
  ],
  buttonText: "Подробнее о поступлении",
};

const Admission: React.FC = () => (
  <section className={styles.admission} id="admission">
    <div className={styles["admission-container"]}>
      <div className={styles["content-wrapper"]}>
        <div className={styles["main-content"]}>
          <h1 className={styles["font-h1"]}>{admission.title}</h1>
          <div className={styles.description}>
            <span>{admission.description.split(admission.linkText)[0]}</span>
            <a
              href={admission.linkUrl}
              rel="noopener noreferrer"
              target="_blank"
              className={styles["link-text"]}
            >
              {admission.linkText}
            </a>
            <span> 🔗</span>
          </div>
        </div>
        <div className={styles["sidebar-content"]}>
          {admission.steps.map((step, index) => (
            <div key={index} className={styles["step-item"]}>
              <div className={styles["step-text"]}>
                <span className={styles["step-label"]}>{step.label}</span>{" "}
                <br />
                <span className={styles["step-date"]}>
                  {step.date.map((line, lineIndex) => {
                    const isBoldDate =
                      line.startsWith("14–16 июля") ||
                      line.startsWith("24–26 июля");
                    if (isBoldDate) {
                      const [datePart, ...rest] = line.split(" — ");
                      return (
                        <React.Fragment key={lineIndex}>
                          <span>
                            <strong>{datePart}</strong>
                            {rest.length > 0 && ` — ${rest.join(" — ")}`}
                          </span>
                          {lineIndex < step.date.length - 1 && <br />}
                        </React.Fragment>
                      );
                    }
                    return (
                      <React.Fragment key={lineIndex}>
                        <span>{line}</span>
                        {lineIndex < step.date.length - 1 && <br />}
                      </React.Fragment>
                    );
                  })}
                </span>
              </div>
              {step.showSeparator && <div className={styles.separator} />}
            </div>
          ))}
          <div className={styles["font-l"]}>
            {admission.note.map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < admission.note.length - 1 && <br />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <LinkButton
        variant="default"
        size="lg"
        icon={WhiteLink}
        href="/admission"
      >
        {admission.buttonText}
      </LinkButton>
    </div>
  </section>
);

export default Admission;
