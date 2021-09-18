import _ from "lodash";
import React from "react";
import {connect} from "react-redux";
import {fetchStream, editStream} from "../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.idStream);
  }

  onSubmit = (formValues) => {
    // console.log(formValues);
    this.props.editStream(this.props.match.params.idStream, formValues);
  };

  render() {
    // console.log(this.props);
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        {/* <StreamForm initialValues={{title: "Edit title", description: "Edit description"}} onSubmit={this.onSubmit} /> */}
        <StreamForm initialValues={_.pick(this.props.stream, "title", "description")} onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state, ownProps);
  return {stream: state.streams[ownProps.match.params.idStream]};
};

export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);
