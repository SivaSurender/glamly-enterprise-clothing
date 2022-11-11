import { useState, useContext } from "react";
import {
  createUserDocumentFromAuth,
  signInWithAuthUserWithEmailAndPassword,
  signInWithGooglePopUp,
} from "../../utilities/firebase/firebase.utility";
import SignUpForm from "../sign-up-form/signup.form.component";
import "./signin.component.scss";
import Button from "../button/button.component";
import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
  email: "",
  password: "",
};

const NewSignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const { setCurrentUser } = useContext(UserContext);

  const formHandleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  //reseting forms

  const resetFormHandler = () => {
    setFormFields(defaultFormFields);
  };
  //fetch the response with async
  const signInwithGoogle = async () => {
    const { user } = await signInWithGooglePopUp();

    await createUserDocumentFromAuth(user);
  };

  const formHandlerSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInWithAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user);
      resetFormHandler();
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect user name or password");
          break;

        case "auth/user-not-found":
          alert(
            "You don't have an aaccount associated with this email ID, please sign up"
          );
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account ? </h2>
      <span>Signin with your email and password </span>
      <form onSubmit={formHandlerSubmit}>
        <SignUpForm
          label="Email Address"
          type="email"
          required
          onChange={formHandleChange}
          name="email"
          value={email}
        />

        <SignUpForm
          label="Password"
          type="password"
          required
          onChange={formHandleChange}
          name="password"
          value={password}
        />

        {/* button to submit the form as whole after validation from above label required fields
              then submitted through on submit handler attached in the form at the top */}

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>

          <Button buttonType="google" onClick={signInwithGoogle} type="button">
            Google Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewSignIn;
