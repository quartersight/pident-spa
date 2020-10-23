import React, { Component } from "react";
import { FaStop } from "react-icons/fa";
import { BsBootstrapReboot } from "react-icons/bs";
import { VscDebugStart } from "react-icons/vsc";
import { Link } from "react-router-dom";

class Menu extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  handleRebootController() {
    const apiURL = "http://localhost:8000/api/reloadController";

    const restartServer = async () => {
      try {
        const response = await fetch(apiURL, {
          method: "POST",
        });
        if (response.ok) {
          let text = await response.text();
          console.log(text);
        }
      } catch (e) {
        console.log("there was an error:", e);
      }
    };

    restartServer();
  }

  handleStartController() {
    const apiURL = "http://localhost:8000/api/startController";

    const startServer = async () => {
      try {
        const response = await fetch(apiURL, {
          method: "POST",
        });
        if (response.ok) {
          let text = await response.text();
          console.log(text);
        }
      } catch (e) {
        console.log("there was an error:", e);
      }
    };

    startServer();
  }

  handleStopController() {
    const apiURL = "http://localhost:8000/api/stopController";

    const stopServer = async () => {
      try {
        const response = await fetch(apiURL, {
          method: "POST",
        });
        if (response.ok) {
          let text = await response.text();
          console.log(text);
        }
      } catch (e) {
        console.log("there was an error:", e);
      }
    };

    stopServer();
  }

  render() {
    return (
      <>
        <h3 className="text-center">Menu:</h3>
        <div className="container">
          <div className="row d-flex justify-content-center fullHeightButtonRow mt-5">
            <div className="col">
              <Link to="/1">
                <div className="text-center selectableMenuButtonLarge">
                  <h1>
                    <VscDebugStart />
                  </h1>
                  <p>Start controller</p>
                </div>
              </Link>
            </div>
            <div className="col">
              <div
                className="text-center selectableMenuButtonLarge"
                onClick={this.handleRebootController}
              >
                <h1>
                  <BsBootstrapReboot />
                </h1>
                <p>Reload controller</p>
              </div>
            </div>
            <div className="col">
              <Link to="/10">
                <div className="text-center selectableMenuButtonLarge">
                  <h1>
                    <FaStop />
                  </h1>
                  <p>Stop controller</p>
                </div>
              </Link>
            </div>
          </div>
        </div>{" "}
      </>
    );
  }
}

export default Menu;
