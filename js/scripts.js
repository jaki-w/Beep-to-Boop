function translate(inputNumber) {
  var numberList = [];
  var i;

  for (var i = 0; i <= inputNumber; i++) {
    var stringNumber = i.toString();

    if (stringNumber.includes("3")) {
      numberList.push(" I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (stringNumber.includes("2" || "2" && "1")) {
      numberList.push(" Boop!");
    } else if (stringNumber.includes("1")) {
      numberList.push(" Beep!");
    } else {
      numberList.push(" " + stringNumber);
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
