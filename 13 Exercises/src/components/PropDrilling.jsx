import React, {useState} from "react";

function PropDrilling() {
  // eslint-disable-next-line no-unused-vars
  const [fName, setfName] = useState("Michal");
  // eslint-disable-next-line no-unused-vars
  const [lName, setlName] = useState("Rad");
  return (
    <>
      <div>This is a Parent component</div>
      <br />
      <ChildA fName={fName} lName={lName} />
    </>
  );
}

function ChildA({fName, lName}) {
  return (
    <>
      This is ChildA Component.
      <br />
      <ChildB fName={fName} lName={lName} />
    </>
  );
}

function ChildB({fName, lName}) {
  return (
    <>
      This is ChildB Component.
      <br />
      <ChildC fName={fName} lName={lName} />
    </>
  );
}

function ChildC({fName, lName}) {
  return (
    <>
      This is ChildC component.
      <br />
      <h3> Data from Parent component is as follows:</h3>
      <h4>{fName} from Child_C</h4>
      <h4>{lName} from Child_C</h4>
    </>
  );
}

export default PropDrilling;
