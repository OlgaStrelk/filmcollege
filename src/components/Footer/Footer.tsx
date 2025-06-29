import { useState, useRef, useEffect } from "react";
import styles from "./Footer.module.scss";
import documentsData from "../../data/documents.json";

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

  return (
    <footer className={styles.footer}>
      <div className={styles["footer-content"]}>
        <div className={styles["footer-info"]}>
          <div className={styles["footer-logo"]}>НОВЫЙ КИНОКОЛЛЕДЖ</div>
          <div className={styles["footer-links"]}>
            <a href="#">Контакты</a>
            <div className={styles["dropdown-container"]} ref={dropdownRef}>
              <button
                className={styles["dropdown-toggle"]}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Документы и сведения об образовательной организации
              </button>
              {isDropdownOpen && (
                <div className={styles.dropdown}>
                  {documents.map((doc, index) => (
                    <a
                      key={index}
                      href={`/docs/${doc.file}`}
                      className={styles["dropdown-item"]}
                    >
                      {doc.name}{" "}
                      <span className={styles.icon}>
                        <i className="fas fa-link"></i>
                      </span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
          <p>г. Москва, ул Лестева, дом 8 строение 1</p>
          <p>info@filmcollege.ru</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
