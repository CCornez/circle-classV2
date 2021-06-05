import randomColor from "randomcolor";
import { randomNumber } from "./RandomNumber";
import { circlesHtmlRef, updateCounter } from "../index";

export default class Circle {
  #w;
  #h;
  #maxW;
  #maxH;
  #x;
  #y;
  #radius;
  #holder;
  #clicked;
  //   #holder;
  constructor(holder) {
    this.#w = window.innerWidth;
    this.#h = window.innerHeight;
    this.#radius = randomNumber(50, 250);
    this.#maxW = this.#w - this.#radius;
    this.#maxH = this.#h - this.#radius;
    this.#x = randomNumber(0, this.#maxW);
    this.#y = randomNumber(0, this.#maxH);
    this.#holder = holder;
    this.htmlRef = this.#generateHTML();
    this.#clicked = 0;
    this.#setStyling();
    this.#addEvent();
  }
  #generateHTML() {
    this.#holder.insertAdjacentHTML("beforeend", `<div class="circle"></div>`);
    return this.#holder.querySelector(".circle:last-child");
  }
  #setStyling() {
    const styles = {
      left: this.#x + "px",
      top: this.#y + "px",
      width: this.#radius + "px",
      height: this.#radius + "px",
      backgroundColor: randomColor(),
      borderColor: randomColor(),
    };
    Object.assign(this.htmlRef.style, styles);
  }
  #addEvent() {
    this.htmlRef.onclick = (e) => {
      e.stopPropagation();
      const colorChange = {
        backgroundColor: randomColor(),
        borderColor: randomColor(),
      };
      Object.assign(this.htmlRef.style, colorChange);
      this.#clicked++;
      if (this.#clicked === 3) {
        this.#deleteCircle(this.htmlRef);
      }
    };
  }
  #deleteCircle(ref) {
    this.#holder.removeChild(ref);
    const index = circlesHtmlRef.findIndex((el) => el === ref);
    circlesHtmlRef.splice(index, 1);
    updateCounter();
  }
}
