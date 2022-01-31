import React from "react";

class ShouldComponentUpdate extends React.Component {
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

  shouldComponentUpdate(_nextProps, nextState) {
    return this.state.title === nextState.title ? false : true;
  }

  render() {
    console.log("Rendering the component: ShouldComponentUpdate");
    return <div>title: {this.state.title}</div>;
  }
}

export default ShouldComponentUpdate;
