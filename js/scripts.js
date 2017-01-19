/////////////BE/////////////
var numberInput;
var numberArray = [];
var romanArray = [];

///// rightmost digit ////
var rightmostDigit = function(digit) {
  digit = numberArray [0];
  if (digit === "0") {
    alert("first digit = 0");

  } else if (digit === "1") {
    alert("I");
    romanArray.push("I");
  } else {
    alert("doooom!");
  }
}








/////////////UI////////////
$(document).ready(function(){
  alert("hello!");
  numberInput = prompt("input a number");
  // numberInput = numberInput / 1000;
  alert("numberInput: " + numberInput);
  numberArray = numberInput.split("");
  alert("numberArray; " + numberArray);
  alert("rightmostDigit" + numberArray[0]);
  ///// rightmost digit ////
  rightmostDigit(numberArray[0]);



});
