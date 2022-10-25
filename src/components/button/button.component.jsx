import React from "react";
import "./button.component.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = ({ children, buttonType, ...restOfTheProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...restOfTheProps}
    >
      {children}
    </button>
  );
};

export default Button;
