import { useState } from "react";
import Loading from "../components/Loading";
import Email from "./auth/email";
import Home from "./Home";
//
const index = () => {
  const [state, setState] = useState({ loading: true, isSigned: true });
  const { loading, isSigned } = state;

  return (
    <div>
      {!loading ? (
        <Loading setLoading={loading => setState({ loading })} />
      ) : !isSigned ? (
        <Email />
      ) : (
        <Home />
      )}
    </div>
  );
};

export default index;
