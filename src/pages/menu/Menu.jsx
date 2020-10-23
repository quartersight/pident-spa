import React, { Component } from "react";
import { FiPower } from "react-icons/fi";
import { BsBootstrapReboot } from "react-icons/bs";
import { GoSettings } from "react-icons/go";
import { Link } from "react-router-dom";
import { exec } from "child_process";

class Menu extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  handleRebootController() {
    exec("killall streamdeck", (error, stdout, stderr) => {
      if (error) {
        console.log("Error:", error);
      }
      if (stderr) {
        console.log("Error", stderr);
      }
      console.log(stdout);
    }).then(
      exec("streamdeeck", (errorTwo, stdoutTwo, stderrTwo) => {
        if (errorTwo) {
          console.log("Error:", errorTwo);
        }
        if (stderrTwo) {
          console.log("Error", stderrTwo);
        }
        console.log(stdoutTwo);
      })
    );
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
                    <GoSettings />
                  </h1>
                  <p>Audio mixer</p>
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
                    <FiPower />
                  </h1>
                  <p>Power</p>
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
