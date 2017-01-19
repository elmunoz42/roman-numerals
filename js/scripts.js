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
///// fourthDigit /////
var fourthDigit = function(digit) {
  digit = numberArray [0];
  if (digit === "0") {
    alert("fourth digit = 0");
} else if (digit === "1") {
  alert("M");
  alert(romanArray);
  romanArray.push("M");
} else if (digit === "2") {
  alert("MM");
  romanArray.push("MM");
  alert(romanArray);
} else if (digit === "3") {
  alert("MMM");
  romanArray.push("MMM");
  alert(romanArray);
}
  else {
  alert("doooom!");
}
}
///// thirdDigit /////
var thirdDigit = function(digit) {
  digit = numberArray [1];
  if (digit === "0") {
    alert("third digit = 0");
} else if (digit === "1") {
  alert("C");
  alert(romanArray);
  romanArray.push("C");
} else if (digit === "2") {
  alert("CC");
  romanArray.push("CC");
  alert(romanArray);
} else if (digit === "3") {
  alert("CCC");
  romanArray.push("CCC");
  alert(romanArray);
} else if (digit === "4") {
  romanArray.push("CD");
  alert(romanArray);
} else if (digit === "5") {
  romanArray.push("D");
  alert(romanArray);
} else if (digit === "6") {
  romanArray.push("DC");
  alert(romanArray);
} else if (digit === "7") {
  romanArray.push("DCC");
  alert(romanArray);
} else if (digit === "8") {
  romanArray.push("DCCC");
  alert(romanArray);
} else if (digit === "9") {
  romanArray.push("CM");
  alert(romanArray);
} else {
alert("doooom!");
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
  romanArray.push("XL");
  alert(romanArray);
} else if (digit === "5") {
  romanArray.push("L");
  alert(romanArray);
} else if (digit === "6") {
  romanArray.push("LX");
  alert(romanArray);
} else if (digit === "7") {
  romanArray.push("LXX");
  alert(romanArray);
} else if (digit === "8") {
  romanArray.push("LXXX");
  alert(romanArray);
} else if (digit === "9") {
  romanArray.push("XC");
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
  $("#userInputer form").submit(function(event){
    // numberInput = prompt("input a number");

    numberInput = $("input#inputer").val();
    alert("hello! from jQuery");
    // numberInput = numberInput / 1000;

    alert("numberInput: " + numberInput);
    numberArray = numberInput.split("");
    console.log("numberArray " + numberArray);
    numberSplitter(numberInput);
    // numberArray = numberArrayNR.reverse();
    console.log("numberArray " + numberArray);

    // alert("numberArray; " + numberArray);
    // alert("rightmostDigit" + numberArray[0]);
    ///// rightmost digit ////
    fourthDigit(numberArray[0]);
    thirdDigit(numberArray[1]);
    penultimateDigit(numberArray[2]);
    rightmostDigit(numberArray[3]);
    alert(romanArray);
    romanNumeral = romanArray.join("");
    alert(romanNumeral);
    $("#numeralOutput").text(romanNumeral);
    event.preventDefault();
  });


});
