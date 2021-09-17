import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import {fetchStream, deleteStream} from "../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    // console.log(this.props);
    this.props.fetchStream(this.props.match.params.idStream);
  }

  renderActions() {
    //- Oryginale podejście
    // const idStream = this.props.match.params.idStream
    //- ES2015 - destrukturyzacja
    const {idStream} = this.props.match.params;
    return (
      <React.Fragment>
        <button onClick={() => this.props.deleteStream(idStream)} className="ui negative button">
          Delete
        </button>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delete: ${this.props.stream.title}?`;
  }

  render() {
    return (
      <Modal
        title="Delete the Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {stream: state.streams[ownProps.match.params.idStream]};
};

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);
