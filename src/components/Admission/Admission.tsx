import styles from "./Admission.module.scss";

const Admission: React.FC = () => (
  <section className={styles.admission}>
    <div className={styles["admission-container"]}>
      <div className={styles["admission-content"]}>
        <h2>Поступление</h2>
        <p>
          Уважаемые абитуриенты и родители! Открыт прием портфолио для
          поступающих. Для того, чтобы отправить свое портфолио, нужно заполнить
          анкету и прикрепить портфолио по ссылке 🔗
        </p>
      </div>
      <div className={styles["admission-sidebar"]}>
        <div className={styles["admission-info"]}>
          <h3>3-я волна приема портфолио — с 1 по 16 июля до 23.59</h3>
        </div>
        <div className={styles["admission-info"]}>
          <h3>
            Обратная связь и списки прошедших на очные испытания — 20 июля
          </h3>
        </div>
        <div className={styles["admission-info"]}>
          <h3>Очные испытания — 24-26 июля</h3>
        </div>
        <p className={styles["admission-note"]}>
          Если абитуриент планирует поступать в несколько мастерских сразу,
          необходимо заполнить отдельные анкеты и прикрепить портфолио по каждой
          мастерской. Ждем ваших заявок!
        </p>
        <a href="#" className={styles["more-link"]}>
          Подробнее о поступлении{" "}
          <span className={styles.icon}>
            <i className="fas fa-arrow-right"></i>
          </span>
        </a>
      </div>
    </div>
  </section>
);

export default Admission;
