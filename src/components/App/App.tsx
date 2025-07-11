// import { useState } from 'react';
import "../../assets/fonts/fonts.css";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import Home from "../../pages/Home";
import PageNotFound from "../../pages/PageNotFound";
import MainLayout from "../../ui/MainLayot/MainLayout";
import Entrance from "../../pages/Entrance";
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
          <Route path="/about" element={<PageNotFound />} />
          <Route path="/teachers" element={<PageNotFound />} />
          <Route path="/faculties" element={<PageNotFound />} />
          <Route element={<MainLayout />}>
            <Route path="/admission" element={<Entrance />} />
          </Route>

          <Route path="/events" element={<PageNotFound />} />
          <Route path="/actors" element={<PageNotFound />} />
          <Route path="/film" element={<PageNotFound />} />
          <Route path="/general" element={<PageNotFound />} />
          <Route path="/prodcenter" element={<PageNotFound />} />
          <Route path="/teachers" element={<PageNotFound />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
