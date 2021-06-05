import "./style.css";
import Circle from "./components/Circle";

const holder = document.getElementById("root");
const circlesHtmlRef = [];

function addCircle() {
  let circle = new Circle(holder);
  circlesHtmlRef.push(circle.htmlRef);
  if (circlesHtmlRef.length >= 100) {
    clearInterval(createCircles);
    circlesHtmlRef.forEach(
      (htmlRef) => (htmlRef.style.backgroundColor = "pink")
    );
  }
}

const createCircles = setInterval(addCircle, 200);
