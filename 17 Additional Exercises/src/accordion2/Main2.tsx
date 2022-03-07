//* Tutorial: https://blog.logrocket.com/how-to-build-a-react-accordion-menu-from-scratch

import React from "react";

import "./Main2.scss";
import Header from "./Header";
import Accordion from "./Accordion";

const Main2 = () => {
  return (
    <React.Fragment>
      <section className="accordion2">
        <div className="container">
          <Header />
          <Accordion />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Main2;
