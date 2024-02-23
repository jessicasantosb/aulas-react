import React from "react";
import CssComponents from "../css/CssComponents";
import Slide from "../css/Slide";

function Css() {
  const slides = [
    {
      id: "slide1",
      text: "Slide 1",
    },
    {
      id: "slide2",
      text: "Slide 2",
    },
    {
      id: "slide3",
      text: "Slide 3",
    },
  ];

  return (
    <>
      <h1>CSS</h1>
      <CssComponents />
      <Slide slides={slides} />
    </>
  );
}

export default Css;
