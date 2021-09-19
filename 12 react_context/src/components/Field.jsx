import React, {Component} from "react";
import LanguageContext from "./context/LanguageContext";

class Field extends Component {
  static contextType = LanguageContext;
  render() {
    const text = this.context.language === "english" ? "Name" : "Nazwa";
    return (
      <div className="ui field">
        <label>{text}:</label>
        <input />
      </div>
    );
  }
}

// -Zapis poniżej jest równoważny zapisowi ze słowem: static:
// Field.contextType = LanguageContext;

export default Field;
