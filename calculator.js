// // select all the buttons
// const buttons = document.querySelectorAll('button');
// // select the <input type="text" class="display" disabled> element
// const display = document.querySelector('.display');

// // add eventListener to each button
// function startUpCalculator(){
// 	buttons.forEach(function(button) {
// 	  button.addEventListener('click', calculate);
// 	});
// }

// // calculate function
// function calculate(event) {
//   // current clicked buttons value
//   const clickedButtonValue = event.target.value;

//   if (clickedButtonValue === '=') {
//     // check if the display is not empty then only do the calculation
//     if (display.value !== '') {
//       // calculate and show the answer to display
//       display.value = eval(display.value);
//     }
//   } else if (clickedButtonValue === 'C') {
//     // clear everything on display
//     display.value = '';
//   } else {
//     // otherwise concatenate it to the display
//     display.value += clickedButtonValue;
//   }
// }

// startUpCalculator();

// 'use strict';

// window.calculator = window.calculator || {};

// (function() {
// 	var getIntById = function(id) {
// 		return parseInt(document.getElementById(id).value, 10);
// 	};

// 	var calculate_add = function() {
// 		var sum = getIntById('x') + getIntById('y');
// 		document.getElementById('result').innerHTML = isNaN(sum) ? 0 : sum;
// 	};

// 	window.calculator.init = function() {
// 		document.getElementById('add').addEventListener('click', calculate_add);
// 	};

//   var calculate_sub = function() {
// 		var sub = getIntById('x') - getIntById('y');
// 		document.getElementById('result').innerHTML = isNaN(sub) ? 0 : sub;
// 	};

// 	window.calculator.init = function() {
// 		document.getElementById('sub').addEventListener('click', calculate_sub);
// 	};

//   var calculate_mult = function() {
// 		var mult = getIntById('x') * getIntById('y');
// 		document.getElementById('result').innerHTML = isNaN(mult) ? 0 : mult;
// 	};

// 	window.calculator.init = function() {
// 		document.getElementById('mult').addEventListener('click', calculate_mult);
// 	};

//   var calculate_div = function() {
// 		var div = getIntById('x') / getIntById('y');
// 		document.getElementById('result').innerHTML = isNaN(div) ? 0 : div;
// 	};

// 	window.calculator.init = function() {
// 		document.getElementById('div').addEventListener('click', calculate_div);
// 	};

  
//   })();


window.calculator = window.calculator || {};

(function () {
  // add eventListener to each button
  function startUpCalculator() {
    // select all the buttons
    const buttons = document.querySelectorAll("button");
    buttons.forEach(function (button) {
      button.addEventListener("click", calculate);
    });
  }

  // calculate function
  function calculate(event) {
    // current clicked buttons value
    console.log("Calculate triggered");
    const clickedButtonValue = event.target.value;

    // select the <input type="text" class="display" disabled> element
    const display = document.querySelector(".display");
    if (clickedButtonValue === "=") {
      // check if the display is not empty then only do the calculation
      if (display.value !== "") {
        // calculate and show the answer to display
        display.value = eval(display.value);
      }
    } else if (clickedButtonValue === "C") {
      // clear everything on display
      display.value = "";
    } else {
      // otherwise concatenate it to the display
      display.value += clickedButtonValue;
    }
  }
  window.calculator.init = function () {
    startUpCalculator();
  };
})();
