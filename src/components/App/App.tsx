// import { useState } from 'react';
import "../../assets/fonts/fonts.css";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import Home from "../../pages/Home";
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
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/faculties" element={<Faculties activeFaculty={activeFaculty} setActiveFaculty={setActiveFaculty} />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
