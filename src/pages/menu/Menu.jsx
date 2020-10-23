import React, { Component } from "react";
import { FiPower } from "react-icons/fi";
import { BsBootstrapReboot } from "react-icons/bs";
import { GoSettings } from "react-icons/go";
import { Link } from "react-router-dom";
const shell = require("shelljs");

class Menu extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  handleRebootController() {
    shell.exec("~/pident-spa/reloadController.sh");
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
