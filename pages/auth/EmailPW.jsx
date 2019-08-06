import React, { useState } from "react";
import firebase from "firebase";

const EmailPW = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const { email, password } = state;

  const handleChange = name => e => {
    setState({ ...state, [name]: e.target.value });
  };

  const signup = e => {
    e.preventDefault();
    console.log("TCL: EmailPW -> email, password", email, password);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log("TCL: EmailPW -> res", res);
      })
      .catch(error => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  };
  return (
    <div>
      <h1>Email Password</h1>
      <form onSubmit={signup}>
        <input type="text" value={email} onChange={handleChange("email")} />
        <input
          type="password"
          value={password}
          onChange={handleChange("password")}
        />
        <button>signup</button>
      </form>
    </div>
  );
};

export default EmailPW;
