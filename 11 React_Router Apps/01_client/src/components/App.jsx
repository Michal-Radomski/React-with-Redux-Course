import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import StreamCreate from "./streams/StreamCreate";
import StreamList from "./streams/StreamList";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import StreamEdit from "./streams/StreamEdit";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact={true} component={StreamList} />
          <Route path="/stream/delete" component={StreamDelete} />
          <Route path="/stream/new" component={StreamCreate} />
          <Route path="/stream/edit" component={StreamEdit} />
          <Route path="/stream/show" component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
