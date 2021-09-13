import React from "react";
import DropDown from "./DropDown";
import Convert from "./Convert";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Polish",
    value: "pl",
  },
];

const Translate = () => {
  const [language, setLanguage] = React.useState(options[0]);
  const [text, setText] = React.useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text to Translate</label>
          <input value={text} onChange={(event) => setText(event.target.value)} />
        </div>
      </div>

      <DropDown label="Select a Language" selected={language} onSelectedChange={setLanguage} options={options} />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
