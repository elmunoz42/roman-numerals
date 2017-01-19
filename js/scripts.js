/////////////BE/////////////
var numberInput;
var numberArray = [];
var romanArray = [];
var romanNumeral;

///// numberSplitter ////
var numberSplitter = function(numberInput) {
  if (numberInput < 10) {
    numberArray.splice(0,0,"0","0","0");
     alert(numberArray);
  } else if (numberInput < 100) {
    numberArray.splice(0,0,"0","0");
      alert(numberArray);
  } else if (numberInput < 1000) {
    numberArray.splice(0,0,"0");
      alert(numberArray);
  } else {
    alert(numberArray);
  }

}


///// penultimateDigit ///

var penultimateDigit = function(digit) {
  digit = numberArray [2];
  if (digit === "0") {
    alert("second digit = 0");
} else if (digit === "1") {
  alert("X");
  alert(romanArray);
  romanArray.push("X");
} else if (digit === "2") {
  alert("XX");
  romanArray.push("XX");
  alert(romanArray);
} else if (digit === "3") {
  alert("XXX");
  romanArray.push("XXX");
  alert(romanArray);
} else if (digit === "4") {
  romanArray.push("IL");
  alert(romanArray);
} else if (digit === "5") {
  romanArray.push("L");
  alert(romanArray);
} else if (digit === "6") {
  romanArray.push("LI");
  alert(romanArray);
} else if (digit === "7") {
  romanArray.push("LII");
  alert(romanArray);
} else if (digit === "8") {
  romanArray.push("LIII");
  alert(romanArray);
} else if (digit === "9") {
  romanArray.push("IC");
  alert(romanArray);
}
  else {
  alert("doooom!");
}
}
///// rightmostDigit ////
var rightmostDigit = function(digit) {
  digit = numberArray [3];
  if (digit === "0") {
    alert("first digit = 0");
    alert(romanArray);

  } else if (digit === "1") {
    alert("I");
    alert(romanArray);
    romanArray.push("I");
  } else if (digit === "2") {
    alert("II");
    romanArray.push("II");
    alert(romanArray);
  } else if (digit === "3") {
    alert("III");
    romanArray.push("III");
    alert(romanArray);
  } else if (digit === "4") {
    romanArray.push("IV");
    alert(romanArray);
  } else if (digit === "5") {
    romanArray.push("V");
    alert(romanArray);
  } else if (digit === "6") {
    romanArray.push("VI");
    alert(romanArray);
  } else if (digit === "7") {
    romanArray.push("VII");
    alert(romanArray);
  } else if (digit === "8") {
    romanArray.push("VIII");
    alert(romanArray);
  } else if (digit === "9") {
    romanArray.push("IX");
    alert(romanArray);
  }
    else {
    alert("doooom!");
  }

}








/////////////UI////////////
$(document).ready(function(){
  alert("hello!");
  numberInput = prompt("input a number");
  // numberInput = numberInput / 1000;
  // alert("numberInput: " + numberInput);
  numberArray = numberInput.split("");
  console.log("numberArray " + numberArray);
  numberSplitter(numberInput);
  // numberArray = numberArrayNR.reverse();
  console.log("numberArray " + numberArray);

  // alert("numberArray; " + numberArray);
  // alert("rightmostDigit" + numberArray[0]);
  ///// rightmost digit ////
  penultimateDigit(numberArray[2]);
  rightmostDigit(numberArray[3]);
  alert(romanArray);
  romanNumeral = romanArray.join("");
  alert(romanNumeral);

});
