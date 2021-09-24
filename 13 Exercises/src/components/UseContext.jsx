import React, {useState, useContext} from "react";

let context = React.createContext(null);
function UseContext() {
  // eslint-disable-next-line no-unused-vars
  const [fName, setfName] = useState("Michaś");
  // eslint-disable-next-line no-unused-vars
  const [lName, setlName] = useState("Radom");
  return (
    <context.Provider value={{fName, lName}}>
      <div>This is a Parent component</div>
      <br />
      <ChildA />
    </context.Provider>
  );
}

function ChildA() {
  return (
    <>
      This is ChildA Component.
      <br />
      <ChildB />
    </>
  );
}

function ChildB() {
  return (
    <>
      This is ChildB Component.
      <br />
      <ChildC />
    </>
  );
}

function ChildC() {
  const {fName, lName} = useContext(context);
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

export default UseContext;
