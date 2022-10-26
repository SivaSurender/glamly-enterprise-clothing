import React from "react";
import NewSignIn from "../../components/new-signIn/signin.component";
import NewSignUp from "../../components/new-signUp/signup.component";
import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from "../../utilities/firebase/firebase.utility";

const Authentication = () => {
  return (
    <div>
      <h1>Sign In Page</h1>
      <NewSignIn />

      <NewSignUp />
    </div>
  );
};

export default Authentication;
