import React, { Component } from "react";
import { FaStop, FaPlay } from "react-icons/fa";
import { BsBootstrapReboot } from "react-icons/bs";

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
          mode: "no-cors",
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
          mode: "no-cors",
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
          mode: "no-cors",
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
              <div
                className="text-center selectableMenuButtonLarge"
                onClick={this.handleStartController}
              >
                <h1>
                  <FaPlay />
                </h1>
                <p>Start controller</p>
              </div>
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
              <div
                className="text-center selectableMenuButtonLarge"
                onClick={this.handleStopController}
              >
                <h1>
                  <FaStop />
                </h1>
                <p>Stop controller</p>
              </div>
            </div>
          </div>
        </div>{" "}
      </>
    );
  }
}

export default Menu;
