"use client";

import React, { useState } from "react";
import "./CheckBox.css";

type Props = {
  text: string;
  //   value: Function;
};

export default function CheckBox({ text }: Props) {
  const [checkbox, setCheckBox] = useState(false);

  const clickedCheckBox = () => {
    setCheckBox(!checkbox);
  };

  //   const checkedValue = () => {
  //     value(!checkbox);
  //   };

  return (
    <div className="checkbox">
      <div
        className={`checkbox-square${checkbox ? "-clicked" : ""}`}
        onClick={() => {
          clickedCheckBox();
          //   checkedValue();
        }}
      >
        {checkbox ? "✔" : ""}
      </div>
      <p className="checkbox-text">{text}</p>
    </div>
  );
}
