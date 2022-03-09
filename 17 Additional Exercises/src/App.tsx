import React from "react";

import "./App.scss";
import Main from "./accordion/Main";
import Main2 from "./accordion2/Main2";

import Main3 from "./BootstrapMaterial/Main3";

import UseCallback from "./hooks/UseCallback";
import UseMemo from "./hooks/UseMemo";

import MapBox from "./MapBox/MapBox";

function App() {
  return (
    <React.Fragment>
      <MapBox />
      <hr />
      <div>
        <UseCallback />
        <hr />
        <UseMemo />
      </div>
      <hr />
      <Main />
      <hr />
      <Main2 />
      <hr />
      <Main3 />
      <br />
      <hr />
    </React.Fragment>
  );
}

export default App;
