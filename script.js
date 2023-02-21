// alert("Hello world!");
// console.log("Hello world!");
// $0 er det valgte element i dev tools
// $0.classList.add("move");

window.addEventListener("load", start);

function start() {
  console.log("start");
  document.querySelector("#square").addEventListener("click", tiltedSquare);
  document.querySelector("#circle").addEventListener("click", moveResizeCircle);
}

function normalCircle() {
  document.querySelector("#circle").classList.remove("move");
  document.querySelector("#circle").classList.remove("size");
}

function moveResizeCircle() {
  console.log("moveResizeCircle");
  document
    .querySelector("#circle")
    .removeEventListener("click", moveResizeCircle);
  normalSquare();
  document.querySelector("#square").addEventListener("click", tiltedSquare);
  document.querySelector("#circle").classList.add("move");
  document.querySelector("#circle").classList.add("size");
}

function normalSquare() {
  document.querySelector("#square").classList.remove("tilt");
}

function tiltedSquare() {
  console.log("tiltedSquare");
  document.querySelector("#square").removeEventListener("click", tiltedSquare);
  normalCircle();
  document.querySelector("#circle").addEventListener("click", moveResizeCircle);
  document.querySelector("#square").classList.add("tilt");
}
