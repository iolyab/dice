const range = document.querySelector(".sizeRange");
const dice = document.querySelector(".dice");
const rotateBtn = document.querySelector(".rotateBtn");

let rotation = 0;

range.addEventListener("input", () => {
  const scaleValue = range.value / 100;
  dice.style.transform = `scale(${scaleValue})`;
});

rotateBtn.addEventListener("click", () => {
  rotation += 180;
  dice.style.transform = `rotate(${rotation}deg)`;
});
