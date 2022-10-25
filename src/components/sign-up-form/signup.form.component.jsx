import React from "react";
import "./signup.form.component.scss";

const SignUpForm = ({ label, ...restOfTheProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...restOfTheProps} />
      {label && (
        <label
          className={`${
            restOfTheProps.value.length ? "shrink" : ""
          }form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default SignUpForm;
