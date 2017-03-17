// var randomFunc = function () {
//   var rand = Math.floor((Math.random() * 4) + 1);
//   return rand;
// }
//
// var randomQuote = function () {
//   var quoteArr = {
//     1: "this",
//     2: "quote",
//     3: "is",
//     4: "first"
//   }
//   document.getElementById('header').innerHTML = quoteArr[randomFunc()] + " " + quoteArr[randomFunc()];
// }
//
// randomQuote();
var intro = function (myText) {
    $("#introText").html(myText);
}
intro('Hello');
$("#introText").fadeIn(2000, function () {
    $("#introText").css('display', 'none');
    intro('Welcome to');
    $("#introText").fadeIn(2000, function () {
        $("#introText").css('display', 'none');
        intro('Hourglass.org');
        $("#introText").fadeIn(2500, function () {});
    });
});