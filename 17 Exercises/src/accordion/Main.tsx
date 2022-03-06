// According to this tutorial: https://www.digitalocean.com/community/tutorials/react-react-accordion-component

import React from "react";

import Accordion from "./Accordion";

const Main = () => {
  return (
    <React.Fragment>
      <div>
        <h1>Accordion Demo</h1>
        <Accordion allowMultipleOpen={true}>
          {/* @ts-ignore */}
          <div label="Alligator Mississippiensis" isOpen={true}>
            <p>
              <strong>Common Name:</strong> American Alligator
            </p>
            <p>
              <strong>Distribution:</strong> Texas to North Carolina, US
            </p>
            <p>
              <strong>Endangered Status:</strong> Currently Not Endangered
            </p>
          </div>
          {/* @ts-ignore */}
          <div label="Alligator Sinensis">
            <p>
              <strong>Common Name:</strong> Chinese Alligator
            </p>
            <p>
              <strong>Distribution:</strong> Eastern China
            </p>
            <p>
              <strong>Endangered Status:</strong> Critically Endangered
            </p>
          </div>
        </Accordion>
      </div>
    </React.Fragment>
  );
};

export default Main;
