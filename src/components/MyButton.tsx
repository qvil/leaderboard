import React, { ReactNode } from "react";
import { styled } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { BaseProps } from "../types";

const StyledMyButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px"
});

interface IButtonProps extends BaseProps {
  children?: ReactNode;
  // others?: any;
}

const MyButton: React.FC<IButtonProps> = ({ children, ...others }) => {
  return <StyledMyButton {...others}>{children}</StyledMyButton>;
};

export default MyButton;
