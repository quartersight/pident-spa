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
  shell.exec("~/pident-spa/reloadController.sh");
  console.log("Rebooting");
  res.send("Rebooting");
});

const pressKey = () => robot.keyTap("b");

app.listen(port, () => console.log("Listening on port", port));
