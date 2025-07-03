import styles from "./Admission.module.scss";
import { LinkButton } from "../../ui/LinkButton";
import WhiteLink from "../../icons/link_white.svg?react";
// import ArrowUpRight from "../../icons/arrow-up-right.svg?react"

interface AdmissionStep {
  label: string;
  date: string;
  showSeparator: boolean;
}

interface AdmissionData {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  steps: AdmissionStep[];
  note: string;
  buttonText: string;
}

const admission: AdmissionData = {
  title: "Поступление",
  description:
    "Уважаемые абитуриенты и родители! Открыт прием портфолио для поступающих. Для того, чтобы отправить свое портфолио, нужно заполнить анкету и прикрепить портфолио по ссылке.",
  linkText: "ссылке",
  linkUrl: "https://forms.yandex.ru/u/6825c3cb90fa7b5bd73656df",
  steps: [
    {
      label: "3-я волна приема портфолио —",
      date: "с 1 по 16 июля до 23.59",
      showSeparator: true,
    },
    {
      label: "Обратная связь и списки прошедших на очные испытания —",
      date: "20 июля",
      showSeparator: true,
    },
    {
      label: "Очные испытания —",
      date: "24-26 июля",
      showSeparator: false,
    },
  ],
  note: "Если абитуриент планирует поступать в несколько мастерских сразу, необходимо заполнить отдельные анкеты и прикрепить портфолио по каждой мастерской. Ждем ваших заявок!",
  buttonText: "Подробнее о поступлении",
};

const Admission: React.FC = () => (
  <section className={styles.admission}>
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
            <span>{admission.description.split(admission.linkText)[1]}</span>
          </div>
        </div>
        <div className={styles["sidebar-content"]}>
          {admission.steps.map((step, index) => (
            <div key={index} className={styles["step-item"]}>
              <div className={styles["step-text"]}>
                <span className={styles["step-label"]}>{step.label}</span>
                <span className={styles["step-date"]}>{step.date}</span>
              </div>
              {step.showSeparator && <div className={styles.separator} />}
            </div>
          ))}
          <div className={styles["font-l"]}>{admission.note}</div>
        </div>
      </div>
      <LinkButton variant="default" size="lg" icon={WhiteLink} href="#">
        {admission.buttonText}
      </LinkButton>
    </div>
  </section>
);

export default Admission;
