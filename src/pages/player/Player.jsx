import React, { Component } from "react";

// var file = new Audio("./test.wav");

class Player extends Component {
  constructor(props) {
    super();
    this.state = {
      hour: "",
      network: "",
      local: "",
      loadedIdent: null,
      isPlaying: false,
      timeRemaining: null,
    };
    this.handleInitialStateSet = this.handleInitialStateSet.bind(this);
    this.handlePlayIdent = this.handlePlayIdent.bind(this);
    this.handleStopIdent = this.handleStopIdent.bind(this);
    this.handleInitIdentGPI = this.handleInitIdentGPI.bind(this);
  }

  componentDidMount() {
    this.handleInitialStateSet();
    this.file.load();
    this.file.addEventListener("loadedmetadata", () => {
      let newTimeSet = this.msToTime(this.file.duration * 1000);
      document.querySelector("#countdown-text").innerHTML = newTimeSet;
    });
    this.file.addEventListener("ended", () => {
      this.setState({ isPlaying: false });
      let newTimeSet = this.msToTime(this.file.duration * 1000);
      document.querySelector("#countdown-text").innerHTML = newTimeSet;
    });
    this.handleInitIdentGPI();
  }

  handleInitIdentGPI() {
    //GPI Triggers
    document.addEventListener("keydown", (event) => {
      //"i" key triggers ident. can be triggered from either gpi (using gpiHandler.js), which is not yet set up on the vision mixer, or from elgato streamdeck
      if (event.key === "i" && this.state.loadedIdent !== null) {
        event.preventDefault();
        this.handlePlayIdent();
      }
      //"p" stops ident
      if (event.key === "p") {
        event.preventDefault();
        this.handleStopIdent();
      }
    });
  }

  handleInitialStateSet() {
    this.setState({
      hour: this.props.match.params.hour,
      network: this.props.match.params.network,
      local: this.props.match.params.local,
      loadedIdent:
        "news-" +
        this.props.match.params.hour +
        "-" +
        this.props.match.params.network +
        "-" +
        this.props.match.params.local +
        ".wav",
    });
    this.file = new Audio(
      "/audio/idents/" +
        "news-" +
        this.props.match.params.hour +
        "-" +
        this.props.match.params.network +
        "-" +
        this.props.match.params.local +
        ".wav"
    );
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

  handlePlayIdent() {
    if (!this.state.isPlaying) {
      var playFile = this.file.play();
      playFile
        .then((_) => {
          this.setState({
            isPlaying: true,
          });
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      var t = this.file.duration * 1000;
      this.setState({ timeRemaining: t.toFixed(0) });
      this.identRemainingDurationTimer = setInterval(() => {
        if (this.state.timeRemaining >= 0) {
          if (this.state.isPlaying) {
            this.setState({ timeRemaining: this.state.timeRemaining - 10 });
            let readableTime = this.msToTime(this.state.timeRemaining);
            document.querySelector("#countdown-text").innerHTML = readableTime;
          }
        }
      }, 10);
    }
  }

  handleStopIdent() {
    this.file.pause();
    this.file.currentTime = 0;
    this.setState({
      isPlaying: false,
    });
    clearInterval(this.identRemainingDurationTimer);
    let newTimeSet = this.msToTime(this.file.duration * 1000);
    document.querySelector("#countdown-text").innerHTML = newTimeSet;
  }

  render() {
    return (
      <>
        <h3 className="text-center">Ident playout</h3>
        <div className="container">
          <div className="row d-flex justify-content-center fullHeightButtonRow mt-5">
            <div className="col timerColumn">
              <h3
                className="border border-dark text-center text-monospace"
                id="countdown-text"
              >
                00:00.00
              </h3>
              <h4
                className="border border-dark text-center mt-4"
                id="countdown-text"
              >
                Loaded ident: <br />
                {this.state.loadedIdent}
              </h4>
            </div>
            <div className="col playColumn">
              <div
                onClick={this.handlePlayIdent}
                className="btn btn-large btn-primary"
                id="playButton"
                style={{
                  backgroundColor: this.state.isPlaying
                    ? "#2dc422"
                    : "#1E8317",
                }}
              >
                <div className="play-icon"></div>
              </div>
            </div>
            <div className="col recueColumn">
              <div
                onClick={this.handleStopIdent}
                className="btn btn-large btn-primary mx-4"
                id="recueButton"
                style={{
                  backgroundColor: this.state.isPlaying ? "#BE3434"
                  : "#822424",
                  color: this.state.isPlaying ? "white" : "gray",
                }}
              >
                <div className="stop-icon"></div>
                <div className="recue-icon"></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Player;
