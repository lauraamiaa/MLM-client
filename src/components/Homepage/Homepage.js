import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./Homepage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { fetchResponses } from "../../store/responses/actions";
import { selectResponses } from "../../store/responses/selector";
import LanguageButton from "../Buttons/LanguageButton";

export default function Homepage() {
  const dispatch = useDispatch();
  const responses = useSelector(selectResponses);
  console.log("selector", responses);

  useEffect(() => {
    dispatch(fetchResponses());
  }, []);

  return (
    <div>
      <Header />
      {responses.map((response) => {
        return <LanguageButton key={response.id} responses={response} />; // pass down as props
      })}{" "}
      {/* <LanguageButton /> */}
      <div className="homepageBody">
        <div className="sceneContainer"></div>
      </div>
      <Footer />
    </div>
  );
}
