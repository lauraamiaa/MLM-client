import React from "react";

import "./Homepage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Scene from "../Scene/Scene";
import { useEffect } from "react";

export default function Homepage() {
  // const choice = useSelector(selectChoice);

  // useEffect(() => {
  //   if (choice) {
  //     console.log("choiceChange", choice.audio);
  //     // console.log(audioElement.current);
  //     const audioElement = new Audio(choice.audio);
  //     audioElement.play();
  //   }
  // }, [choice]);

  return (
    <div>
      <Header />
      <div className="homepageBody">
        <Scene />
      </div>
      <Footer />
    </div>
  );
}
