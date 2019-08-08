import { useState } from "react";
import firebase from "firebase";
import Card from "../../../components/Card";

const Signup = () => {
  const initialState = { email: "", password: "", loading: false };
  const [state, setState] = useState(initialState);
  const { email, password, loading } = state;

  const handleChange = name => e => {
    setState({ ...state, [name]: e.target.value });
  };

  const signup = async e => {
    e.preventDefault();
    if (loading) return;
    try {
      setState({ ...state, loading: true });
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
      alert(message);
      // if (message === "EMAIL_EXISTS") {
      //   alert("이미 존재하는 이메일 입니다!");
      //   setState(initialState);
      // }
    } finally {
      setState({ ...state, loading: false });
    }
  };
  if (loading) return <div>loading...</div>;
  return (
    <div className="container">
      <Card>
        <h2>Signup</h2>
        <form onSubmit={signup}>
          {/* <TextField label="label" value="value" /> */}
          <input
            type="text"
            value={email}
            onChange={handleChange("email")}
            placeholder="email"
          />
          <input
            type="password"
            value={password}
            onChange={handleChange("password")}
            placeholder="password"
          />
          <button disabled={loading}>signup</button>
        </form>
      </Card>
      <style jsx>
        {`
          div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            padding: 8px;
            box-sizing: border-box;
            text-align: center;
          }
          form {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
        `}
      </style>
    </div>
  );
};

export default Signup;
