import React from "react";

import "./Homepage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Homepage() {
  return (
    <div>
      <Header />
      <div className="homepageBody">
        <div className="sceneContainer"></div>
      </div>
      <Footer />
    </div>
  );
}
