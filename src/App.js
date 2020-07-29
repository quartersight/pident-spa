//React and libraries
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import Topbar from "./components/topbar";
import Basebar from "./components/basebar";

//Pages
import Hour from "./pages/hour";
import Network from "./pages/network";
import Local from "./pages/local";
import Player from "./pages/player";
import Menu from "./pages/menu";
import Docs from "./pages/docs";

class App extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <Topbar />
        <div className="container">
          <Router>
            <Route path="/" component={Hour} exact />
            <Route path="/:hour" component={Network} exact />
            <Route path="/:hour/:network" component={Local} exact />
            <Route path="/:hour/:network/:local" component={Player} exact />
            <Route
              path="/settings/information/engineering/menu"
              component={Menu}
              exact
            />
            <Route
              path="/settings/information/engineering/docs"
              component={Docs}
            />
          </Router>
        </div>
        <Basebar />
      </>
    );
  }
}

export default App;
