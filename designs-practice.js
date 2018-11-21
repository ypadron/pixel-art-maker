// Select color input
var selectPixel = document.getElementById("pixelCanvas");
var elForm = document.getElementById("sizePicker");
var blankCanvas = document.getElementById("pixelCanvas").innerHTML;
var color = document.getElementById("colorPicker");
// Use value and other properties, methods or events on variable within script
var currentColor = color.value; // currentColoris a KEYWORD
var inputHeight = document.getElementById("height");
var gridHeight = inputHeight.value;
var inputWidth = document.getElementById("width");
var gridWidth = inputWidth.value;
/*function getTarget(e) {
  if (!e) {
    e = window.event;
  }
  return e.target || e.srcElement;
}*/

function selectColor() {
  var color = document.getElementById("colorPicker");
  var currentColor = color.value;
  console.log(currentColor);
  currentColor.addEventListener("click", selectColor, false);

}

// currentColor.addEventListener("click", selectColor, false);

function releaseColor() {
  this.setAttribute("style", "background-color: currentColor"); //Input element represents color only in hexadecimal string notation.
}
selectPixel.addEventListener("click", releaseColor, false);
// Select size input

// var inputHeight = document.getElementById("gridHeight");
// var height = inputHeight.value;
// console.log(height);
// var inputWidth = document.getElementById("gridWidth");
// var width = inputWidth.value;
// console.log(width);

//submit button
// var inputHeight = document.getElementById("height");
// var gridHeight = inputHeight.value;
// var inputWidth = document.getElementById("width");
// var gridWidth = inputWidth.value;

function userInput() {
  event.preventDefault();
  console.log("Doing good giiiirrrrrrllll!");

  document.getElementById("pixelCanvas").innerHTML = "";
  makeGrid(gridHeight, gridWidth);
}

  elForm.addEventListener("submit", userInput, false);

// When size is submitted by the user, call makeGrid()
// ******************* Make Grid Practice ******************
/*function makeRow(gridWidth) {
  var row = "";
  for (var w = 0; w <= gridWidth; w++) {
    row += "* ";
  }
  return row + "\n";
}
//console.log(makeRow(15));

function makeGrid(gridHeight) {
// Your code goes here!
 var columns = "";
  for (var h = 1; h <= gridHeight; h++) {
    columns += makeRow(h);//w or h in the parens?
    }
    return columns;
  }
console.log(makeGrid(10));

// ********************** Make Grid ************************
/***works ok-clunky***/
function makeGrid(gridHeight, gridWidth) {
  var table = "";
  for (var h = 1; h <= gridHeight; h++) {
    table = table + "<tr>";     //Should be able to use <table> element rather than table variable || insertrows?
      for (var w = 1; w <= gridWidth; w++) {
        table = table + "<td>" + h +  "</td>";
      }
    table = table + "</tr>";
  }
   //should be able to use a version of below for final product - better product vs innerhtml option used below.
    /*var element = document.createElement("table");
    var newNode = document.createTextNode(table);
    element.appendChild(newNode);
    var position = document.getElementById("pixelCanvas");
    position.appendChild(element);*/

    // var blankCanvas = document.getElementById("pixelCanvas").innerHTML;
    document.getElementById("pixelCanvas").innerHTML = blankCanvas + ("<table>" + table + "</table>");
    // document.write("<table>" + table + "</table>"); //DO NOT USE
    // return table;
}
// makeGrid(gridHeight, gridWidth);
