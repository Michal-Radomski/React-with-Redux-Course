import React from "react";
import {connect} from "react-redux";
import flv from "flv.js";
import {fetchStream} from "../actions";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const {idStream} = this.props.match.params;
    // console.log(this.videoRef);
    this.props.fetchStream(idStream);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  buildPlayer() {
    if (this.player || !this.props.stream) {
      return;
    }
    const {idStream} = this.props.match.params;
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${idStream}.flv`,
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    //- Przypisanie destrukturyzujące
    const {title, description} = this.props.stream;

    return (
      <div>
        {/* //- Wersja oryginalna
        <h1>{this.props.stream.title}</h1>
        <h5>{this.props.stream.description}</h5> */}
        <video ref={this.videoRef} style={{width: "80%"}} controls={true} />
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {stream: state.streams[ownProps.match.params.idStream]};
};

export default connect(mapStateToProps, {fetchStream})(StreamShow);
