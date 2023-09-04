import {
  makeCoords,
  makeRectangle,
  makeRectMatrixCalc,
  globalListener,
} from "./helpers";
import "./index.css";
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

  window.addEventListener("click", (event: MouseEvent) =>
    globalListener(event, coords, ctx)
  );
}
makeRectangleMatrix();

window.addEventListener("resize", function() {
  console.log("resize is working");
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
  makeRectangleMatrix();
});
