import { useState, useRef, useEffect } from "react";
import styles from "./Footer.module.scss";
import Divider from "../../icons/line-1.svg?react";
import Logo from "../../icons/logo.svg?react";
import DocumentIcon from "../../icons/document.svg?react";
import ExpandIcon from "../../icons/arrow-down.svg?react";
import VkIcon from "../../icons/vk.svg?react";
import TelegramIcon from "../../icons/telegram.svg?react";
import { Link } from "react-router-dom";

interface Document {
  name: string;
  files: string[];
}

const documentsData: Document[] = [
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
  const [documents, setDocuments] = useState<Document[]>(documentsData);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(
    null,
  );
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    // Имитация загрузки данных (для API в будущем)
    setDocuments(documentsData);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRefs.current.every(
          (ref) => ref && !ref.contains(event.target as Node),
        )
      ) {
        setOpenDropdownIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const socialLinks = [
    { name: "VK", icon: VkIcon, url: "#" },
    { name: "Telegram", icon: TelegramIcon, url: "#" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles["footer-content"]}>
        <Divider className={styles.divider} />
        <div className={styles["footer-main"]}>
          <div className={styles["footer-logo"]}>
            <Logo
              className={styles["logo-image"]}
              aria-label="Логотип Нового Киноколледжа"
            />
          </div>

          <div className={styles["footer-contacts"]}>
            <h3 className={styles["contacts-title"]}>Контакты</h3>
            <a
              href="mailto:info@filmcollege.ru"
              className={styles.email}
              rel="noopener noreferrer"
              target="_blank"
            >
              info@filmcollege.ru
            </a>
          </div>

          <div className={styles["documents-container"]}>
            {documents.map((doc, index) => (
              <div
                key={index}
                className={`${styles["dropdown-container"]} ${
                  openDropdownIndex === index ? styles["is-open"] : ""
                }`}
                ref={(el: HTMLDivElement | null) => {
                  dropdownRefs.current[index] = el;
                }}
                onClick={() =>
                  setOpenDropdownIndex(
                    openDropdownIndex === index ? null : index,
                  )
                }
              >
                <div className={styles["dropdown-toggle"]}>
                  <DocumentIcon className={styles["document-icon"]} />
                  <div className={styles["dropdown-title"]}>{doc.name}</div>
                  <ExpandIcon
                    className={`${styles["expand-icon"]} ${
                      openDropdownIndex === index ? styles["rotate-icon"] : ""
                    }`}
                  />
                </div>
                {openDropdownIndex === index && (
                  <div className={styles.dropdown}>
                    {doc.files.map((file, fileIndex) => (
                      <a
                        key={fileIndex}
                        href={`/docs/${file}`}
                        className={styles["dropdown-item"]}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {file}
                        <span className={styles.icon}>
                          <i className="fas fa-link"></i>
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <Link
            to="https://t.me/+11Tx3t59WzNkODBi"
            className={styles["contact-button"]}
          >
            <span>Связаться с нами</span>
          </Link>
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
                  <Icon className={styles["social-icon"]} />
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
