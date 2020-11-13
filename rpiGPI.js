const Gpio = require("onoff").Gpio;
const fetch = require("node-fetch");

const gpiTrigger = new Gpio(17, "in", "rising", { debounceTimeout: 10 });

const ipAddress = "192.168.1.132"

const apiURL = "http://" + ipAddress + ":8000/api/playbong";

const requestBong = async () => {
  try {
    const response = await fetch(apiURL, {
      method: "POST",
    });
    if (response.ok) {
      let text = await response.text();
      console.log(text);
    }
  } catch (e) {
    console.log("there was an error:", e);
  }
};

requestBong();

gpiTrigger.watch((e) => {
  if (e) {
    throw e;
  }
  requestBong();
});

// document.addEventListener("keydown", (event) => {
//   event.preventDefault();
//   if (event === 66) {
//     requestBong();
//   }
// });

process.on("SIGNIT", gpiTrigger.unExport());
