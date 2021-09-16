import React from "react";
import {connect} from "react-redux";
import {fetchStream} from "../actions";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.idStream);
  }

  render() {
    // console.log(this.props);
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return <div>{this.props.stream.title}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state, ownProps);
  return {stream: state.streams[ownProps.match.params.idStream]};
};

export default connect(mapStateToProps, {fetchStream})(StreamEdit);
