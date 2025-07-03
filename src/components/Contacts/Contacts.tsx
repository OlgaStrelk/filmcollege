import styles from "./Contact.module.scss";

const Contacts: React.FC = () => (
  <section className={styles.contact}>
    <div className={styles.container}>
      <h2>Связаться с нами</h2>
      <p>
        Свяжитесь с нами для получения дополнительной информации о программах,
        поступлении или событиях.
      </p>
      <div className={styles["contact-info"]}>
        {/* <p>
          <strong>Адрес:</strong> г. Москва, ул Лестева, дом 8 строение 1
        </p> */}
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:info@filmcollege.ru">info@filmcollege.ru</a>
        </p>
        <p>
          <strong>Телефон:</strong> +7 (495) 123-45-67
        </p>
        <div className={styles["social-links"]}>
          <a href="#" className={styles["social-link"]}>
            <i className="fab fa-vk"></i>
          </a>
          <a
            href="https://t.me/+11Tx3t59WzNkODBi"
            className={styles["social-link"]}
          >
            <i className="fab fa-telegram-plane"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contacts;
