import React, { Component } from "react";
import { FaUndo, FaCogs } from "react-icons/fa";

class Topbar extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="container-fluid">
          <p>
            <a href="/">
              <FaUndo style={{ fontSize: 50, paddingTop: 10, float: "left" }} />
            </a>
            <a href="/settings/information/engineering/menu">
              <FaCogs
                style={{ fontSize: 40, paddingTop: 10, float: "right" }}
              />
            </a>
          </p>
        </div>
      </>
    );
  }
}

export default Topbar;
