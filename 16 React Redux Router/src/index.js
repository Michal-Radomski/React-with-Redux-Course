import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import promise from "redux-promise";

import reducers from "./reducers";
import PostsIndex from "./components/PostsIndex";
import PostNew from "./components/PostNew";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={PostsIndex} exact={true} />
        <Route path="/posts/new" component={PostNew} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.querySelector("#root")
);
