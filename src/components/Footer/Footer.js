import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCatcall } from "../../store/catcall/actions";

import "./Footer.css";

export default function Footer() {
  const dispatch = useDispatch();
  const [expression, setExpression] = useState("");

  function submitCatcall(event) {
    event.preventDefault();
    dispatch(addCatcall(expression));
    setExpression("");
  }
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="footerAbout">
          <h1 className="footerHeadings">What is this about?</h1>
          <p className="footerText">
            This site is dedicated to every single victim of sexual harassment!
            <br />
            Put your cat caller on the spot with these fierce comebacks. Choose
            your language of choice, and tell your harasser what you really
            think.
          </p>
          <h6 className="credits">
            This website has been created by Marijn Verbiesen, Mariel Crespo and
            Laura Miatkowski.
          </h6>
        </div>

        <div className="footerSubmit">
          <h1 className="footerHeadings">Submit cat calls</h1>
          <p className="footerText">
            Have you been assaulted, and would you like us to publish a received
            verbal attack?
            <br />
            Then submit your crazy, insane, disgusting cat call below:
          </p>

          <form>
            <textarea
              name="catCall"
              value={expression}
              onChange={(event) => setExpression(event.target.value)}
              rows="2"
              cols="60"
            ></textarea>
            <br />
            <button
              className="submitCatcall"
              type="submit"
              onClick={submitCatcall}
              value="Submit"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
