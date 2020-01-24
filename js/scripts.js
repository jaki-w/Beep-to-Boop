function translate(inputNumber) {
  var originalNumber = parseInt($("input#userInput").val());
  var numberList = [];
  var i;

  for (var i = 0; i <= originalNumber; i++) {
    var stringNumber = i.toString();

    if (stringNumber.includes("1")) {
      numberList.push("Beep!");
    } else {
      result.push(stringNumber + ", ");
    }
  }

  $(".output").text(numberList);
  }


$(document).ready(function() {
  $("button").click(function(event) {
    event.preventDefault();
  });
});
