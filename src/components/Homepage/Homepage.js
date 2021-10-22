import React from "react";
import { useSelector } from "react-redux";
import "./Homepage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LanguageButtons from "../Buttons/LanguageButtons";
import { selectChoice } from "../../store/responses/selector";
import Scene from "../Scene/Scene";

export default function Homepage() {
  const choice = useSelector(selectChoice);
  return (
    <div>
      <Header />
      <LanguageButtons />
      <div className="homepageBody">
        <Scene />
      </div>
      {choice && <p>{choice.expression}</p>}
      <Footer />
    </div>
  );
}
