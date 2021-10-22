import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./LanguageButton.css";

import { fetchResponses, responseChosen } from "../../store/responses/actions";
import { selectResponses } from "../../store/responses/selector";

export default function LanguageButton() {
  const dispatch = useDispatch();
  const responses = useSelector(selectResponses);

  useEffect(() => {
    dispatch(fetchResponses());
  }, [dispatch]);

  function getRandomResponseByLanguage(language) {
    const responsesByLanguage = responses.filter(
      (response) => response.language.language === language
    );
    dispatch(
      responseChosen(
        responsesByLanguage[
          Math.floor(Math.random() * responsesByLanguage.length)
        ]
      )
    );
  }

  return (
    <div>
      {responses &&
        [
          ...new Set(responses.map((response) => response.language.language)),
        ].map((language, ix) => {
          return (
            <div key={ix}>
              <button onClick={() => getRandomResponseByLanguage(language)}>
                {language}
              </button>
            </div>
          );
        })}
    </div>
  );
}
