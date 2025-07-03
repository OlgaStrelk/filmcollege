import { useState, useRef, useEffect } from "react";
import styles from "./Footer.module.scss";

interface Document {
  name: string;
  files: string[];
}

const documents: Document[] = [
  {
    name: "Основные сведения",
    files: ["osnovnye_svedeniya.pdf"],
  },
  {
    name: "Структура и органы управления",
    files: ["struktura_i_organy_upravleniya.pdf"],
  },
  {
    name: "Документы",
    files: ["ustav.pdf", "vypiska_egrul.pdf"],
  },
  {
    name: "Образование",
    files: [
      "55.02.03_OOP_kino_2025_2029.pdf",
      "52.02.04_OOP_aktery_2025_2029.pdf",
    ],
  },
  {
    name: "Руководство. Педагогический состав сведения",
    files: ["rukovodstvo_pedagogicheskiy_sostav_svedeniya.pdf"],
  },
  {
    name: "Материально-техническое обеспечение и доступная среда",
    files: ["materialno_tehnicheskoe_obespechenie_i_dostupnaya_sreda.pdf"],
  },
  {
    name: "Платные образовательные услуги",
    files: ["platnye_obrazovatelnye_uslugi.pdf"],
  },
  {
    name: "Финансово-хозяйственная деятельность",
    files: ["finansovo_hozyaystvennaya_deyatelnost.pdf"],
  },
  {
    name: "Вакантные места для приёма/перевода",
    files: ["vakantnye_mesta_dlya_priyoma_perevoda.pdf"],
  },
  {
    name: "Стипендии и меры поддержки",
    files: ["stipendii_i_mery_podderzhki.pdf"],
  },
  {
    name: "Международное сотрудничество",
    files: ["mezhdunarodnoe_sotrudnichestvo.pdf"],
  },
  {
    name: "Организация питания",
    files: ["organizaciya_pitaniya.pdf"],
  },
  {
    name: "Образовательные стандарты и требования",
    files: ["55.02.03_fgos_kino.pdf", "52.02.04_fgos_aktery.pdf"],
  },
];

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
                      href={`/docs/${doc.files[0]}`}
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
          </div>
          <p>info@filmcollege.ru</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
