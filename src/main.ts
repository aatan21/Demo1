// Vite turns this import into a production-safe URL. Keep it as a file so
// even this tiny example demonstrates a separately deployed asset.
// @deno-types="./asset-url.d.ts"
//hello i am here
import tileUrl from "./assets/Georgia1.png?no-inline";
import tongueGeorge from "./assets/GeorgiaClick.png?no-inline";

const app = document.querySelector<HTMLElement>("#app")!;

const heading = document.createElement("h1");
heading.textContent = "Pet That Dog!";

const button = document.createElement("img");
button.src = tileUrl;
button.alt = "A black lab puppy";
button.width = 190;
button.height = 230;

const message = document.createElement("p");
message.textContent = "Upgrades: ";

let autopetPrice = 100;
let petters = 0;
let chewballPrice = 10;
let balls = 0;
const autopetButton = document.getElementById("buyautopet");
const chewballButton = document.getElementById("buyball");

let counter: number = 0;
const textBreak = document.createElement("br");
const counterElement = document.createElement("counterElem")!;
counterElement.textContent = counter.toString();
app.append(heading, button, textBreak, "Pets: ", counterElement, message);

button.addEventListener("click", () => {
  counter += 1;
  counterElement.textContent = counter.toString();
  button.addEventListener("pointerup", () => {
    button.src = tileUrl;
  });
  button.addEventListener("pointerdown", () => {
    button.src = tongueGeorge;
  });
  console.log("I have these thingies:", button, counterElement, counter);
});

autopetButton!.addEventListener("click", () => {
  if (counter >= autopetPrice) {
    counter -= autopetPrice;
    counterElement.textContent = counter.toString();
    autopetPrice += 10;
    petters += 1;
    autopetButton!.innerText = "Buy Autopetter 🐶🖐️🤖 (" +
      autopetPrice.toString() + ")";
  }
});

chewballButton!.addEventListener("click", () => {
  if (counter >= chewballPrice) {
    counter -= chewballPrice;
    counterElement.textContent = counter.toString();
    chewballPrice += 1;
    balls += 1;
    chewballButton!.innerText = "Buy Chewing Ball 🥎 (" +
      chewballPrice.toString() + ")";
  }
});
