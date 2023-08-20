export function makeRectMatrixCalc(canvas) {
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;

  const elementsInLine = Math.ceil(canvas.width / 25);
  const elementsInColumn = Math.ceil(canvas.height / 25);
  const elementsTotal = elementsInLine * elementsInColumn;

  return { elementsTotal, elementsInLine };
}

export function makeCoords(itemsNumber, elementsInLine) {
  const coords = [];
  let currentLinePosition = 0;
  let currentline = 0;

  for (let i = 0; i < itemsNumber; i++) {
    if (currentline === 0 && currentLinePosition === 0) {
      coords.push([0, 0]);
      currentLinePosition++;
    }
    if (currentLinePosition > elementsInLine) {
      currentline += 1;
      currentLinePosition = 0;
    }

    coords.push([currentLinePosition * 30, currentline * 30]);
    currentLinePosition += 1;
  }

  return coords;
}

function makeRandomColor() {
  const colors = ["red", "green", "blue", "yellow", "teal", "black"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  return randomColor;
}

function refillRectangle(posx, posy, ctx) {
  ctx.clearRect(posx, posy, 20, 20);
  ctx.fillStyle = makeRandomColor();
  ctx.strokeStyle = "#be2596";
  ctx.lineWidth = 3;
  ctx.fillRect(posx, posy, 20, 20);
  ctx.strokeRect(posx, posy, 20, 20);
}

export function makeRectangle(posx, posy, ctx) {
  ctx.fillStyle = makeRandomColor();
  ctx.fillRect(posx, posy, 20, 20);
  window.addEventListener("click", function (event) {
    const mouseXPosition = event.clientX;
    const mouseYPosition = event.clientY;
    const isInXfield =
      mouseXPosition >= posx + 8 && mouseXPosition <= posx + 28;
    const isInYfield =
      mouseYPosition >= posy + 8 && mouseYPosition <= posy + 28;

    if (isInXfield && isInYfield) {
      refillRectangle(posx, posy, ctx);
    }
  });
}
