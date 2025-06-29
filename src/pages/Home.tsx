import { Hero } from "../components/Hero";
import { Workshops } from "../components/Workshops";
import { ProductionCenter } from "../components/ProductionCenter";
import { About } from "../components/About";
import Teachers from "./Teachers";
import Admission from "../components/Admission/Admission";
import { Events } from "../components/Events";
import { Faculties } from "../components/Faculties";
import { useState } from "react";

const Home: React.FC = () => {
  const [activeFaculty, setActiveFaculty] = useState<string>(
    "АКТЁРСКИЙ ФАКУЛЬТЕТ",
  );
  return (
    <>
      <Hero />
      <About />
      <Workshops />
      <Teachers />
      <Admission />
      <ProductionCenter />
      <Faculties
        activeFaculty={activeFaculty}
        setActiveFaculty={setActiveFaculty}
      />
      <Events />
    </>
  );
};

export default Home;
