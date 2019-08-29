import { useState } from "react";
import Loading from "../components/Loading";
import Email from "./auth/email";
import Timeline from "./Timeline";

interface IState {
  loading: boolean;
  isSigned?: boolean;
}
const index = () => {
  const [state, setState] = useState<IState>({
    loading: true,
    isSigned: true
  });
  const { loading, isSigned } = state;

  const onSignin = isSigned => {
    setState({ ...state, isSigned });
  };

  return (
    <div>
      {!loading && <Loading setLoading={loading => setState({ loading })} />}
      {!isSigned && <Email onSignin={onSignin} />}
      {<Timeline />}
    </div>
  );
};

export default index;
