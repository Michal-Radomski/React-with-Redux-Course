import React from "react";
// import {BrowserRouter, Route} from "react-router-dom";
import {Router, Route, Switch} from "react-router-dom";

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
          <Switch>
            <Route path="/" exact={true} component={StreamList} />
            <Route path="/streams/delete/:idStream" exact component={StreamDelete} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:idStream" exact component={StreamEdit} />
            <Route path="/streams/:idStream" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
