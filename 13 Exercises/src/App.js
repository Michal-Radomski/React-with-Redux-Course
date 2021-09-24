import React from "react";
import InputComponent from "./components/InputComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import GoogleMap from "./components/GoogleMap";
import Dashboard from "./components/Dashboard";
import HOC from "./components/HOC";
import CompoundComponent from "./components/CompoundComponent";

class App extends React.Component {
  state = {lat: 54.5, lng: 18.5};

  render() {
    return (
      <>
        <div className="ui container">
          <InputComponent />
          <FunctionalComponent text="Component" />
        </div>
        <h1 style={{textAlign: "center"}}>Hello CodeSandbox</h1>
        <button onClick={() => this.setState({lat: 52.5, lng: 16.5})}>Poznań</button>
        <GoogleMap lat={this.state.lat} lng={this.state.lng} />
        {/* //- Przykład -> Modal */}
        <Dashboard />
        <hr />
        {/* //- Higher-Order Components In React */}
        <HOC />
        {/* //- Compound Components In React */}
        <CompoundComponent />
      </>
    );
  }
}
export default App;
