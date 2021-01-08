import React, { Component } from "react";
import { FaStop } from "react-icons/fa";

class Basebar extends Component {
  constructor(props) {
    super();
    this.state = {
      audioStyleSelector: "old",
      isBedPlaying: false,
      isBongPlaying: false,
      isStabPlaying: false,
      isLateBedPlaying: false,
      isPreFadePlaying: false,
    };
    this.handleToggleSwitch = this.handleToggleSwitch.bind(this);
    this.handlePlayBed = this.handlePlayBed.bind(this);
    this.handleStopBed = this.handleStopBed.bind(this);
    this.handlePlayBong = this.handlePlayBong.bind(this);
    this.handleStopBong = this.handleStopBong.bind(this);
    this.handlePlayStab = this.handlePlayStab.bind(this);
    this.handleStopStab = this.handleStopStab.bind(this);
    this.handlePlayLateBed = this.handlePlayLateBed.bind(this);
    this.handlePreFadeModal = this.handlePreFadeModal.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleInitGPI = this.handleInitGPI.bind(this);

    this.bedToPlayPath = "/audio/oldBed.wav";
    this.bedToPlayFile = new Audio("/audio/oldBed.wav");
    this.bongToPlayPath = "/audio/oldBong.wav";
    this.bongToPlayFile = new Audio("/audio/oldBong.wav");
    this.stabFile = new Audio("/audio/newSTC.wav");
    this.lateBedFile = new Audio("/audio/newLateBed.wav");


    this.activeButtonColour = "#2bbc23";
  }

  componentDidMount() {
    this.handleInitGPI();
  }

  handleInitGPI() {
    document.addEventListener("keydown", (event) => {
      //"b" plays bong
      if (event.keyCode === 66 && !this.state.isBongPlaying) {
        event.preventDefault();
        this.handlePlayBong();
      }
      //"t" toggles new/old
      if (event.keyCode === 84) {
        event.preventDefault();
        this.handleToggleSwitch();
      }
      //"d" plays bed
      if (event.keyCode === 68 && !this.state.isBedPlaying) {
        event.preventDefault();
        this.handlePlayBed();
      }
      //"s" plays the stab
      if (event.keyCode === 83 && !this.state.isStabPlaying) {
        event.preventDefault();
        this.handlePlayStab();
      }
      //"l" plays the late bed
      if (event.keyCode === 76 && !this.state.isLateBedPlaying) {
        event.preventDefault();
        this.handlePlayLateBed();
      }
      //"h" stops base bar things
      if (event.keyCode === 72) {
        event.preventDefault();
        this.handleStop();
      }
    });
  }

  handleToggleSwitch() {
    this.handleStop();
    if (this.state.audioStyleSelector === "old") {
      this.setState({
        audioStyleSelector: "new",
      });
    } else if (this.state.audioStyleSelector === "new") {
      this.setState({
        audioStyleSelector: "old",
      });
    }
  }

  handlePlayBed() {
    this.handleStopLateBed();
    this.handleStopStab();
    if (!this.state.isBedPlaying) {
      this.bedToPlayPath =
        "/audio/" + this.state.audioStyleSelector + "Bed.wav";
      this.bedToPlayFile = new Audio(this.bedToPlayPath);
      this.bedToPlayFile.play().then(() => {
        this.setState({ isBedPlaying: true });
      });
      this.bedToPlayFile.addEventListener("ended", () => {
        this.setState({
          isBedPlaying: false,
        });
      });
    }
  }

  handleStopBed() {
    this.bedToPlayFile.pause();
    this.setState({
      isBedPlaying: false,
    });
  }

  handlePlayBong() {
    if (!this.state.isBongPlaying) {
      this.bongToPlayPath =
        "/audio/" + this.state.audioStyleSelector + "Bong.wav";
    }
    this.bongToPlayFile = new Audio(this.bongToPlayPath);
    this.bongToPlayFile
      .play()
      .then(() => {
        this.setState({ isBongPlaying: true });
      })
      .catch((err) => console.error(err, this.bongToPlayFile));
    this.bongToPlayFile.addEventListener("ended", () => {
      this.setState({
        isBongPlaying: false,
      });
    });
  }
  handleStopBong() {
    this.bongToPlayFile.pause();
    this.setState({
      isBongPlaying: false,
    });
  }

  handlePlayStab() {
    this.handleStopBed();
    this.handleStopBong();
    if (!this.state.isStabPlaying) {
      this.stabFile = new Audio("/audio/newSTC.wav");
      this.stabFile.play();
      this.setState({
        isStabPlaying: true,
      });
      this.stabFile.addEventListener("ended", () => {
        this.setState({
          isStabPlaying: false,
        });
      });
    }
  }

  handleStopStab() {
    this.stabFile.pause();
    this.setState({ isStabPlaying: false });
  }

  handlePlayLateBed() {
    this.handleStopBed();
    this.handleStopStab();
    if (!this.state.isLateBedPlaying) {
      this.lateBedFile = new Audio("/audio/newLateBed.wav");
      this.lateBedFile.play();
      this.setState({
        isLateBedPlaying: true,
      });
      this.lateBedFile.addEventListener("ended", () => {
        this.setState({
          isLateBedPlaying: false,
        });
      });
    }
  }

  handleStopLateBed() {
    this.lateBedFile.pause();
    this.setState({ isLateBedPlaying: false });
  }

  handlePreFadeModal() {
    if (this.props.openPreFadeModal) {
      this.props.openPreFadeModal();
    }
  }

  handleStop() {
    this.setState({
      isBedPlaying: false,
      isBongPlaying: false,
      isStabPlaying: false,
      isLateBedPlaying: false,
      isPreFadePlaying: false,
    });
    this.handleStopBed();
    this.handleStopBong();
    this.handleStopStab();
    this.handleStopLateBed();
  }


  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="col">
              <div
                className="baseBarToggle"
                onClick={this.handleToggleSwitch}
                style={{
                  backgroundColor:
                    this.state.audioStyleSelector === "old"
                      ? "lightcyan"
                      : "lightgrey",
                }}
              >
                Selected: <br />
                <span id="selectedText">
                  {this.state.audioStyleSelector === "old" ? "Old" : "New"}
                </span>
              </div>
            </div>
            <div className="col">
              <div
                className="baseBarButton"
                onClick={this.handlePlayBed}
                style={{
                  backgroundColor: this.state.isBedPlaying
                    ? this.activeButtonColour
                    : "",
                }}
              >
                Bed
              </div>
            </div>
            <div className="col">
              <div
                className=" baseBarButton"
                onClick={this.handlePlayBong}
                style={{
                  backgroundColor: this.state.isBongPlaying
                    ? this.activeButtonColour
                    : "",
                }}
              >
                Bong
              </div>
            </div>

            <div className="col">
              <div
                className="col baseBarButton"
                onClick={this.handlePlayStab}
                style={{
                  backgroundColor: this.state.isStabPlaying
                    ? this.activeButtonColour
                    : "",
                }}
              >
                STC
              </div>
            </div>

            <div className="col">
              <div className="baseBarButton" onClick={this.handlePreFadeModal}>
                Prefade
              </div>
            </div>

            <div className="col">
              <div
                className="baseBarButton"
                onClick={this.handlePlayLateBed}
                style={{
                  backgroundColor: this.state.isLateBedPlaying
                    ? this.activeButtonColour
                    : "",
                }}
              >
                Late
              </div>
            </div>

            <div className="col">
              <div className="baseBarStop" onClick={this.handleStop}>
                <FaStop className="stopButton" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Basebar;
