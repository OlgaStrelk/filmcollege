// import { useState } from 'react';
import "../../assets/fonts/fonts.css";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import Home from "../../pages/Home";
import PageNotFound from "../../pages/PageNotFound";
import MainLayout from "../../ui/MainLayot/MainLayout";
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
          {/* <Route path="/about" element={<About />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/faculties" element={<Faculties activeFaculty={activeFaculty} setActiveFaculty={setActiveFaculty} />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
