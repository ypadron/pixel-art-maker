let blankCanvas = document.getElementById("pixelCanvas");
let sizePicker = document.getElementById("sizePicker");
let colorPicker = document.getElementById("colorPicker");
let gridHeight = document.getElementById("inputHeight");
let gridWidth = document.getElementById("inputWidth");

function userInput(event) {
  event.preventDefault();
  blankCanvas.innerHTML = "";
  makeGrid();
}

sizePicker.addEventListener("submit", userInput, false);

function makeGrid() {
  for (var h = 0; h < gridHeight.value; h++) {
    const row = blankCanvas.insertRow(h);
      for (var w = 0; w < gridWidth.value; w++) {
        const cell = row.insertCell(w);
        cell.addEventListener("click", releaseColor, false);
      }
    }
  }

colorPicker.addEventListener("input", function selectColor() {}, false);


function releaseColor() {
  this.style.backgroundColor = colorPicker.value;
}
