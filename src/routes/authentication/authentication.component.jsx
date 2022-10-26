import React from "react";
import NewSignIn from "../../components/new-signIn/signin.component";
import NewSignUp from "../../components/new-signUp/signup.component";
import "./authentication.component.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <NewSignIn />
      <NewSignUp />
    </div>
  );
};

export default Authentication;
