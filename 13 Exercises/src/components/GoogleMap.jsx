import React, {Component} from "react";

class GoogleMap extends Component {
  mapRef = React.createRef();
  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(nextProps) {
    this.map.panTo({lat: nextProps.lat, lng: nextProps.lng});
  }

  componentDidMount() {
    this.map = new window.google.maps.Map(this.mapRef.current, {
      center: {lat: this.props.lat, lng: this.props.lng},
      zoom: 8,
    });
  }

  render() {
    return <div style={{width: "600px", height: "400px", margin: "auto"}} ref={this.mapRef}></div>;
  }
}

export default GoogleMap;
