function translate(inputNumber) {
  var originalNumber = parseInt($("input#userInput").val());
  var numberList = [];
  var i;

  for (var i = 0; i <= originalNumber; i++) {
    var stringNumber = i.toString();



    $(".output").text(numberList);
  }


$(document).ready(function() {
  $("button").click(function(event) {
    event.preventDefault();
  });
});
