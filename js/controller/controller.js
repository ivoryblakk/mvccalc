calcController = {
  add: function(arg1, arg2) {
    var lastResult = calcModel.lastResult;
    var result = calcLogic.add(arg1, arg2, lastResult); // the function sends the 2 args from the controller which sends it to the logic
    calcModel.lastResult = result;
    calcView.display(result);
  },
  subtract: function(arg1, arg2) {
    var lastResult = calcModel.lastResult;
    var result = calcLogic.subtract(arg1, arg2, lastResult); // the function sends the 2 args from the controller which sends it to the logic
    calcModel.lastResult = result;
    calcView.display(result);
  },
  multiply: function(arg1, arg2) {
    var lastResult = calcModel.lastResult;
    var result = calcLogic.multiply(arg1, arg2, lastResult); // the function sends the 2 args from the controller which sends it to the logic
    calcModel.lastResult = result;
    calcView.display(result);
  },
  divide: function(arg1, arg2) {
    var lastResult = calcModel.lastResult;
    var result = calcLogic.divide(arg1, arg2, lastResult); // the function sends the 2 args from the controller which sends it to the logic
    calcModel.lastResult = result;
    calcView.display(result);
  }
};
