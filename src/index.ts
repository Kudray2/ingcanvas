import { makeCoords, makeRectangle, makeRectMatrixCalc } from "./helpers";

window.onscroll = () => window.scroll(0, 0);

const canvas = document.getElementById("rootCanvas") as HTMLCanvasElement;
const container = document.getElementById("container") as HTMLDivElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

function makeRectangleMatrix() {
  const { elementsTotal, elementsInLine } = makeRectMatrixCalc(
    canvas,
    container
  );
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

window.addEventListener("resize", function () {
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
  makeRectangleMatrix();
});
