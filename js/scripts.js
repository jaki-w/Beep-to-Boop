function translate(inputNumber) {
  var numberList = [];
  var i;

  for (var i = 0; i <= inputNumber; i++) {
    var stringNumber = i.toString();

    if (stringNumber.includes("1")) {
      numberList.push("Beep!");
    } else {
      numberList.push(stringNumber + ", ");
    }
  }
  return numberList;
}

$(document).ready(function() {
  $("button").click(function(event) {
    event.preventDefault();

    var originalNumber = parseInt($("input#userInput").val());
    var finalOutput = translate(originalNumber);

    $(".output").text(finalOutput);
  });
});
