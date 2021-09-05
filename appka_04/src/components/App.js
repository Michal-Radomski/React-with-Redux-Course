import React from "react";
import unsplash from "../API/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = {images: []};
  // -Metoda 1
  // onSearchSubmit(term) {
  //   console.log(term);
  //   axios
  //     .get("https://api.unsplash.com/search/photos", {
  //       params: {query: term},
  //       headers: {
  //         Authorization: "Client-ID 2b98c1afb0aed3b3d94a1866bdc3ac013d21a0c86d236a0fee32355c331c0296",
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response.data.results);
  //     });
  // }

  // - Metoda 2
  onSearchSubmit = async (term) => {
    // console.log(term);
    const response = await unsplash.get("https://api.unsplash.com/search/photos", {
      params: {query: term},
    });
    // console.log(response.data.results);
    // console.log(this);
    this.setState({images: response.data.results});
  };

  render() {
    return (
      <div className="ui container" style={{marginTop: "10px"}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
