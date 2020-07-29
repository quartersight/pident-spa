//React and libraries
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import Topbar from "./components/topbar";
import Basebar from "./components/basebar";
import Prefade from "./components/prefade";

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
    this.state = {
      showModal: false,
    };
    this.openPreFadeModal = this.openPreFadeModal.bind(this);
    this.closePreFadeModal = this.closePreFadeModal.bind(this);
  }

  openPreFadeModal() {
    console.log("It worked!");
    this.setState({ showModal: true });
  }
  closePreFadeModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <>
        <Topbar />
        {this.state.showModal ? (
          <Prefade closePreFadeModal={this.closePreFadeModal} />
        ) : (
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
        )}
        <Basebar openPreFadeModal={this.openPreFadeModal} />
      </>
    );
  }
}

export default App;
