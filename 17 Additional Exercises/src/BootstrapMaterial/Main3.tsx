//* Examples from: https://mdbootstrap.com

import React from "react";
import {
  MDBRipple,
  MDBBtn,
  MDBTypography,
  MDBSpinner,
  MDBBtnGroup,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBTooltip,
} from "mdb-react-ui-kit";

import Collapse from "./Collapse";
import Modal from "./Modal";

const Main3 = (): JSX.Element => {
  return (
    <React.Fragment>
      <MDBTypography tag="h1" className="display-2 pb-3 mb-3">
        Bootstrap Material Elements (Bootstrap 5)
      </MDBTypography>

      <p className="mb-0">
        Hover the link to see the
        <MDBTooltip tag="a" wrapperProps={{href: "#"}} title="Hi! I'm a tooltip!">
          {" "}
          tooltip
        </MDBTooltip>
      </p>

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
      <div>
        <Collapse />
        <hr />
        <Modal />
      </div>

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
      <br />
      <div>
        <MDBBtnGroup shadow="0" aria-label="Basic example">
          <MDBBtn color="secondary" outline>
            Left
          </MDBBtn>
          <MDBBtn color="secondary" outline>
            Middle
          </MDBBtn>
          <MDBBtn color="secondary" outline>
            Right
          </MDBBtn>
        </MDBBtnGroup>
      </div>
      <br />

      <MDBCard style={{maxWidth: "22rem"}}>
        <MDBRipple rippleColor="light" rippleTag="div" className="bg-image hover-overlay">
          <MDBCardImage src="https://mdbootstrap.com/img/new/standard/nature/111.webp" fluid alt="..." />
          <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)", cursor: "pointer"}}></div>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
          <MDBBtn href="#">Button</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </React.Fragment>
  );
};

export default Main3;
