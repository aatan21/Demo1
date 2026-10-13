// Vite turns this import into a production-safe URL. Keep it as a file so
// even this tiny example demonstrates a separately deployed asset.
// @deno-types="./asset-url.d.ts"
//hello i am here
import puppyGeorge from "./assets/Georgia1.png?no-inline";
import tongueGeorge from "./assets/GeorgiaClick.png?no-inline";
import adultGeorge from "./assets/OlderGeorgia.png?no-inline";
import toyBall from "./assets/chewBall.webp?no-inline";
import adultGeorgeClicked from "./assets/GeorgiaClick2.png?no-inline";

const app = document.querySelector<HTMLElement>("#app")!;

const heading = document.createElement("h1");
heading.textContent = "Pet That Dog!";

const button = document.createElement("img");
button.src = puppyGeorge;
button.alt = "A black lab puppy";
button.width = 190;
button.height = 230;

let stable = puppyGeorge;
let clicked = tongueGeorge;

const message = document.createElement("p");
message.textContent = "Upgrades: ";

let autopetPrice = 100;
let petters = 0;
let chewballPrice = 10;
let balls = 0;
let upgradePrice = 2000;
let multiplier = 1;
const autopetButton = document.getElementById("buyautopet");
const chewballButton = document.getElementById("buyball");
const upgradeButton = document.getElementById("ageUp");

let counter: number = 3000;
const textBreak = document.createElement("br");
const counterElement = document.createElement("counterElem")!;
counterElement.textContent = counter.toFixed(1);
app.append(heading, button, textBreak, "Pets: ", counterElement, message);

button.addEventListener("pointerup", () => {
  button.src = stable;
});
button.addEventListener("pointerdown", () => {
  button.src = clicked;
});
button.addEventListener("click", () => {
  counter += 1 * multiplier;
  counterElement.textContent = counter.toFixed(1);

  console.log("I have these thingies:", button, counterElement, counter);
});

autopetButton!.addEventListener("click", () => {
  if (counter >= autopetPrice) {
    counter -= autopetPrice;
    counterElement.textContent = counter.toFixed(1);
    autopetPrice += 10;
    petters += 1;
    autopetButton!.innerText = "Buy Autopetter 🐶🖐️🤖 (" +
      autopetPrice.toString() + ")";
  }
});

chewballButton!.addEventListener("click", () => {
  if (counter >= chewballPrice) {
    counter -= chewballPrice;
    counterElement.textContent = counter.toFixed(1);
    chewballPrice += 1;
    balls += 1;
    chewballButton!.innerText = "Buy Chewing Ball 🥎 (" +
      chewballPrice.toString() + ")";
  }
});

upgradeButton!.addEventListener("click", () => {
  if (counter >= upgradePrice) {
    counter -= upgradePrice;
    counterElement.textContent = counter.toFixed(1);
    multiplier++;
    stable = adultGeorge;
    button.src = stable;
    clicked = adultGeorgeClicked;
  }
});

setInterval(function () {
  counter = counter + (petters * multiplier) + ((balls * 0.1) * multiplier);
  counterElement.textContent = counter.toFixed(1);
}, 1000);
