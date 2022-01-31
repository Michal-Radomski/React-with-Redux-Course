import React from "react";

class PureComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: "Full Stack Tutorials",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(() => {
        return {title: "Full Stack Tutorials"};
      });
    }, 1000);
  }

  render() {
    console.log("Rendering the Component: PureComponent");
    return <div>title: {this.state.title}</div>;
  }
}

export default PureComponent;
