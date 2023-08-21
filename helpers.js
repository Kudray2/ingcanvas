"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeRectangle = exports.makeCoords = exports.makeRectMatrixCalc = void 0;
function makeRectMatrixCalc(canvas, container) {
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    const elementsInLine = Math.ceil(canvas.width / 25);
    const elementsInColumn = Math.ceil(canvas.height / 25);
    const elementsTotal = elementsInLine * elementsInColumn;
    return { elementsTotal, elementsInLine };
}
exports.makeRectMatrixCalc = makeRectMatrixCalc;
function makeCoords(itemsNumber, elementsInLine) {
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
exports.makeCoords = makeCoords;
function makeRandomColor() {
    const colors = [
        "red",
        "green",
        "blue",
        "yellow",
        "teal",
        "black",
    ];
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
function makeRectangle(posx, posy, ctx) {
    ctx.fillStyle = makeRandomColor();
    ctx.fillRect(posx, posy, 20, 20);
    window.addEventListener("click", function (event) {
        const mouseXPosition = event.clientX;
        const mouseYPosition = event.clientY;
        const isInXfield = mouseXPosition >= posx + 8 && mouseXPosition <= posx + 28;
        const isInYfield = mouseYPosition >= posy + 8 && mouseYPosition <= posy + 28;
        if (isInXfield && isInYfield) {
            refillRectangle(posx, posy, ctx);
        }
    });
}
exports.makeRectangle = makeRectangle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8qKi8qLyIsInNvdXJjZXMiOlsiaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSxTQUFnQixrQkFBa0IsQ0FDaEMsTUFBeUIsRUFDekIsU0FBeUI7SUFFekIsTUFBTSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsV0FBVyxDQUFDO0lBQ3JDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQztJQUV2QyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDcEQsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDdkQsTUFBTSxhQUFhLEdBQUcsY0FBYyxHQUFHLGdCQUFnQixDQUFDO0lBRXhELE9BQU8sRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLENBQUM7QUFDM0MsQ0FBQztBQVpELGdEQVlDO0FBRUQsU0FBZ0IsVUFBVSxDQUN4QixXQUFtQixFQUNuQixjQUFzQjtJQUV0QixNQUFNLE1BQU0sR0FBVyxFQUFFLENBQUM7SUFDMUIsSUFBSSxtQkFBbUIsR0FBRyxDQUFDLENBQUM7SUFDNUIsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBRXBCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDcEMsSUFBSSxXQUFXLEtBQUssQ0FBQyxJQUFJLG1CQUFtQixLQUFLLENBQUMsRUFBRTtZQUNsRCxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsbUJBQW1CLEVBQUUsQ0FBQztTQUN2QjtRQUNELElBQUksbUJBQW1CLEdBQUcsY0FBYyxFQUFFO1lBQ3hDLFdBQVcsSUFBSSxDQUFDLENBQUM7WUFDakIsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO1NBQ3pCO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLG1CQUFtQixHQUFHLEVBQUUsRUFBRSxXQUFXLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxRCxtQkFBbUIsSUFBSSxDQUFDLENBQUM7S0FDMUI7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBdkJELGdDQXVCQztBQUVELFNBQVMsZUFBZTtJQUN0QixNQUFNLE1BQU0sR0FBa0I7UUFDNUIsS0FBSztRQUNMLE9BQU87UUFDUCxNQUFNO1FBQ04sUUFBUTtRQUNSLE1BQU07UUFDTixPQUFPO0tBQ1IsQ0FBQztJQUNGLE1BQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUV0RSxPQUFPLFdBQVcsQ0FBQztBQUNyQixDQUFDO0FBRUQsU0FBUyxlQUFlLENBQ3RCLElBQVksRUFDWixJQUFZLEVBQ1osR0FBNkI7SUFFN0IsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNsQyxHQUFHLENBQUMsU0FBUyxHQUFHLGVBQWUsRUFBRSxDQUFDO0lBQ2xDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO0lBQzVCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ2xCLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDakMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBRUQsU0FBZ0IsYUFBYSxDQUMzQixJQUFZLEVBQ1osSUFBWSxFQUNaLEdBQTZCO0lBRTdCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsZUFBZSxFQUFFLENBQUM7SUFDbEMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNqQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVUsS0FBSztRQUM5QyxNQUFNLGNBQWMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ3JDLE1BQU0sY0FBYyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDckMsTUFBTSxVQUFVLEdBQ2QsY0FBYyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksY0FBYyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7UUFDNUQsTUFBTSxVQUFVLEdBQ2QsY0FBYyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksY0FBYyxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7UUFFNUQsSUFBSSxVQUFVLElBQUksVUFBVSxFQUFFO1lBQzVCLGVBQWUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBbkJELHNDQW1CQyJ9