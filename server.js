const express = require("express");
const app = express();

const robot = require("robotjs");

const shell = require("shelljs");

const port = 8000;

app.post("/api/playbong", (req, res) => {
  //   robot.keyTap("b");
  res.send("Bong.");
  console.log("Bong played!");
  pressKey();
});

app.post("/api/reloadController", (req, res) => {
  res.status(200).send("Rebooting");
  shell.exec("killall streamdeck && gnome-terminal -e 'streamdeck'");
  shell.exec(
    "killall chrome && gnome-terminal -e 'google-chrome --kiosk --check-for-update-interval=2592000 --app=http://localhost:5000'"
  );
  console.log("Rebooting");
});

app.post("/api/stopController", (req, res) => {
  res.status(200).send("Stopped streamdeck");
  shell.exec("killall streamdeck");
  console.log("Stopped.");
});

app.post("/api/startController", (req, res) => {
  res.status(200).send("Started streamdeck");
  shell.exec("gnome-terminal -e 'streamdeck'");
  shell.exec("killall chrome");
  shell.exec("gnome-terminal -e 'google-chrome --kiosk --check-for-update-interval=2592000 --app=http://localhost:5000'");
  console.log("Started.");
});

const pressKey = () => robot.keyTap("b");

app.listen(port, () => console.log("Listening on port", port));
