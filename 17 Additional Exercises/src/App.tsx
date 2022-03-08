import React from "react";

import "./App.scss";
import Main from "./accordion/Main";
import Main2 from "./accordion2/Main2";
import Main3 from "./BootstrapMaterial/Main3";
import UseCallback from "./hooks/UseCallback";

function App() {
  return (
    <React.Fragment>
      <div>
        <UseCallback />
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
