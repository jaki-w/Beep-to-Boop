$(document).ready(function() {
  $("button").click(function(event) {
    event.preventDefault();

    var originalNumber = $("input#userInput").val();
    $(".output").text(originalNumber);
  });
});
