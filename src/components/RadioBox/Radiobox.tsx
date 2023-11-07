"use client";

import React, { useState } from "react";
import "./RadioBox.css";

type Props = {
  text: string;
  //   value: Function;
};

export default function RadioBox({ text }: Props) {
  const [radiobox, setRadioBox] = useState(false);

  const clickedRadioBox = () => {
    setRadioBox(!radiobox);
  };

  //   const checkedValue = () => {
  //     value(!checkbox);
  //   };

  return (
    <div className="radiobox">
      <div
        className={`radiobox-square${radiobox ? "-clicked" : ""}`}
        onClick={() => {
          clickedRadioBox();
          //   checkedValue();
        }}
      ></div>
      <p className="radiobox-text">{text}</p>
    </div>
  );
}
