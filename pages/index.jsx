import { useState } from "react";
import Loading from "../components/Loading";
import EmailPW from "./auth/EmailPW";
//
const index = () => {
  const [state, setState] = useState({ isLoaded: false });
  const { isLoaded } = state;

  return (
    <div>
      {!isLoaded && <Loading setLoading={isLoaded => setState({ isLoaded })} />}
      {isLoaded && <EmailPW />}

      <style jsx>
        {`
          h1 {
            color: pink;
          }
          p {
            color: skyblue;
          }
        `}
      </style>
    </div>
  );
};

export default index;
