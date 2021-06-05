import randomColor from "randomcolor";
import { randomNumber } from "./RandomNumber";

export default class Circle {
  #w;
  #h;
  #maxW;
  #maxH;
  #x;
  #y;
  #radius;
  #bgc;
  #borderColor;
  #holder;
  //   #holder;
  constructor(holder) {
    this.#w = window.innerWidth;
    this.#h = window.innerHeight;
    this.#radius = randomNumber(50, 250);
    console.log(this.#h);
    console.log(this.#w);
    this.#maxW = this.#w - this.#radius;
    this.#maxH = this.#h - this.#radius;
    this.#x = randomNumber(0, this.#maxW);
    this.#y = randomNumber(0, this.#maxH);
    this.#bgc = randomColor();
    this.#borderColor = randomColor();
    this.#holder = holder;
    this.htmlRef = this.#generateHTML();
    this.#setStyling();
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
      backgroundColor: this.#bgc,
      borderColor: this.#borderColor,
    };
    Object.assign(this.htmlRef.style, styles);
  }
}
