import styles from "./Admission.module.scss";
import admissionData from "../../data/admission.json";
import { LinkButton } from "../../ui/LinkButton";

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
  buttonIcon: string;
}

const admission: AdmissionData = admissionData;

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
      <LinkButton
        variant="default"
        size="lg"
        icon={admission.buttonIcon}
        href="#"
      >
        {admission.buttonText}
      </LinkButton>
    </div>
  </section>
);

export default Admission;
