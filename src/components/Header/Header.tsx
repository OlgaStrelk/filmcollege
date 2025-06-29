import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import navLinks from "../../data/navLinks.json";

interface NavLinkItem {
  title: string;
  path: string;
}

const navLinksTyped: NavLinkItem[] = navLinks;

const Header: React.FC = () => (
  <header className={styles.header}>
    <div className={styles["header-content"]}>
      <NavLink to="/" className={styles.logo}>
        <img src="/logo.svg" alt="Новый Киноколледж" width="140" height="38" />
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

export default Header;
