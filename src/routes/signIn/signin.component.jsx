import React from "react";
import NewSignUp from "../../components/new-signUp/signup.component";
import {
  signInWithGooglePopUp,
  createUserDocumentFromAuth,
} from "../../utilities/firebase/firebase.utility";

const SignIn = () => {
  //fetc the response with async
  const fetchGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();

    const userDocref = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={fetchGoogleUser}>
        Sign in with your Google Account
      </button>
      <NewSignUp />
    </div>
  );
};

export default SignIn;
