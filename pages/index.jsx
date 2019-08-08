import { useState } from "react";
import Loading from "../components/Loading";
import Email from "./auth/email";
//
const index = () => {
  const [state, setState] = useState({ loading: true });
  const { loading } = state;

  return (
    <div>
      {!loading && <Loading setLoading={loading => setState({ loading })} />}
      {loading && <Email />}
    </div>
  );
};

export default index;
