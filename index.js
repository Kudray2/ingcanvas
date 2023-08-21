define("helpers", ["require", "exports"], function (require, exports) {
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
});
define("index", ["require", "exports", "helpers"], function (require, exports, helpers_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    window.onscroll = () => window.scroll(0, 0);
    const canvas = document.getElementById("rootCanvas");
    const container = document.getElementById("container");
    const ctx = canvas.getContext("2d");
    function makeRectangleMatrix() {
        const { elementsTotal, elementsInLine } = (0, helpers_1.makeRectMatrixCalc)(canvas, container);
        const coords = (0, helpers_1.makeCoords)(elementsTotal, elementsInLine);
        coords.forEach((coord) => {
            (0, helpers_1.makeRectangle)(coord[0], coord[1], ctx);
        });
        if (coords.length < 1e3) {
            alert("Квадратов мало. Растяните окно браузера");
        }
        else {
            console.log("всего квадратов: ", coords.length);
        }
    }
    makeRectangleMatrix();
    window.addEventListener("resize", function () {
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        makeRectangleMatrix();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi9zcmMvKiovKi8iLCJzb3VyY2VzIjpbImhlbHBlcnMudHMiLCJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBSUEsU0FBZ0Isa0JBQWtCLENBQ2hDLE1BQXlCLEVBQ3pCLFNBQXlCO1FBRXpCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxNQUFNLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUM7UUFFdkMsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sYUFBYSxHQUFHLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQztRQUV4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFaRCxnREFZQztJQUVELFNBQWdCLFVBQVUsQ0FDeEIsV0FBbUIsRUFDbkIsY0FBc0I7UUFFdEIsTUFBTSxNQUFNLEdBQVcsRUFBRSxDQUFDO1FBQzFCLElBQUksbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQztRQUVwQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLElBQUksV0FBVyxLQUFLLENBQUMsSUFBSSxtQkFBbUIsS0FBSyxDQUFDLEVBQUU7Z0JBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEIsbUJBQW1CLEVBQUUsQ0FBQzthQUN2QjtZQUNELElBQUksbUJBQW1CLEdBQUcsY0FBYyxFQUFFO2dC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