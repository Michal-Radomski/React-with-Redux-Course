import React from "react";
import List from "./List";
import WithLoading from "./WithLoading";

const ListWithLoading = WithLoading(List);
class HOC extends React.Component {
  state = {
    loading: false,
    repos: null,
  };
  componentDidMount() {
    this.setState({loading: true});
    fetch(`https://api.github.com/users/Michal-Radomski/repos`)
      .then((json) => json.json())
      .then((repos) => {
        this.setState({loading: false, repos: repos});
      });
  }
  render() {
    return <ListWithLoading isLoading={this.state.loading} repos={this.state.repos} />;
  }
}
export default HOC;
