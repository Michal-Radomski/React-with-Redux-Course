import React from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import DropDown from "./DropDown";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";

const items = [
  {title: "What is React?", content: "Frontend JS library"},
  {title: "Why use React?", content: "React is a favorite JS library"},
  {title: "How do you use React?", content: "By creating components"},
];

const options = [
  {
    label: "The Color Red",
    value: "Red",
  },
  {
    label: "The Color Green",
    value: "Green",
  },
  {
    label: "A Shade of Blue",
    value: "Blue",
  },
];

const App = () => {
  const [selected, setSelected] = React.useState(options[0]);

  return (
    <div>
      <Header />
      <hr style={{color: "blue"}} />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <DropDown label="Select a Color" options={options} selected={selected} onSelectedChange={setSelected} />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
