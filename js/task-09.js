function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");
const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('span.color');

buttonEl.addEventListener('click', changeBodyBackgroundColor);

function changeBodyBackgroundColor() {
  const backgroungColorRandomVal = getRandomHexColor();
  document.body.style.backgroundColor = backgroungColorRandomVal;
  spanEl.textContent = backgroungColorRandomVal;
}