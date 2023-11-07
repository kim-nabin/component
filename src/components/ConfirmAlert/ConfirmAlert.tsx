"use client";

import { useState } from "react";
import "./ConfirmAlert.css";

type Props = {
  title: string;
  text: string;
  // response: Function;
};

export default function ConfirmAlert({ title, text }: Props) {
  const [alertHidden, setAlertHidden] = useState(false);

  const hideAlert = () => {
    setAlertHidden(true);
  };

  // const yesResponse = (yes: string) => {
  //   response(yes);
  // };

  // const noResponse = (no: string) => {
  //   response(no);
  // };

  return (
    <div>
      {alertHidden || (
        <div className="conf-alert-background">
          <div className="conf-alert-icon">
            <p>!</p>
          </div>
          <div className="conf-alert-text">
            <p>{title}</p>
            <p>{text}</p>
          </div>
          <div className="conf-alert-check">
            <button
              onClick={() => {
                // yesResponse("yes");
                hideAlert();
              }}
            >
              YES
            </button>
            <button
              onClick={() => {
                // noResponse("no");
                hideAlert();
              }}
            >
              NO
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
