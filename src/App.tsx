import React from "react";
import Button from "@material-ui/core/Button";
import MyButton from "./components/MyButton";

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
      <MyButton className="13" style={{ marginLeft: 8 }}>
        Styled Button
      </MyButton>
    </div>
  );
};

export default App;
