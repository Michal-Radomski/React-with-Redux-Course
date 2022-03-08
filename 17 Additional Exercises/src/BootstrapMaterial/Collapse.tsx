import React from "react";
import {MDBCollapse, MDBBtn} from "mdb-react-ui-kit";

export default function Collapse(): JSX.Element {
  const [showShow, setShowShow] = React.useState<boolean>(false);

  const toggleShow = () => setShowShow(!showShow);

  return (
    <>
      <MDBBtn tag="a" onClick={toggleShow}>
        Link
      </MDBBtn>
      <MDBBtn onClick={toggleShow} outline className="mx-2" color="secondary">
        Button
      </MDBBtn>
      <MDBCollapse show={showShow} center={true}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, labore eaque excepturi dicta mollitia doloribus.
      </MDBCollapse>
    </>
  );
}
