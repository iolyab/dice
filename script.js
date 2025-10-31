const range = document.querySelector(".sizeRange");
const dice = document.querySelector(".dice");
const rotateBtn = document.querySelector(".rotateBtn");

let rotation = 0;
let scaleValue = 1;

range.addEventListener("input", () => {
  scaleValue = range.value / 100;
  dice.style.transform = `scale(${scaleValue}) rotate(${rotation}deg)`;
});

rotateBtn.addEventListener("click", () => {
  rotation += 180;
  dice.style.transform = `scale(${scaleValue}) rotate(${rotation}deg)`;
});
