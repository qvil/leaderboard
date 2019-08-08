import React, { useState } from "react";
import firebase from "firebase";

const EmailPW = () => {
  const initialState = { email: "", password: "" };
  const [state, setState] = useState(initialState);
  const { email, password } = state;

  const handleChange = name => e => {
    setState({ ...state, [name]: e.target.value });
  };

  const signup = async e => {
    e.preventDefault();
    try {
      // const {
      //   additionalUserInfo: { isNewUser }
      // } = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const res = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      if (res.additionalUserInfo.isNewUser) {
        alert("회원가입을 환영합니다!");
      }
    } catch ({ code, message }) {
      console.log("TCL: EmailPW -> code", code);
      alert(message);
      // if (message === "EMAIL_EXISTS") {
      //   alert("이미 존재하는 이메일 입니다!");
      //   setState(initialState);
      // }
    }
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
