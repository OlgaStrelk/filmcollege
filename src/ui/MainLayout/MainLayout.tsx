import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import styles from "./MainLayout.module.scss";
import type { ReactNode } from "react";
interface MainLayoutProps {
  children: ReactNode;
}
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.app}>
      <Header />
      <main>{children} </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
