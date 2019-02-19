$(document).ready (function() {
  var age = parseInt(prompt("How old are you?"));

if (age >= 18) {
  $('#Over_18').show();
} else {
  $('#Under_18').show();
  }
});
