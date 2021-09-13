// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

if (module.hot) {
  module.hot.accept();
}

// function getButtonText() {
//   return "Click on Me!";
// }

// Create a react component
const App = () => {
  // const buttonText = "Click Me!";
  const buttonText = {text: "Click Me!"};
  const style = {backgroundColor: "blue", color: "white"};
  const labelText = "Enter name...";

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      {/* <button style={{backgroundColor: "blue", color: "white"}}>{getButtonText()}</button> */}
      <button style={style}>{buttonText.text}</button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
