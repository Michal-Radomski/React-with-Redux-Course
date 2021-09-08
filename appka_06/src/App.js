import React from "react";
//+ import Accordion from "./Accordion";
//+ import Search from "./Search";
import DropDown from "./DropDown";

//+ const items = [
//   {title: "What is React?", content: "Frontend JS library"},
//   {title: "Why use React?", content: "React is a favorite JS library"},
//   {title: "How do you use React?", content: "By creating components"},
// ];

const App = () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <DropDown />
    </div>
  );
};

export default App;
