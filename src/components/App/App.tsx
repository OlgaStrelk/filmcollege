// import { useState } from 'react';
import "../../assets/fonts/fonts.css";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import Home from "../../pages/Home";
import PageNotFound from "../../pages/PageNotFound";
import MainLayout from "../../ui/MainLayot/MainLayout";
import Placeholder from "../../pages/Placeholder";
// import About from '../../pages/About';
// import Teachers from '../../pages/Teachers';
// import Faculties from '../../pages/Faculties';
// import Admission from '../../pages/Admission';
// import Events from '../../pages/Events';
// import Contact from '../../pages/Contact';

const App: React.FC = () => {
  // const [activeFaculty, setActiveFaculty] = useState<string>('АКТЁРСКИЙ ФАКУЛЬТЕТ');

  return (
    <div className={styles.app}>
      <main>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route
            path="/about"
            element={<Placeholder title="Поступление в разработке" />}
          />
          <Route
            path="/teachers"
            element={<Placeholder title="Все педагоги в разработке" />}
          />
          <Route
            path="/faculties"
            element={<Placeholder title="Факультеты в разработке" />}
          />
          <Route
            path="/admission"
            element={<Placeholder title="Поступление в разработке" />}
          />
          <Route
            path="/events"
            element={<Placeholder title="События в разработке" />}
          />
          <Route
            path="/actors"
            element={<Placeholder title="Актёрский факультет в разработке" />}
          />
          <Route
            path="/film"
            element={<Placeholder title="Кинофакультет в разработке" />}
          />
          <Route
            path="/general"
            element={
              <Placeholder title="Факультет Общее образование в разработке" />
            }
          />
          <Route
            path="/prodcenter"
            element={
              <Placeholder title="Проектно-продюсерский центр в разработке" />
            }
          />
          <Route
            path="/teachers"
            element={<Placeholder title="Все преподаватели в разработке" />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
