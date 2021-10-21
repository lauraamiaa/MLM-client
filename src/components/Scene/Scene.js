import React, { useState } from "react";
import "./Scene.css";

export default function Scene() {
  const [selection, setSelection] = useState(0);
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
    <div className="sceneContainer">
      <h2 className="sceneTitle">Pick your scene:</h2>

      <div className="sceneRadio">
        {imgSource.map((img, index) => (
          <div>
            <label>
              <input
                type="radio"
                value={img.alt}
                name="scene"
                checked={index === selection}
                onClick={() => setSelection(index)}
              />
              {img.alt}
            </label>
          </div>
        ))}
      </div>
      <img src={imgSource[selection].src} alt="" id="js-output" />
    </div>
  );
}
