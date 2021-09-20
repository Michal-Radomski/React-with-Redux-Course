import React, {Component, Fragment} from "react";
import BookList from "../containers/BookList";
import BookDetail from "../containers/BookDetail";

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <BookList />
        <BookDetail />
      </Fragment>
    );
  }
}
