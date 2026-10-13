// Vite turns this import into a production-safe URL. Keep it as a file so
// even this tiny example demonstrates a separately deployed asset.
// @deno-types="./asset-url.d.ts"
//hello i am here
import puppyGeorge from "./assets/Georgia1.png?no-inline";
import tongueGeorge from "./assets/GeorgiaClick.png?no-inline";
import adultGeorge from "./assets/OlderGeorgia.png?no-inline";
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

const upgrades = document.createElement("p");
upgrades.textContent = "Improvements: ";

const petspersecond = document.createElement("p");
let pps = 0;
petspersecond.textContent = "Pets Per Second: " + pps.toString();
const petsperclick = document.createElement("p");
let ppc = 1;
petsperclick.textContent = "Pets Per Click: " + ppc.toString();

const bark = new Audio("src/assets/dog-bark.wav");

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
app.append(
  heading,
  button,
  textBreak,
  "Pets: ",
  counterElement,
  petspersecond,
  petsperclick,
  upgrades,
);

button.addEventListener("pointerup", () => {
  button.src = stable;
});
button.addEventListener("pointerdown", () => {
  button.src = clicked;
});
button.addEventListener("mousedown", () => {
  counter += 1 * multiplier;
  bark.play();
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

    pps += 1 * multiplier;
    petspersecond.textContent = "Pets Per Second: " + pps.toFixed(1).toString();
    upgrades.textContent = upgrades.textContent + "🖐️";
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

    pps += 0.1 * multiplier;
    petspersecond.textContent = "Pets Per Second: " + pps.toFixed(1).toString();
    upgrades.textContent = upgrades.textContent + "🥎";
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

    upgradePrice += 1000;
    upgradeButton!.innerText = "Upgrade Doggie 🐶⬆️ (" +
      upgradePrice.toString() + ")";

    ppc += 1;
    petsperclick.textContent = "Pets Per Click: " + ppc.toString();
    upgrades.textContent = upgrades.textContent + "⬆️";
    pps *= multiplier;
    petspersecond.textContent = "Pets Per Second: " + pps.toFixed(1).toString();
  }
});

setInterval(function () {
  counter = counter + (petters * multiplier) + ((balls * 0.1) * multiplier);
  counterElement.textContent = counter.toFixed(1);
}, 1000);
