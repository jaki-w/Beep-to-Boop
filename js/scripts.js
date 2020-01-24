$(document).ready(function() {
  $("button").click(function(event) {


    var originalNumber = parseInt($("input#userInput").val());
    var numberList = [];
    var newnumberList = numberlist.toString();
    var i;

    for (var i = 0; i <= originalNumber; i++) {
      // if (i === 1) {
      //   (numberList.push("Beep!"));
      // } else {
      (numberList.push(i));
      // }
      // $(".output").text(numberList);
    }

    if (newNumberList.includes("1")) {
      (newNumberList.replace(/1/gi,"Beep!"));
      $(".output").text(numberList);

    }


    event.preventDefault();
  });
});
