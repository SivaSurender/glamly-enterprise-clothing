import React from "react";

const NewSignUp = () => {
  return (
    <div>
      <h1>SignUp with your email </h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input type="text" required />

        <label>Email Address</label>
        <input type="email" required />

        <label>Password</label>
        <input type="password" required />

        <label>Confirm Password</label>
        <input type="password" required />

        {/* button to submit the form as whole after validation from above label required fields
              then submitted through on submit handler attached in the form at the top */}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default NewSignUp;
