import React from "react";
import InputComponent from "./components/InputComponent";
import FunctionalComponent from "./components/FunctionalComponent";

const App = () => {
  return (
    <div className="ui container">
      <InputComponent />
      <FunctionalComponent text="Component" />
    </div>
  );
};

export default App;
