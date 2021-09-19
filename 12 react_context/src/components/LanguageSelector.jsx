import React, {Component} from "react";
import LanguageContext from "./context/LanguageContext";

class LanguageSelector extends Component {
  static contextType = LanguageContext;
  render() {
    // console.log(this.context);

    return (
      <div>
        Select a language:&nbsp;&nbsp;
        <i className="flag us" onClick={() => this.context.onLanguageChange("english")} />
        <i className="flag pl" onClick={() => this.context.onLanguageChange("polski")} />
      </div>
    );
  }
}

export default LanguageSelector;
