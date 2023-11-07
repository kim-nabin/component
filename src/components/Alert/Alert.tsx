"use client";

import { useState } from "react";
import "./Alert.css";

type Props = {
  title: string;
  text: string;
};

export default function Alert({ title, text }: Props) {
  const [alertHidden, setAlertHidden] = useState(false);

  const hideAlert = () => {
    setAlertHidden(true);
  };

  return (
    <div>
      {alertHidden || (
        <div className="alert-background">
          <div className="alert-icon">
            <p>!</p>
          </div>
          <div className="alert-text">
            <p>{title}</p>
            <p>{text}</p>
          </div>
          <div className="alert-check">
            <button
              onClick={() => {
                hideAlert();
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
