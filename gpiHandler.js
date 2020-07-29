const Gpio = require("onoff").Gpio;
const robot = require("robotjs");

const gpiBongTrigger = new Gpio(14, "in", "rising", { debounceTimeout: 10 });

gpiBongTrigger.watch((e) => {
  if (e) {
    console.error("There was an error:", e);
  }
  robot.keyTap("b");
});

function unexportOnClose() {
  gpiBongTrigger.unexport();
}

process.on("SIGINT", unexportOnClose());
