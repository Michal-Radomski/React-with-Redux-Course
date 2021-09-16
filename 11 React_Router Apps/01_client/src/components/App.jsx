import React from "react";
// import {BrowserRouter, Route} from "react-router-dom";
import {Router, Route} from "react-router-dom";

import StreamCreate from "./streams/StreamCreate";
import StreamList from "./streams/StreamList";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import StreamEdit from "./streams/StreamEdit";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Route path="/" exact={true} component={StreamList} />
          <Route path="/streams/delete" component={StreamDelete} />
          <Route path="/streams/new" component={StreamCreate} />
          <Route path="/streams/edit/:idStream" component={StreamEdit} />
          <Route path="/streams/show" component={StreamShow} />
        </div>
      </Router>
    </div>
  );
};

export default App;
