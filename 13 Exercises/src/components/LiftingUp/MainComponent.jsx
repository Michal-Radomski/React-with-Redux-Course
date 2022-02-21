import React, {Component} from "react";
import ComponentA from "./Component_A";
import ComponentB from "./Component_B";

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.state = {text: ""};
  }

  handleTextChange(newText) {
    this.setState({text: newText});
  }

  componentDidUpdate() {
    console.log("this.state:", this.state);
  }

  render() {
    return (
      <React.Fragment>
        <ComponentA text={this.state.text} handleTextChange={this.handleTextChange} />
        <ComponentB text={this.state.text} />
      </React.Fragment>
    );
  }
}

export default MainComponent;
