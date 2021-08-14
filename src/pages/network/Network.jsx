import React, { Component } from "react";
import networkData from "../../data/network";
import { Link } from "react-router-dom";

class Network extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <h3 className="text-center">Select the network presenter:</h3>
        <div className="container">
          <div className="row d-flex justify-content-center fullHeightButtonRow mt-5">
            {networkData.map((presenter, key) => {
              if (this.props.match.params.hour === "1") {
                if (presenter.one) {
                  return (
                    <Link
                      key={key}
                      id="black-link-text"
                      to={
                        "/" +
                        this.props.match.params.hour +
                        "/" +
                        presenter.initials
                      }
                      className="selectableButton text-center col-md-3 mx-4"
                    >
                      <div key={key}>{presenter.displayName}</div>
                    </Link>
                  );
                } else {
                  return <></>;
                }
              } else if (this.props.match.params.hour === "6") {
                if (presenter.six) {
                  return (
                    <Link
                      key={key}
                      id="black-link-text"
                      to={
                        "/" +
                        this.props.match.params.hour +
                        "/" +
                        presenter.initials
                      }
                      className="selectableButton text-center col-md-3 mx-4"
                    >
                      <div key={key}>{presenter.displayName}</div>
                    </Link>
                  );
                } else {
                  return <></>;
                }
              } else if (this.props.match.params.hour === "10") {
                if (presenter.ten) {
                  return (
                    <Link
                      key={key}
                      id="black-link-text"
                      to={
                        "/" +
                        this.props.match.params.hour +
                        "/" +
                        presenter.initials
                      }
                      className="selectableButton text-center col-md-3 mx-4"
                    >
                      <div key={key}>{presenter.displayName}</div>
                    </Link>
                  );
                } else {
                  return <></>;
                }
              } else if (this.props.match.params.hour === "0") {
                if (presenter.generic) {
                  return (
                    <Link
                      key={key}
                      id="black-link-text"
                      to={
                        "/" +
                        this.props.match.params.hour +
                        "/" +
                        presenter.initials
                      }
                      className="selectableButton text-center col-md-3 mx-4"
                    >
                      <div key={key}>{presenter.displayName}</div>
                    </Link>
                  );
                } else {
                  return <></>;
                }
              } else {
                return <></>;
              }
            })}

            <div className="col-md-4"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Network;
