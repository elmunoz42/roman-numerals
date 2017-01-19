/////////////BE/////////////
var numberInput;
var numberArray = [];
var romanArray = [];

///// rightmost digit ////
var rightmostDigit = function(digit) {
  digit = numberArray [0];
  if (digit < 1) {
    alert("first digit = 0");
    return digit;
  } else {}
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
