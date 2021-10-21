import React from "react";

import "./Footer.css";

export default function Footer() {
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
        </div>

        <div className="footerSubmit">
          <h1 className="footerHeadings">Submit cat calls</h1>
          <p className="footerText">
            Have you been assaulted, and would you like us to publish your
            verbal attack?
            <br />
            Then submit your crazy, insane, disgusting received cat call below:
          </p>

          <form>
            <textarea name="catCall" rows="2" cols="60"></textarea>
            <br />
            <button type="submit" value="Submit">
              submit
            </button>
          </form>
        </div>
      </div>

      <h6 className="credits">
        This website has been created by Marijn Verbiesen, Mariel Crespo and
        Laura Miatkowski.
      </h6>
    </div>
  );
}
