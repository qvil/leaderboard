import { useState } from "react";
import Loading from "../components/Loading";

const index = () => {
  const [state, setState] = useState({ isLoaded: false });
  const { isLoaded } = state;

  return (
    <div>
      {!isLoaded && <Loading setLoading={isLoaded => setState({ isLoaded })} />}
      {isLoaded && (
        <div>
          <h1>Index Page</h1>
          <p>Paragraph</p>
        </div>
      )}

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
