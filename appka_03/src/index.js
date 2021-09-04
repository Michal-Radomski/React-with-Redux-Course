import React from "react";
import ReactDOM from "react-dom";
// import SeasonDisplay from "./SeasonDisplay";

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
  constructor(props) {
    super(props);
    //+ THIS IS THE ONLY TIME we do direct assignment of to this.state
    this.state = {lat: null, errorMessage: ""};
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // console.log(position);
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

  // React says we have to define render function!!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }
    if (!this.state.errorMessage && !this.state.lat) {
      return <div>Loading...</div>;
    }
  }
}

// Take the React Component and show it on the show
ReactDOM.render(<App />, document.getElementById("root"));
