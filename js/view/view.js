calcView = {
  display: function(result) {
    var p = document.getElementById('demo');
    p.innerHTML = result;
    document.getElementById('arg1').value = '';
    document.getElementById('arg2').value = '';
  }
};
