import React from "react";

import "./Homepage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import LanguageButton from "../Buttons/LanguageButton";

export default function Homepage() {
  return (
    <div>
      <Header />
      {/* <LanguageButton /> */}
      <div className="homepageBody">
        <div className="sceneContainer"></div>
      </div>
      <Footer />
    </div>
  );
}
