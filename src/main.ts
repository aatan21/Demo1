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

interface buyable {
  buttontext: string;
  emoji: string;
  price: number;
  newppc: number;
  newpps: number;
  numbought: number;
  agedog: boolean;
}
const buyables: buyable[] = [{
  buttontext: "Buy Chewing Ball 🥎",
  emoji: "🥎",
  price: 10,
  newppc: 0,
  newpps: 0.1,
  numbought: 0,
  agedog: false,
}, {
  buttontext: "Buy Autopetter 🐶🖐️🤖",
  emoji: "🤖",
  price: 100,
  newppc: 0,
  newpps: 1,
  numbought: 0,
  agedog: false,
}, {
  buttontext: "Upgrade Doggie 🐶⬆️",
  emoji: "⬆️",
  price: 1000,
  newppc: 1,
  newpps: 0,
  numbought: 0,
  agedog: true,
}];
const buttons: HTMLElement[] = [];

const upgradelist = document.createElement("p");
upgradelist.textContent = "Improvements: ";

const petspersecond = document.createElement("p");
let pps = 0;
petspersecond.textContent = "Pets Per Second: " + pps.toString();
const petsperclick = document.createElement("p");
let ppc = 1;
petsperclick.textContent = "Pets Per Click: " + ppc.toString();

const bark = new Audio("src/assets/dog-bark.wav");

let counter: number = 3000;
/*let autopetPrice = 100;
let petters = 0;
let chewballPrice = 10;
let balls = 0;
let upgradePrice = 2000;*/
//let multiplier = 1;
//const autopetButton = document.getElementById("buyautopet");
//const chewballButton = document.getElementById("buyball");
//const upgradeButton = document.getElementById("ageUp");
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
  upgradelist,
);

function update() {
  counterElement.textContent = counter.toFixed(1);
  petspersecond.textContent = "Pets Per Second: " + pps.toFixed(1).toString();
}

button.addEventListener("pointerup", () => {
  button.src = stable;
});
button.addEventListener("pointerdown", () => {
  button.src = clicked;
});
button.addEventListener("mousedown", () => {
  counter += ppc;
  bark.play();
  counterElement.textContent = counter.toFixed(1);
});

for (let i = 0; i < buyables.length; i++) {
  const newButton = document.createElement("button");
  newButton.innerText = buyables[i].buttontext + "(" +
    buyables[i].price.toString() + ")";
  newButton.style.backgroundColor = `rgb(163,163,163)`;
  app.append(newButton, document.createElement("br"));
  buttons.push(newButton);

  newButton.addEventListener("click", () => {
    if (counter >= buyables[i].price) {
      counter -= buyables[i].price;
      buyables[i].price += buyables[i].price / 10;
      buyables[i].numbought += 1;
      newButton.innerText = buyables[i].buttontext + "(" +
        buyables[i].price.toFixed(1).toString() + ")";

      pps += buyables[i].newpps;
      ppc += buyables[i].newppc;
      upgradelist.textContent = upgradelist.textContent + buyables[i].emoji;
      petsperclick.textContent = "Pets Per Click: " + ppc.toString();

      if (buyables[i].agedog) {
        stable = adultGeorge;
        button.src = stable;
        clicked = adultGeorgeClicked;
      }
      update();
    }
  });
}

/*autopetButton!.addEventListener("click", () => {
  if (counter >= autopetPrice) {
    counter -= autopetPrice;
    autopetPrice += 10;
    petters += 1;
    autopetButton!.innerText = "Buy Autopetter 🐶🖐️🤖 (" +
      autopetPrice.toString() + ")";

    pps += 1 * multiplier;
    upgradelist.textContent = upgradelist.textContent + "🖐️";
    update();
  }
});

chewballButton!.addEventListener("click", () => {
  if (counter >= chewballPrice) {
    counter -= chewballPrice;
    chewballPrice += 10;
    balls += 1;
    chewballButton!.innerText = "Buy Chewing Ball 🥎 (" +
      chewballPrice.toString() + ")";
    pps += 0.1 * multiplier;
    upgradelist.textContent = upgradelist.textContent + "🥎";
    update();
  }
});

upgradeButton!.addEventListener("click", () => {
  if (counter >= upgradePrice) {
    counter -= upgradePrice;
    multiplier++;
    stable = adultGeorge;
    button.src = stable;
    clicked = adultGeorgeClicked;

    upgradePrice += 1000;
    upgradeButton!.innerText = "Upgrade Doggie 🐶⬆️ (" +
      upgradePrice.toString() + ")";

    ppc += 1;
    petsperclick.textContent = "Pets Per Click: " + ppc.toString();
    upgradelist.textContent = upgradelist.textContent + "⬆️";
    pps *= multiplier;
    update();
  }
});*/

setInterval(function () {
  //counter = counter + (petters * multiplier) + ((balls * 0.1) * multiplier);
  counter += pps;
  counterElement.textContent = counter.toFixed(1);

  for (let i = 0; i < buttons.length; i++) {
    if (counter < buyables[i].price) {
      buttons[i].style.backgroundColor = `rgb(163,163,163)`;
    } else {
      buttons[i].style.backgroundColor = `hsl(133, 59%, 62%)`;
    }
  }

  /*if (counter < autopetPrice) {
    autopetButton!.style.backgroundColor = `rgb(163,163,163)`;
  } else autopetButton!.style.backgroundColor = "blue";

  if (counter < chewballPrice) {
    chewballButton!.style.backgroundColor = `rgb(163, 163, 163)`;
  } else chewballButton!.style.backgroundColor = "blue";

  if (counter < upgradePrice) {
    upgradeButton!.style.backgroundColor = `rgb(163, 163, 163)`;
  } else upgradeButton!.style.backgroundColor = "blue";*/
}, 1000);
