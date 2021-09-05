import React, {Component} from "react";

// -Uncontrolled Element
// class SearchBar extends Component {
//   onInputChange(event) {
//     console.log(event.target.value);
//   }

//   render() {
//     return (
//       <div className="ui segment">
//         <form className="ui form">
//           <div className="field">
//             <label>Image Search</label>
//             <input type="text" onChange={this.onInputChange} />
//             {/* Second method below -> onInputChange() in not nesesery */}
//             {/* <input type="text" onChange={(e) => console.log(e.target.value)} /> */}
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// -Controlled Element
class SearchBar extends Component {
  state = {term: ""};

  onFormSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state.term);
    this.props.onSubmit(this.state.term);
  };
  // - DOBRA METODA
  // onFormSubmit(event) {
  //   event.preventDefault();
  //   console.log(this.state.term);
  // }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          {/* // - DOBRA METODA */}
          {/* <form className="ui form" onSubmit={(event) => this.onFormSubmit(event)}> */}
          <div className="field">
            <label>Image Search</label>
            <input type="text" value={this.state.term} onChange={(e) => this.setState({term: e.target.value})} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
