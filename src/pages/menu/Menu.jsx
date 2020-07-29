import React, { Component } from "react";
import { FiHelpCircle, FiPower } from "react-icons/fi";
import { GoSettings } from "react-icons/go";
import { Link } from "react-router-dom";

class Menu extends Component {
  constructor(props) {
    super();
    this.state = {};
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
              <Link to="/6">
                <div className="text-center selectableMenuButtonLarge">
                  <h1>
                    <FiHelpCircle />
                  </h1>
                  <p>Documentation</p>
                </div>
              </Link>
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
