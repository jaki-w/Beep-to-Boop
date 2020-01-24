$(document).ready(function() {
  $("button").click(function(event) {


    var originalNumber = parseInt($("input#userInput").val());
    var numberList = [];
    var i;
    for (var i = 0; i <= originalNumber; i++) {
      numberList.push(i);
      $(".output").text(numberList)
    }
    event.preventDefault();
  });
});
