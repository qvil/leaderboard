import React from "react";
import Button from "@material-ui/core/Button";
import { Button as CButton } from "@chakra-ui/core";

import { ThemeProvider } from "@chakra-ui/core";
import theme from "./customTheme";

interface IProps {
  title: string;
}

const App: React.FC<IProps> = ({ title }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {title}
        <Button variant="contained" color="primary">
          Primary
        </Button>

        <CButton variantColor="green">CButton</CButton>
      </div>
    </ThemeProvider>
  );
};

export default App;
