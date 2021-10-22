import React from "react";
import "./Homepage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LanguageButtons from "../Buttons/LanguageButtons";
import Scene from "../Scene/Scene";

export default function Homepage() {
  return (
    <div>
      <Header />
      <LanguageButtons />
      <div className="homepageBody">
        <Scene />
      </div>
      <Footer />
    </div>
  );
}
