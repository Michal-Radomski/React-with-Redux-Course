//+ Tajny Klucz Klienta Google: Q-Nwy5GH7GUH9fszzDVelAg8

import React, {Component} from "react";

class GoogleAuth extends Component {
  state = {isSignedIn: null};
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: "539844626186-pks8k8elqeoc29lo2fsv5vp2isuaatn2.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({isSignedIn: this.auth.isSignedIn.get()});
        });
    });
  }
  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I Don't Know If We Are Signed In</div>;
    } else if (this.state.isSignedIn) {
      return <div>I am Signed In</div>;
    } else {
      return <div>I'm Not Signed In</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
