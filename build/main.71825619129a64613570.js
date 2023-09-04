/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   globalListener: () => (/* binding */ globalListener),
/* harmony export */   makeCoords: () => (/* binding */ makeCoords),
/* harmony export */   makeRectMatrixCalc: () => (/* binding */ makeRectMatrixCalc),
/* harmony export */   makeRectangle: () => (/* binding */ makeRectangle)
/* harmony export */ });
function makeRectMatrixCalc(canvas, container) {
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    const elementsInLine = Math.ceil(canvas.width / 25);
    const elementsInColumn = Math.ceil(canvas.height / 25);
    const elementsTotal = elementsInLine * elementsInColumn;
    return { elementsTotal, elementsInLine };
}
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./src/helpers.ts");

window.onscroll = () => window.scroll(0, 0);
const canvas = document.getElementById("rootCanvas");
const container = document.getElementById("container");
const ctx = canvas.getContext("2d");
function makeRectangleMatrix() {
    const { elementsTotal, elementsInLine } = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.makeRectMatrixCalc)(canvas, container);
    const coords = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.makeCoords)(elementsTotal, elementsInLine);
    coords.forEach((coord) => {
        (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.makeRectangle)(coord[0], coord[1], ctx);
    });
    if (coords.length < 1e3) {
        alert("Квадратов мало. Растяните окно браузера");
    }
    else {
        console.log("всего квадратов: ", coords.length);
    }
    window.addEventListener("click", (event) => (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.globalListener)(event, coords, ctx));
}
makeRectangleMatrix();
window.addEventListener("resize", function () {
    console.log("resize is working");
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    makeRectangleMatrix();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi43MTgyNTYxOTEyOWE2NDYxMzU3MC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUMvREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04yRjtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnQ0FBZ0MsRUFBRSw0REFBa0I7QUFDaEUsbUJBQW1CLG9EQUFVO0FBQzdCO0FBQ0EsUUFBUSx1REFBYTtBQUNyQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdELHdEQUFjO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2twcmltaXRpdmV0ZW1wbGF0ZS8uL3NyYy9oZWxwZXJzLnRzIiwid2VicGFjazovL3dlYnBhY2twcmltaXRpdmV0ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrcHJpbWl0aXZldGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2twcmltaXRpdmV0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2twcmltaXRpdmV0ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2twcmltaXRpdmV0ZW1wbGF0ZS8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gbWFrZVJlY3RNYXRyaXhDYWxjKGNhbnZhcywgY29udGFpbmVyKSB7XG4gICAgY2FudmFzLndpZHRoID0gY29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBjb250YWluZXIuY2xpZW50SGVpZ2h0O1xuICAgIGNvbnN0IGVsZW1lbnRzSW5MaW5lID0gTWF0aC5jZWlsKGNhbnZhcy53aWR0aCAvIDI1KTtcbiAgICBjb25zdCBlbGVtZW50c0luQ29sdW1uID0gTWF0aC5jZWlsKGNhbnZhcy5oZWlnaHQgLyAyNSk7XG4gICAgY29uc3QgZWxlbWVudHNUb3RhbCA9IGVsZW1lbnRzSW5MaW5lICogZWxlbWVudHNJbkNvbHVtbjtcbiAgICByZXR1cm4geyBlbGVtZW50c1RvdGFsLCBlbGVtZW50c0luTGluZSB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDb29yZHMoaXRlbXNOdW1iZXIsIGVsZW1lbnRzSW5MaW5lKSB7XG4gICAgY29uc3QgY29vcmRzID0gW107XG4gICAgbGV0IGN1cnJlbnRMaW5lUG9zaXRpb24gPSAwO1xuICAgIGxldCBjdXJyZW50bGluZSA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtc051bWJlcjsgaSsrKSB7XG4gICAgICAgIGlmIChjdXJyZW50bGluZSA9PT0gMCAmJiBjdXJyZW50TGluZVBvc2l0aW9uID09PSAwKSB7XG4gICAgICAgICAgICBjb29yZHMucHVzaChbMCwgMF0pO1xuICAgICAgICAgICAgY3VycmVudExpbmVQb3NpdGlvbisrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjdXJyZW50TGluZVBvc2l0aW9uID4gZWxlbWVudHNJbkxpbmUpIHtcbiAgICAgICAgICAgIGN1cnJlbnRsaW5lICs9IDE7XG4gICAgICAgICAgICBjdXJyZW50TGluZVBvc2l0aW9uID0gMDtcbiAgICAgICAgfVxuICAgICAgICBjb29yZHMucHVzaChbY3VycmVudExpbmVQb3NpdGlvbiAqIDMwLCBjdXJyZW50bGluZSAqIDMwXSk7XG4gICAgICAgIGN1cnJlbnRMaW5lUG9zaXRpb24gKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGNvb3Jkcztcbn1cbmZ1bmN0aW9uIG1ha2VSYW5kb21Db2xvcigpIHtcbiAgICBjb25zdCBjb2xvcnMgPSBbXG4gICAgICAgIFwicmVkXCIsXG4gICAgICAgIFwiZ3JlZW5cIixcbiAgICAgICAgXCJibHVlXCIsXG4gICAgICAgIFwieWVsbG93XCIsXG4gICAgICAgIFwidGVhbFwiLFxuICAgICAgICBcImJsYWNrXCIsXG4gICAgXTtcbiAgICBjb25zdCByYW5kb21Db2xvciA9IGNvbG9yc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMubGVuZ3RoKV07XG4gICAgcmV0dXJuIHJhbmRvbUNvbG9yO1xufVxuZnVuY3Rpb24gcmVmaWxsUmVjdGFuZ2xlKHBvc3gsIHBvc3ksIGN0eCkge1xuICAgIGN0eC5jbGVhclJlY3QocG9zeCwgcG9zeSwgMjAsIDIwKTtcbiAgICBjdHguZmlsbFN0eWxlID0gbWFrZVJhbmRvbUNvbG9yKCk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gXCIjYmUyNTk2XCI7XG4gICAgY3R4LmxpbmVXaWR0aCA9IDM7XG4gICAgY3R4LmZpbGxSZWN0KHBvc3gsIHBvc3ksIDIwLCAyMCk7XG4gICAgY3R4LnN0cm9rZVJlY3QocG9zeCwgcG9zeSwgMjAsIDIwKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYWtlUmVjdGFuZ2xlKHBvc3gsIHBvc3ksIGN0eCkge1xuICAgIGN0eC5maWxsU3R5bGUgPSBtYWtlUmFuZG9tQ29sb3IoKTtcbiAgICBjdHguZmlsbFJlY3QocG9zeCwgcG9zeSwgMjAsIDIwKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnbG9iYWxMaXN0ZW5lcihldmVudCwgY29vcmRzLCBjdHgpIHtcbiAgICBjb25zb2xlLmxvZyhcImdsb2JhbExpc3RlbmVyID09PiBcIik7XG4gICAgY29uc3QgbW91c2VYUG9zaXRpb24gPSBldmVudC5jbGllbnRYO1xuICAgIGNvbnN0IG1vdXNlWVBvc2l0aW9uID0gZXZlbnQuY2xpZW50WTtcbiAgICBmb3IgKGxldCBjb29yZCBvZiBjb29yZHMpIHtcbiAgICAgICAgaWYgKG1vdXNlWFBvc2l0aW9uID49IGNvb3JkWzBdICsgOCAmJlxuICAgICAgICAgICAgbW91c2VYUG9zaXRpb24gPD0gY29vcmRbMF0gKyAyOCAmJlxuICAgICAgICAgICAgbW91c2VZUG9zaXRpb24gPj0gY29vcmRbMV0gKyA4ICYmXG4gICAgICAgICAgICBtb3VzZVlQb3NpdGlvbiA8PSBjb29yZFsxXSArIDI4KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImhpdCFcIik7XG4gICAgICAgICAgICByZWZpbGxSZWN0YW5nbGUoY29vcmRbMF0sIGNvb3JkWzFdLCBjdHgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBtYWtlQ29vcmRzLCBtYWtlUmVjdGFuZ2xlLCBtYWtlUmVjdE1hdHJpeENhbGMsIGdsb2JhbExpc3RlbmVyLCB9IGZyb20gXCIuL2hlbHBlcnNcIjtcbndpbmRvdy5vbnNjcm9sbCA9ICgpID0+IHdpbmRvdy5zY3JvbGwoMCwgMCk7XG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RDYW52YXNcIik7XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5mdW5jdGlvbiBtYWtlUmVjdGFuZ2xlTWF0cml4KCkge1xuICAgIGNvbnN0IHsgZWxlbWVudHNUb3RhbCwgZWxlbWVudHNJbkxpbmUgfSA9IG1ha2VSZWN0TWF0cml4Q2FsYyhjYW52YXMsIGNvbnRhaW5lcik7XG4gICAgY29uc3QgY29vcmRzID0gbWFrZUNvb3JkcyhlbGVtZW50c1RvdGFsLCBlbGVtZW50c0luTGluZSk7XG4gICAgY29vcmRzLmZvckVhY2goKGNvb3JkKSA9PiB7XG4gICAgICAgIG1ha2VSZWN0YW5nbGUoY29vcmRbMF0sIGNvb3JkWzFdLCBjdHgpO1xuICAgIH0pO1xuICAgIGlmIChjb29yZHMubGVuZ3RoIDwgMWUzKSB7XG4gICAgICAgIGFsZXJ0KFwi0JrQstCw0LTRgNCw0YLQvtCyINC80LDQu9C+LiDQoNCw0YHRgtGP0L3QuNGC0LUg0L7QutC90L4g0LHRgNCw0YPQt9C10YDQsFwiKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi0LLRgdC10LPQviDQutCy0LDQtNGA0LDRgtC+0LI6IFwiLCBjb29yZHMubGVuZ3RoKTtcbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IGdsb2JhbExpc3RlbmVyKGV2ZW50LCBjb29yZHMsIGN0eCkpO1xufVxubWFrZVJlY3RhbmdsZU1hdHJpeCgpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKFwicmVzaXplIGlzIHdvcmtpbmdcIik7XG4gICAgY2FudmFzLndpZHRoID0gY29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBjb250YWluZXIuY2xpZW50SGVpZ2h0O1xuICAgIG1ha2VSZWN0YW5nbGVNYXRyaXgoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9