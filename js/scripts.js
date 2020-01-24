$(document).ready(function() {
  $("button").click(function(event) {


    var originalNumber = parseInt($("input#userInput").val());
    var numberList = [];
    var i;

    for (var i = 0; i <= originalNumber; i++) {
      if (numberList.includes("1")) {
        (result.push("Beep!"));
      } else {
        (numberList.push(i));
      }
      $(".output").text(numberList);
      }
    event.preventDefault();
  });
});
