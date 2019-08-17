import { useState } from "react";
import Loading from "../components/Loading";
import Email from "./auth/email";
import Home from "./Home";
//
const index = () => {
  const [state, setState] = useState({ loading: true, isSigned: false });
  const { loading, isSigned } = state;

  const onSignin = isSigned => {
    console.log("TCL: index -> state", state);
    console.log("TCL: index -> isSigned", isSigned);
    setState({ ...state, isSigned });
  };

  return (
    <div>
      {!loading ? (
        <Loading setLoading={loading => setState({ loading })} />
      ) : !isSigned ? (
        <Email onSignin={onSignin} />
      ) : (
        <Home />
      )}
    </div>
  );
};

export default index;
