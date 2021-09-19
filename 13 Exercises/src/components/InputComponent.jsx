import React, {Component} from "react";
import "../styles/style.scss";

class InputComponent extends Component {
  //- To nie jest potrzebne
  // constructor(props) {
  //   super(props);
  //   this.state = {term: ""};
  // }
  state = {term: ""};

  render() {
    // console.log(this.state.term);

    // kontrolowany component
    return (
      <div className="style1">
        <input
          type="text"
          onChange={(e) => this.setState({term: e.target.value})}
          value={this.state.term}
          placeholder="input..."
        />
      </div>
    );
  }
}

export default InputComponent;
