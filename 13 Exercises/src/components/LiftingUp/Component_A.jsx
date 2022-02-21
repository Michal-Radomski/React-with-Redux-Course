import React from "react";

class Component_A extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.handleTextChange = this.handleTextChange.bind(this);
  // }

  // handleTextChange(event) {
  //   this.props.handleTextChange(event.target.value);
  // }

  componentDidUpdate() {
    console.log("this.props:", this.props);
  }

  render() {
    return (
      <>
        <h3>Input - Component_A</h3>
        {/* <input value={this.props.text} onChange={this.handleTextChange} /> */}
        <input value={this.props.text} onChange={(event) => this.props.handleTextChange(event.target.value)} />
      </>
    );
  }
}

export default Component_A;
