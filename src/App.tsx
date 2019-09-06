import React from "react";

interface IProps {
  title: string;
}

const App: React.FC<IProps> = ({ title }) => {
  return <div className="App">{title}</div>;
};

export default App;
