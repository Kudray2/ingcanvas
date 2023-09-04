define("helpers", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.globalListener = exports.makeRectangle = exports.makeCoords = exports.makeRectMatrixCalc = void 0;
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
    }
    exports.makeRectangle = makeRectangle;
    function globalListener(event, coords, ctx) {
        console.log("globalListener ==> ");
        const mouseXPosition = event.clientX;
        const mouseYPosition = event.clientY;
        for (let coord of coords) {
            if (mouseXPosition >= coord[0] + 8 &&
                mouseXPosition <= coord[0] + 28 &&
                mouseYPosition >= coord[1] + 8 &&
                mouseYPosition <= coord[1] + 28) {
                console.log("hit!");
                refillRectangle(coord[0], coord[1], ctx);
            }
        }
    }
    exports.globalListener = globalListener;
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
        window.addEventListener("click", (event) => (0, helpers_1.globalListener)(event, coords, ctx));
    }
    makeRectangleMatrix();
    window.addEventListener("resize", function () {
        console.log("resize is working");
        canvas.width = container.clientWidth;
        canvas.height = container.clientHeight;
        makeRectangleMatrix();
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi9zcmMvKiovKi8iLCJzb3VyY2VzIjpbImhlbHBlcnMudHMiLCJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBSUEsU0FBZ0Isa0JBQWtCLENBQ2hDLE1BQXlCLEVBQ3pCLFNBQXlCO1FBRXpCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQztRQUNyQyxNQUFNLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxZQUFZLENBQUM7UUFFdkMsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sYUFBYSxHQUFHLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQztRQUV4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFaRCxnREFZQztJQUVELFNBQWdCLFVBQVUsQ0FDeEIsV0FBbUIsRUFDbkIsY0FBc0I7UUFFdEIsTUFBTSxNQUFNLEdBQVcsRUFBRSxDQUFDO1FBQzFCLElBQUksbUJBQW1CLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLElBQUksV0FBVyxHQUFHLENBQUMsQ0FBQztRQUVwQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3BDLElBQUksV0FBVyxLQUFLLENBQUMsSUFBSSxtQkFBbUIsS0FBSyxDQUFDLEVBQUU7Z0JBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEIsbUJBQW1CLEVBQUUsQ0FBQzthQUN2QjtZQUNELElBQUksbUJBQW1CLEdBQUcsY0FBYyxFQUFFO2dC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