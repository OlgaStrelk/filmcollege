import { useState, useRef, useEffect } from "react";
import styles from "./Footer.module.scss";
import documentsData from "../../data/documents.json";
import Divider from "/icons/line-1.svg";
import Logo from "/logo.svg";
import DocumentIcon from "/icons/document.svg";
import ExpandIcon from "/icons/arrow-down.svg";
import VkIcon from "/icons/vk.svg";
import TelegramIcon from "/icons/telegram.svg";

interface Document {
  name: string;
  file: string;
}

const documents: Document[] = documentsData;

const Footer: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const socialLinks = [
    {
      name: "VK",
      icon: VkIcon,
      url: "#",
    },
    {
      name: "Telegram",
      icon: TelegramIcon,
      url: "#",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles["footer-content"]}>
        <img src={Divider} alt="Разделительная линия" />
        <div className={styles["footer-main"]}>
          <div className={styles["footer-logo"]}>
            <img
              src={Logo}
              className={styles["logo-image"]}
              alt="Логотип Нового Киноколледжа"
            />
          </div>

          <div className={styles["footer-contacts"]}>
            <h3 className={styles["contacts-title"]}>Контакты</h3>
            <address className={styles.address}>
              г. Москва, ул Лестева, дом 8 строение 1
            </address>
            <a
              href="mailto:info@filmcollege.ru"
              className={styles.email}
              rel="noopener noreferrer"
              target="_blank"
            >
              info@filmcollege.ru
            </a>
          </div>

          <div
            className={`${styles["dropdown-container"]} ${isDropdownOpen ? styles["is-open"] : ""}`}
            ref={dropdownRef}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className={styles["dropdown-toggle"]}>
              <div className={styles["document-icon-container"]}>
                <img src={DocumentIcon} alt="Иконка документы" />
              </div>
              <div className={styles["dropdown-title"]}>
                Документы и сведения <br />
                об образовательной организации
              </div>
              <img
                src={ExpandIcon}
                alt=""
                className={`${styles["expand-icon"]} ${
                  isDropdownOpen ? styles["rotate-icon"] : ""
                }`}
              />
            </div>
            {isDropdownOpen && (
              <div className={styles.dropdown}>
                {documents.map((doc, index) => (
                  <a
                    key={index}
                    href={`/docs/${doc.file}`}
                    className={styles["dropdown-item"]}
                  >
                    {doc.name}
                    <span className={styles.icon}>
                      <i className="fas fa-link"></i>
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>

          <button className={styles["contact-button"]}>
            <span>Связаться с нами</span>
          </button>
        </div>

        <div className={styles["footer-bottom"]}>
          <p className={styles.copyright}>Новый киноколледж, 2025</p>
          <div className={styles["social-links"]}>
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  aria-label={link.name}
                  className={styles["social-link"]}
                >
                  <img src={Icon} alt="" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
