// /*
//  * Unit tests for lib/calculator.js
//  */

describe('Calculator', function() {

    // inject the HTML fixture for the tests
    beforeEach(function() {
      var fixture = 
      '<script type="text/javascript" src="lib/calculator.js"></script>' +
      '<div id="fixture">' +
        '<div class="keys">' + 
            '<div class="row">' + 
            '<button value="7">7</button>' +
            '<button value="8">8</button>' +
            '<button value="9">9</button>' +
            '<button value="+" class="operator">+</button> </div>' +
            '<div class="row">' + 
            '<button value="4">4</button>' +
            '<button value="5">5</button>' +
            '<button value="6">6</button>' +
            '<button value="-" class="operator">-</button> </div>' +
            '<div class="row">' + 
            '<button value="1">1</button>' +
            '<button value="2">2</button>' +
            '<button value="3">3</button>' +
            '<button value="*" class="operator">*</button> </div>' +

            '<div class="row">' + 
            '<button value="C" class="operator">C</button>' +
            '<button value="0">0</button>' +
            '<button value="/" class="operator">/</button>' +
            '<button value="=" class="operator">=</button> </div>' +
          '</div>' +
        '</div>';
  
      document.body.insertAdjacentHTML(
        'afterbegin', 
        fixture);

    });
  
    // remove the html fixture from the DOM
    afterEach(function() {
      document.body.removeChild(document.getElementById('fixture'));
    });
  
    // call the init function of calculator to register DOM elements
    beforeEach(function() {
      window.startUpCalculator();
    });
  
    it('should return 3 for 1 + 2', function() {
      document.getElementById('x').value = 1;
      document.getElementById('y').value = 2;
      document.getElementById('add').click();
      expect(document.getElementById('result').innerHTML).toBe('3');
    });

    it('should return 1 for 2 - 1', function() {
      document.getElementById('x').value = 2;
      document.getElementById('y').value = 1;
      document.getElementById('add').click();
      expect(document.getElementById('result').innerHTML).toBe('1');
    });

    it('should return 2 for 1 * 2', function() {
      document.getElementById('x').value = 1;
      document.getElementById('y').value = 2;
      document.getElementById('add').click();
      expect(document.getElementById('result').innerHTML).toBe('2');
    });

    it('should return 2 for 2 / 1', function() {
      document.getElementById('x').value = 2;
      document.getElementById('y').value = 1;
      document.getElementById('add').click();
      expect(document.getElementById('result').innerHTML).toBe('2');
    });

    it('should calculate zero for invalid x value', function() {
      document.getElementById('x').value = 'hello';
      document.getElementById('y').value = 2;
      document.getElementById('add').click();
      expect(document.getElementById('result').innerHTML).toBe('0');
    });
  
    it('should calculate zero for invalid y value', function() {
      document.getElementById('x').value = 1;
      document.getElementById('y').value = 'goodbye';
      document.getElementById('add').click();
      expect(document.getElementById('result').innerHTML).toBe('0');
    });
});
