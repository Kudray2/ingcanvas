import {
  makeCoords,
  makeRectangle,
  makeRectMatrixCalc,
} from "./app/helpers/helpers.js";

window.onscroll = () => window.scroll(0, 0);

const canvas = document.getElementById("rootCanvas");
const container = document.getElementById("container");
const ctx = canvas.getContext("2d");

function makeRectangleMatrix() {
  const { elementsTotal, elementsInLine } = makeRectMatrixCalc(canvas);
  const coords = makeCoords(elementsTotal, elementsInLine);
  coords.forEach((coord) => {
    makeRectangle(coord[0], coord[1], ctx);
  });

  if (coords.length < 1e3) {
    alert("Квадратов мало. Растяните окно браузера");
  } else {
    console.log("всего квадратов: ", coords.length);
  }
}
makeRectangleMatrix();

window.addEventListener("resize", function() {
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
  makeRectangleMatrix();
});

// TODO сделать убирание рамки через 25 сек
