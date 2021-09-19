import React, {Component} from "react";
import UserCreate from "./UserCreate";
import {LanguageStore} from "../components/context/LanguageContext";
import ColorContext from "../components/context/ColorContext";
import LanguageSelector from "./LanguageSelector";

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value="violet">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
