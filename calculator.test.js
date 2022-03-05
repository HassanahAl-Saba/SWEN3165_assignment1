// // /*
// //  * Unit tests for lib/calculator.js
// //  */

// describe('Calculator', function() {

//     // inject the HTML fixture for the tests
//     beforeEach(function() {
//       var fixture = 
//       '<script type="text/javascript" src="lib/calculator.js"></script>' +
//       '<div id="fixture">' +
//         '<div class="keys">' + 
//             '<div class="row">' + 
//             '<button value="7">7</button>' +
//             '<button value="8">8</button>' +
//             '<button value="9">9</button>' +
//             '<button value="+" class="operator">+</button> </div>' +
//             '<div class="row">' + 
//             '<button value="4">4</button>' +
//             '<button value="5">5</button>' +
//             '<button value="6">6</button>' +
//             '<button value="-" class="operator">-</button> </div>' +
//             '<div class="row">' + 
//             '<button value="1">1</button>' +
//             '<button value="2">2</button>' +
//             '<button value="3">3</button>' +
//             '<button value="*" class="operator">*</button> </div>' +

//             '<div class="row">' + 
//             '<button value="C" class="operator">C</button>' +
//             '<button value="0">0</button>' +
//             '<button value="/" class="operator">/</button>' +
//             '<button value="=" class="operator">=</button> </div>' +
//           '</div>' +
//         '</div>';
  
//       document.body.insertAdjacentHTML(
//         'afterbegin', 
//         fixture);

//     });
  
//     // remove the html fixture from the DOM
//     afterEach(function() {
//       document.body.removeChild(document.getElementById('fixture'));
//     });
  
//     // call the init function of calculator to register DOM elements
//     beforeEach(function() {
//       window.startUpCalculator();
//     });
  
//     it('should return 3 for 1 + 2', function() {
//       document.getElementById('x').value = 1;
//       document.getElementById('y').value = 2;
//       document.getElementById('add').click();
//       expect(document.getElementById('result').innerHTML).toBe('3');
//     });

//     it('should return 1 for 2 - 1', function() {
//       document.getElementById('x').value = 2;
//       document.getElementById('y').value = 1;
//       document.getElementById('add').click();
//       expect(document.getElementById('result').innerHTML).toBe('1');
//     });

//     it('should return 2 for 1 * 2', function() {
//       document.getElementById('x').value = 1;
//       document.getElementById('y').value = 2;
//       document.getElementById('add').click();
//       expect(document.getElementById('result').innerHTML).toBe('2');
//     });

//     it('should return 2 for 2 / 1', function() {
//       document.getElementById('x').value = 2;
//       document.getElementById('y').value = 1;
//       document.getElementById('add').click();
//       expect(document.getElementById('result').innerHTML).toBe('2');
//     });

//     it('should calculate zero for invalid x value', function() {
//       document.getElementById('x').value = 'hello';
//       document.getElementById('y').value = 2;
//       document.getElementById('add').click();
//       expect(document.getElementById('result').innerHTML).toBe('0');
//     });
  
//     it('should calculate zero for invalid y value', function() {
//       document.getElementById('x').value = 1;
//       document.getElementById('y').value = 'goodbye';
//       document.getElementById('add').click();
//       expect(document.getElementById('result').innerHTML).toBe('0');
//     });
// });

describe("Calculator", function () {
  // Set up HTML for tests
  beforeEach(function () {
    var fixture = `
    <!-- calculator -->
    <div class="calculator" id='fixture'>
  
      <!-- display -->
      <input type="text" class="display" disabled>
      <!-- keys -->
      <div class="keys">
        <!-- 4 rows of keys -->
        <div class="row">
          <button id='seven' value="7">7</button>
          <button id='eight' value="8">8</button>
          <button id='nine' value="9">9</button>
          <button id='plus' value="+" class="operator">+</button>
        </div>
        <div class="row">
          <button id='four' value="4">4</button>
          <button id='five' value="5">5</button>
          <button id='six' value="6">6</button>
          <button id='minus' value="-" class="operator">-</button>
        </div>
        <div class="row">
          <button id='one' value="1">1</button>
          <button id='two' value="2">2</button>
          <button id='three' value="3">3</button>
          <button id='mult' value="*" class="operator">*</button>
        </div>
        <div class="row">
          <button id='clear' value="C" class="operator">C</button>
          <button id='zero' value="0">0</button>
          <button id='division' value="/" class="operator">/</button>
          <button id='equal_sign' value="=" class="opera~~tor">=</button>
        </div>
      </div>
    
    </div>
    <!-- calculator body ends -->
    `;

    document.body.insertAdjacentHTML("afterbegin", fixture);
  });

  afterEach(function () {
    document.body.removeChild(document.getElementById("fixture"));
  });

  beforeEach(function () {
    window.calculator.init();
  });

  it("Should return 3 for 1 + 2", function () {
    const one = document.getElementById("seven");
    const eight = document.getElementById("eight");
    const plus = document.getElementById("plus");
    const equal_sign = document.getElementById("equal_sign");
    const display = document.querySelector(".display");
    one.click();
    plus.click();
    eight.click();
    equal_sign.click();
    console.log(display.value);

    expect(display.value).toBe("15");
  });


  it("Should return 2 for 3 - 1", function () {
    const one = document.getElementById("three");
    const eight = document.getElementById("one");
    const plus = document.getElementById("minus");
    const equal_sign = document.getElementById("equal_sign");
    const display = document.querySelector(".display");
    one.click();
    plus.click();
    eight.click();
    equal_sign.click();
    console.log(display.value);

    expect(display.value).toBe("2");
  });

  it("Should return 3 for 3 * 1", function () {
    const one = document.getElementById("three");
    const eight = document.getElementById("one");
    const plus = document.getElementById("mult");
    const equal_sign = document.getElementById("equal_sign");
    const display = document.querySelector(".display");
    one.click();
    plus.click();
    eight.click();
    equal_sign.click();
    console.log(display.value);

    expect(display.value).toBe("3");
  });

  it("Should return 3 for 3 / 1", function () {
    const one = document.getElementById("three");
    const eight = document.getElementById("one");
    const plus = document.getElementById("division");
    const equal_sign = document.getElementById("equal_sign");
    const display = document.querySelector(".display");
    one.click();
    plus.click();
    eight.click();
    equal_sign.click();
    console.log(display.value);

    expect(display.value).toBe("3");
  });

});
