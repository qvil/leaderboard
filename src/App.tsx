import React from "react";
import Button from "@material-ui/core/Button";

interface IProps {
  title: string;
}

const App: React.FC<IProps> = ({ title }) => {
  return (
    <div className="App">
      {title}
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </div>
  );
};

export default App;
