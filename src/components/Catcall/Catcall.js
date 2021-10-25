import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSpeechSynthesis } from "react-speech-kit";

import "./Catcall.css";
import { fetchCatcall } from "../../store/catcall/actions";
import { selectCatcall } from "../../store/catcall/selector";

export default function Catcall() {
  const dispatch = useDispatch();
  const catcall = useSelector(selectCatcall);
  const { speak } = useSpeechSynthesis();

  const [attack, setAttack] = useState("");

  useEffect(() => {
    dispatch(fetchCatcall());
  }, [dispatch]);

  const onClickHarass = () => {
    const randomIndex = Math.floor(Math.random() * catcall.expressions.length);
    const randomAttack = catcall.expressions[randomIndex];
    speak({
      text: randomAttack.expression,
      lang: "en-GB",
      pitch: 0.7,
      rate: 1,
    });
    setAttack(randomAttack);
  };

  return (
    <div>
      <h2 className="sceneTitle">Click to cat call:</h2>
      {!catcall.expressions.length ? null : (
        <button className="attackButton" onClick={onClickHarass}>
          Attack!
        </button>
      )}
      {!attack ? null : <p className="dialogueBox">{attack.expression}</p>}
    </div>
  );
}
