import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { async } from "@firebase/util";

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

  const formHandleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>SignUp with your email </h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input
          type="text"
          required
          onChange={formHandleChange}
          name="displayName"
          value={displayName}
        />

        <label>Email Address</label>
        <input
          type="email"
          required
          onChange={formHandleChange}
          name="email"
          value={email}
        />

        <label>Password</label>
        <input
          type="password"
          required
          onChange={formHandleChange}
          name="password"
          value={password}
        />

        <label>Confirm Password</label>
        <input
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
