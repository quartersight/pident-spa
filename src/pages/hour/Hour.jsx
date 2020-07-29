import React, { Component } from "react";
import { Link } from "react-router-dom";

class Hour extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <h3 className="text-center">Select the hour:</h3>
        <div className="container">
          <div className="row d-flex justify-content-center fullHeightButtonRow mt-5">
            <div className="col">
              <Link to="/1">
                <div className="selectableButton text-center selectableButtonLarge">
                  One
                </div>
              </Link>
            </div>
            <div className="col">
              <Link to="/6">
                <div className="selectableButton text-center selectableButtonLarge">
                  Six
                </div>
              </Link>
            </div>
            <div className="col">
              <Link to="/10">
                <div className="selectableButton text-center selectableButtonLarge">
                  Ten
                </div>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Hour;
