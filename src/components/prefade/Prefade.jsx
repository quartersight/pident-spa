import React, { Component } from "react";
import { FaTimes, FaStop } from "react-icons/fa";

class Prefade extends Component {
  constructor(props) {
    super();
    this.state = {
      isPreFadePlaying: false,
      timeRemaining: "",
    };
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handlePlayPreFade = this.handlePlayPreFade.bind(this);
    this.handleStopPrefade = this.handleStopPrefade.bind(this);
  }

  componentDidMount() {
    // this.prefade20 = new Audio("/audio/preFade20.wav");
    // this.prefade30 = new Audio("/audio/preFade30.wav");
    // this.prefade60 = new Audio("/audio/preFade60.wav");
    // this.prefade = new Audio("/audio/preFade60.wav");
    // this.prefade.addEventListener("loadedmetadata", () => {
    //   let newTimeSet = this.msToTime(this.prefade.duration * 1000);
    //   document.querySelector("#countdown").innerHTML = newTimeSet;
    // });
    // this.prefade.addEventListener("ended", () => {
    //   this.setState({ isPreFadePlaying: false });
    //   let newTimeSet = this.msToTime(this.prefade.duration * 1000);
    //   document.querySelector("#countdown").innerHTML = newTimeSet;
    // });
  }

  handleCloseModal() {
    this.handleStopPrefade();
    if (this.props.closePreFadeModal) {
      this.props.closePreFadeModal();
    }
  }

  msToTime(s) {
    function pad(n, z) {
      z = z || 2;
      return ("00" + n).slice(-z);
    }
    var ms = s % 1000;
    s = (s - ms) / 1000;
    var secs = s % 60;
    s = (s - secs) / 60;
    var mins = s % 60;
    return pad(mins) + ":" + pad(secs) + "." + pad(ms, 3);
  }

  handlePlayPreFade(dur) {
    if (!this.state.isPreFadePlaying) {
      if (dur === "20") {
        this.prefade = new Audio("/audio/preFade20.wav");
      }
      if (dur === "30") {
        this.prefade = new Audio("/audio/preFade30.wav");
      }
      if (dur === "60") {
        this.prefade = new Audio("/audio/preFade60.wav");
      }
      this.prefade.addEventListener("loadedmetadata", () => {
        this.setState({ timeRemaining: this.prefade.duration * 1000 });
      });
      this.prefade
        .play()
        .then(() => {
          this.setState({ isPreFadePlaying: true });
        })
        .catch((e) => console.error("Error:", e));
    }
  }

  handleStopPrefade() {
    if (this.state.isPreFadePlaying) {
      this.prefade.pause();
      this.prefade.currentTime = 0;
      this.setState({ isPreFadePlaying: false });
    }
  }

  render() {
    return (
      <>
        <h3 className="text-center">Select a prefade:</h3>
        <div className="container">
          <div className="row d-flex justify-content-center fullHeightButtonRow mt-5">
            <div className="col">
              <div
                className="selectableButton text-center selectableButtonLarge"
                onClick={() => this.handlePlayPreFade("20")}
              >
                20
              </div>
            </div>
            <div className="col">
              <div
                className="selectableButton text-center selectableButtonLarge"
                onClick={() => this.handlePlayPreFade("30")}
              >
                30
              </div>
              <div
                className="selectableButton text-center mt-5"
                onClick={this.handleCloseModal}
              >
                <FaTimes />
                <br />
                <span id="prefadeModalClose">Close</span>
              </div>
            </div>
            <div className="col">
              <div
                className="selectableButton text-center selectableButtonLarge"
                onClick={() => this.handlePlayPreFade("60")}
              >
                60
              </div>
              <div
                className="w-50 text-center mt-5 baseBarStop"
                onClick={this.handleStopPrefade}
              >
                <FaStop className="stopButton" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Prefade;
