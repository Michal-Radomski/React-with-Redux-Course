import React from "react";
import "../styles/style.scss";

const FunctionalComponent = ({text}) => {
  // console.log(props.text);
  // const {text} = props;
  // console.log(text);
  return (
    <div className="header">
      <h1>Functional {text}</h1>
    </div>
  );
};

export default FunctionalComponent;
