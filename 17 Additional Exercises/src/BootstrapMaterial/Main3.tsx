import React from "react";
import {MDBRipple, MDBBtn, MDBTypography, MDBSpinner} from "mdb-react-ui-kit";

import Collapse from "./Collapse";

const Main3 = (): JSX.Element => {
  return (
    <React.Fragment>
      <MDBTypography tag="h1" className="display-2 pb-3 mb-3">
        Bootstrap Material Elements
      </MDBTypography>

      <MDBRipple
        className="bg-image hover-overlay shadow-1-strong rounded"
        style={{maxWidth: "22rem"}}
        rippleTag="div"
        rippleColor="light"
      >
        <img src="https://mdbootstrap.com/img/new/fluid/city/113.webp" className="w-100" alt="" />
        <a href="#!">
          <div className="mask" style={{backgroundColor: "rgba(18, 102, 241, 0.5)"}}></div>
        </a>
      </MDBRipple>

      <Collapse />

      <hr />
      <MDBBtn>Button MDB</MDBBtn>
      <MDBBtn rounded className="mx-2" color="secondary">
        Secondary
      </MDBBtn>
      <MDBBtn rounded outline className="mx-2" color="danger">
        Danger outline rounded
      </MDBBtn>
      <hr />

      <MDBTypography note noteColor="info">
        <strong>Note info:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam molestiae unde laborum
        incidunt provident iste?
      </MDBTypography>

      <hr />
      <div className="text-center">
        <MDBSpinner color="primary">
          <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
        <MDBSpinner className="mx-2" color="secondary">
          <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
        <MDBSpinner color="success">
          <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
        <MDBSpinner className="mx-2" color="warning">
          <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
        <MDBSpinner color="danger">
          <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
        <MDBSpinner className="mx-2" color="info">
          <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
      </div>

      <div>
        <MDBBtn size="lg" className="me-2" active>
          Button
        </MDBBtn>
        <MDBBtn size="lg" tag="a" href="#" color="secondary" active>
          Link
        </MDBBtn>
      </div>
    </React.Fragment>
  );
};

export default Main3;
