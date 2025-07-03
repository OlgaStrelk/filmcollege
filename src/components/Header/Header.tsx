import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { useEffect, useState } from "react";

interface NavLinkItem {
  title: string;
  path: string;
}

const navLinksTyped: NavLinkItem[] = [
  { title: "О нас", path: "/about" },
  { title: "Педагоги и сотрудники", path: "/teachers" },
  { title: "Факультеты", path: "/faculties" },
  { title: "Поступление", path: "/admission" },
  { title: "События", path: "/events" },
  { title: "Связаться с нами", path: "/contact" },
];

const Header: React.FC = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = 480;
      const isVisible = window.scrollY < heroHeight;
      console.log("scrollY:", window.scrollY, "isHeroVisible:", isVisible); // Для отладки
      setIsHeroVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // <header>
    <header
      className={`${styles.header} ${isHeroVisible ? styles["hero-state"] : styles["default-state"]}`}
    >
      <div className={styles["header-content"]}>
        <NavLink to="/" className={styles.logo}>
          <img
            src="/logo.svg"
            alt="Новый Киноколледж"
            width="140"
            height="38"
          />
        </NavLink>
        <div className={styles["nav-links"]}>
          {navLinksTyped.map((link, index) => (
            <NavLink key={index} to={link.path} className={styles["nav-link"]}>
              {link.title}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
