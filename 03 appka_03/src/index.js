import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

if (module.hot) {
  module.hot.accept();
}

// -Create a React Component (Functional)
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (error) => console.log(error)
//   );
//   return (
//     <div>
//       Latitude:
//       <SeasonDisplay />
//     </div>
//   );
// };

// -Create a React Class Component
class App extends React.Component {
  // constructor(props) {      //- This is done automatically
  //   super(props);
  //   //+ THIS IS THE ONLY TIME we do direct assignment of to this.state
  //   this.state = {lat: null, errorMessage: ""};
  // }
  //+ THIS IS THE ONLY TIME -> alternative method -> outside Constructor
  state = {lat: null, errorMessage: ""};
  componentDidMount() {
    console.log("Component was rendered");
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        // we called setState!!!
        this.setState({lat: position.coords.latitude});
      },
      //+ DON'T DO IT !!!
      //+ this.state=position.coords.latitude

      (error) => {
        console.log(error);
        this.setState({errorMessage: error.message});
      }
    );
  }
  componentDidUpdate() {
    console.log("Component was updated");
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      // return <div>Latitude: {this.state.lat}</div>;
      return <SeasonDisplay lat={this.state.lat} />;
    }
    if (!this.state.errorMessage && !this.state.lat) {
      return <Spinner message="Please accept location request" />;
    }
  }

  // React Docs says we have to define render function!!
  render() {
    return (
      // No classes: border red;
      <div className="border red" style={{border: "red 5px solid"}}>
        {this.renderContent()}
      </div>
    );
  }
}

// Take the React Component and show it on the show
ReactDOM.render(<App />, document.getElementById("root"));
