import React from "react";
import { useSelector } from "react-redux";
import "./Homepage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LanguageButtons from "../Buttons/LanguageButtons";
import { selectChoice } from "../../store/responses/selector";

export default function Homepage() {
  const choice = useSelector(selectChoice);
  return (
    <div>
      <Header />
      <LanguageButtons />
      <div className="homepageBody">
        <div className="sceneContainer"></div>
      </div>
      {choice && <p>{choice.expression}</p>}
      <Footer />
    </div>
  );
}
