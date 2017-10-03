calcHandlers = {
  setupEvents: function() {
    var addButton = document.getElementById('addButton');
    addButton.addEventListener('click', function() {
      var arg1 = Number(document.getElementById('arg1').value);
      var arg2 = Number(document.getElementById('arg2').value);
      calcController.add(arg1, arg2);
    });
    var subtractButton = document.getElementById('subtractButton');
    subtractButton.addEventListener('click', function() {
      var arg1 = Number(document.getElementById('arg1').value);
      var arg2 = Number(document.getElementById('arg2').value);
      calcController.subtract(arg1, arg2);
    });
    var multiplyButton = document.getElementById('multiplyButton');
    multiplyButton.addEventListener('click', function() {
      var arg1 = Number(document.getElementById('arg1').value);
      var arg2 = Number(document.getElementById('arg2').value);
      calcController.multiply(arg1, arg2);
    });
    var divideButton = document.getElementById('divideButton');
    divideButton.addEventListener('click', function() {
      var arg1 = Number(document.getElementById('arg1').value);
      var arg2 = Number(document.getElementById('arg2').value);
      calcController.divide(arg1, arg2);
    });
    var clearButton = document.getElementById('clearButton');
    clearButton.addEventListener('click', function() {
      calcController.clear();
    });
  }
};

// get all the information in the DOM and send it to the controller
