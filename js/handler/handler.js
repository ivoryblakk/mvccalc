calcHandlers = {
  setupEvents: function() {
    var addButton = document.getElementById('addButton');
    addButton.addEventListener('click', function() {
      var arg1 = Number(document.getElementById('arg1').value);
      var arg2 = Number(document.getElementById('arg2').value);
      calcController.add(arg1, arg2);
    });
  }
};

// get all the information in the DOM and send it to the controller
