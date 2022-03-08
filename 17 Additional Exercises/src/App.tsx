import React from "react";

import "./App.scss";
import Main from "./accordion/Main";
import Main2 from "./accordion2/Main2";
import Main3 from "./BootstrapMaterial/Main3";

function App() {
  return (
    <React.Fragment>
      <Main />
      <hr />
      <Main2 />
      <hr />
      <Main3 />
    </React.Fragment>
  );
}

export default App;
