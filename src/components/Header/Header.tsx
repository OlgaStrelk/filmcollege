import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { useEffect, useState } from "react";
import { LinkButton } from "../../ui/LinkButton";
import Logo from "../../assets/icons/logo.svg?react";
import ScrollLink from "../ScrollLink/ScrollLink";
import { ROUTE_CONFIG } from "../../utils/routeConfig";

const Header: React.FC = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const heroBlock = document.querySelector(".hero");
    if (!heroBlock) {
      setIsHeroVisible(false);
      return;
    }

    const handleScroll = () => {
      const heroHeight = 480;
      const isVisible = window.scrollY < heroHeight;
      setIsHeroVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${isHeroVisible ? styles["hero-state"] : styles["default-state"]}`}
    >
      <div className={styles["header-content"]}>
        <NavLink to="/" className={styles["logo-link"]}>
          <Logo className={styles.logo} width="140" height="38" />
        </NavLink>
        <div className={styles["nav-links"]}>
          {ROUTE_CONFIG.filter(({ path }) => path !== "*").map((link, index) =>
            link.path.startsWith("/") ? (
              <NavLink
                key={index}
                to={link.path}
                className={styles["nav-link"]}
              >
                {link.title}
              </NavLink>
            ) : (
              <ScrollLink
                key={index}
                to={link.path.slice(1)}
                className={styles["nav-link"]}
              >
                {link.title}
              </ScrollLink>
            ),
          )}
          <LinkButton
            variant="outline"
            size="sm"
            href="https://t.me/+11Tx3t59WzNkODBi"
          >
            Связаться с нами
          </LinkButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
