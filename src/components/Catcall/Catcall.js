import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSpeechSynthesis } from "react-speech-kit";

import "./Catcall.css";
import { fetchCatcall, chosenCatcall } from "../../store/catcall/actions";
import { selectCatcall } from "../../store/catcall/selector";

export default function Catcall() {
  const dispatch = useDispatch();
  const catcall = useSelector(selectCatcall);
  const { speak } = useSpeechSynthesis();

  useEffect(() => {
    dispatch(fetchCatcall());
  }, [dispatch]);

  const onClickHarass = () => {
    const approvedCatcalls = catcall.expressions.filter((c) => {
      return c.status === "approved";
    });
    const randomIndex = Math.floor(Math.random() * approvedCatcalls.length);
    const randomAttack = approvedCatcalls[randomIndex];
    speak({
      text: randomAttack.expression,
      pitch: 0.7,
      rate: 1,
    });
    dispatch(chosenCatcall(randomAttack));
  };

  return (
    <div>
      <h2 className="sceneTitle">Click to catcall:</h2>
      {!catcall.expressions.length ? null : (
        <button className="attackButton" onClick={onClickHarass}>
          Attack!
        </button>
      )}
    </div>
  );
}
