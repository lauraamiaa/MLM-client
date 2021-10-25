import React, { useState } from "react";
import { useSelector } from "react-redux";

import Catcall from "../Catcall/Catcall";
import LanguageButtons from "../Buttons/LanguageButtons";
import { selectChosenCatcall } from "../../store/catcall/selector";
import "./Scene.css";

export default function Scene() {
  const [selection, setSelection] = useState(0);
  const chosenCatcall = useSelector(selectChosenCatcall);
  const imgSource = [
    {
      alt: "club",
      src: "https://res.cloudinary.com/dveul1ne3/image/upload/v1634821933/Entertainment/wwzaaevsgczluzoajmvv.jpg",
    },
    {
      alt: "office",
      src: "https://res.cloudinary.com/dveul1ne3/image/upload/v1634819681/Entertainment/upsgd3sx74rjxkwsyl4i.jpg",
    },
    {
      alt: "street",
      src: "https://res.cloudinary.com/dveul1ne3/image/upload/v1634821933/Entertainment/ykra8ayfpkiwteohvbuz.jpg",
    },
    {
      alt: "train",
      src: "https://res.cloudinary.com/dveul1ne3/image/upload/v1634821710/Entertainment/elryp73h11mfmxyypm8r.jpg",
    },
  ];

  return (
    <div>
      <div className="sceneComponents">
        <div className="sceneRadio">
          <h2 className="sceneTitle">Pick your scene:</h2>
          <div>
            {imgSource.map((img, index) => (
              <div key={index}>
                <label>
                  <input
                    type="radio"
                    value={img.alt}
                    name="scene"
                    checked={index === selection}
                    readOnly={true}
                    onClick={() => setSelection(index)}
                  />
                  {img.alt}
                </label>
              </div>
            ))}
            <Catcall />
          </div>
        </div>

        <div>
          <div className="sceneContainer">
            <img src={imgSource[selection].src} alt="" id="js-output" />

            <img
              className="manSilhouette"
              src="https://res.cloudinary.com/dveul1ne3/image/upload/v1634911052/Entertainment/ny3yhgcrsmiqpv1lvw3z.png"
              alt="man"
            />
            <img
              className="womanSilhouette"
              src="https://res.cloudinary.com/dveul1ne3/image/upload/v1634911052/Entertainment/dmizqmtilv1cdpclkbgq.png"
              alt="woman"
            />
            {!chosenCatcall ? null : (
              <p className="dialogueBox">{chosenCatcall.expression}</p>
            )}
          </div>
        </div>

        <LanguageButtons />
      </div>
    </div>
  );
}
