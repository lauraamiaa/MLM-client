import React from "react";

import "./LanguageButton.css";

export default function LanguageButton(props) {
  const { response } = props;
  console.log("props", response);

  return (
    <div>
      <a href="#" class="button">
        Language button
      </a>
    </div>
  );
}
