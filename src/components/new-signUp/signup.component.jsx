import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { createUserDocumentFromAuth } from "../../utilities/firebase/firebase.utility";
import { auth } from "../../utilities/firebase/firebase.utility";
import SignUpForm from "../sign-up-form/signup.form.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const NewSignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  console.log(formFields);

  const formHandleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  //reseting forms

  const resetFormHandler = () => {
    setFormFields(defaultFormFields);
  };

  const formHandlerSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Enterd Passwords do not match");
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await createUserDocumentFromAuth({
        ...user,
        displayName,
      });

      resetFormHandler();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user as the email is already in use");
      } else {
        console.log("User creation ecountered an error", error);
      }
    }
  };

  return (
    <div>
      <h1>SignUp with your email </h1>
      <form onSubmit={formHandlerSubmit}>
        <SignUpForm
          label="Display Name"
          type="text"
          required
          onChange={formHandleChange}
          name="displayName"
          value={displayName}
        />

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

        <SignUpForm
          label="Confirm Password"
          type="password"
          required
          onChange={formHandleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        {/* button to submit the form as whole after validation from above label required fields
              then submitted through on submit handler attached in the form at the top */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default NewSignUp;
