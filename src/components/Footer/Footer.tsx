import { useState, useRef, useEffect } from "react";
import styles from "./Footer.module.scss";
import Divider from "../../icons/line-1.svg";
import Logo from "/logo.svg";
import DocumentIcon from "../../icons/document.svg";
import ExpandIcon from "../../icons/arrow-down.svg";
import VkIcon from "../../icons/vk.svg";
import TelegramIcon from "../../icons/telegram.svg";
import { LinkButton } from "../../ui/LinkButton";

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

  const socialLinks = [
    {
      name: "VK",
      icon: VkIcon,
      url: "#",
    },
    {
      name: "Telegram",
      icon: TelegramIcon,
      url: "https://t.me/+11Tx3t59WzNkODBi",
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
            {/* <address className={styles.address}>
              г. Москва, ул Лестева, дом 8 строение 1
            </address> */}
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

          <LinkButton
            href="https://t.me/+11Tx3t59WzNkODBi"
            variant="ghost"
            size="sm"
          >
            <span>Связаться с нами</span>
          </LinkButton>
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
