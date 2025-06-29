import styles from "./Events.module.scss";

const Events: React.FC = () => (
  <section className={styles.events}>
    <div className={styles.container}>
      <h2>События</h2>
      <div className={styles["events-grid"]}>
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <div className={styles["event-card"]} key={index}>
              <img
                src="https://placehold.co/400x300/333/fff?text=Event+Image"
                alt="Event image placeholder"
                className={styles["event-image"]}
              />
              <div className={styles["event-content"]}>
                <h3 className={styles["event-title"]}>Название события</h3>
                <p className={styles["event-description"]}>
                  Описание события события Описание события события Описание
                  события события Описание события события Описание события
                  события
                </p>
              </div>
            </div>
          ))}
      </div>
      <div className={styles["all-events-btn"]}>
        <a href="#" className={styles["more-link"]}>
          Все события{" "}
          <span className={styles.icon}>
            <i className="fas fa-arrow-right"></i>
          </span>
        </a>
      </div>
    </div>
  </section>
);

export default Events;
