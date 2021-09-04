import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

if (module.hot) {
  module.hot.accept();
}

// -Create a React Component
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

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (error) => console.log(error)
    );
    return (
      <div>
        Latitude:
        <SeasonDisplay />
      </div>
    );
  }
}

// Take the React Component and show it on the show
ReactDOM.render(<App />, document.getElementById("root"));
