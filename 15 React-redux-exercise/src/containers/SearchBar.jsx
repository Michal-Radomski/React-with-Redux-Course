import React from "react";

class SearchBar extends React.Component {
  // -Podejście Stare
  // constructor(props) {
  //   super(props);
  //   this.state = {term: ""};
  //   this.onInputChange = this.onInputChange.bind(this);
  // }
  // onInputChange(event) {
  //   console.log(event.target.value);
  //   this.setState({term: event.target.value});
  // }

  onFormSubmit(event) {
    event.preventDefault();
    // We need to fetch weatherData
  }

  // -Podejście Nowe
  state = {term: ""};
  onInputChange = (event) => {
    // console.log(event.target.value);
    // console.log(this.state.term);
    this.setState({term: event.target.value});
  };

  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          placeholder="Get a five-day forecast in your favorite cities..."
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Search
          </button>
        </span>
      </form>
    );
  }
}

export default SearchBar;
