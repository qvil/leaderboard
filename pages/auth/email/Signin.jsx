import { useState } from "react";
import Card from "../../../components/Card";
import Link from "next/link";
import firebase from "firebase";
import { useRouter } from "next/router";

const Signin = ({ onSignin }) => {
  const { push } = useRouter();
  const [state, setState] = useState({
    email: "",
    password: "",
    loading: false
  });
  const { email, password, loading } = state;

  const handleChange = name => e => {
    setState({ ...state, [name]: e.target.value });
  };

  const signin = async e => {
    e.preventDefault();
    if (loading) return;
    setState({ ...state, loading: true });
    try {
      const res = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      if (res) {
        alert("환영합니다!");
        push("/");
        onSignin(true);
      }

      console.log("TCL: signin -> res", res);
    } catch (error) {
      console.log("TCL: signin -> error", error);
      alert(error.message);
    } finally {
      setState({ ...state, loading: false });
    }
  };

  return (
    <div>
      <Card>
        <h2>Signin</h2>
        <form onSubmit={signin}>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={handleChange("email")}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={handleChange("password")}
          />
          <button onClick={signin} disabled={loading}>
            signin
          </button>
        </form>
        <Link href="/auth/email/signup">
          <a>Create a account</a>
        </Link>
      </Card>
      <style jsx>
        {`
          div {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          form {
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </div>
  );
};

export default Signin;
