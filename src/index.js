import "./style.css";
import Circle from "./components/Circle";

const holder = document.getElementById("root");
let counterRef = document.getElementById("counter");
export const circlesHtmlRef = [];
let createCircles = setInterval(addCircle, 200);

function addCircle() {
  let circle = new Circle(holder);
  circlesHtmlRef.push(circle.htmlRef);
  if (circlesHtmlRef.length === 100) {
    total100();
  }
  updateCounter();
}

function pausePlay() {
  if (!createCircles) {
    createCircles = setInterval(addCircle, 200);
  } else {
    clearInterval(createCircles);
    createCircles = false;
  }
}

document.onclick = pausePlay;

export function updateCounter() {
  counterRef.innerHTML = `Total: ${circlesHtmlRef.length}`;
}

function total100() {
  clearInterval(createCircles);
  circlesHtmlRef.forEach((htmlRef) => (htmlRef.style.backgroundColor = "pink"));
  document.onclick = null;
  counterRef.classList.add("done");
}
