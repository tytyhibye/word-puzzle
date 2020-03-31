$(document).ready(function() {
  $("form#puzzle").submit(function(event) {
  event.preventDefault();
  var sentence = $("#answer").text();
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  vowels.forEach(function(vowel) {
  var re = new RegExp(vowel, "g");
    sentence = sentence.replace(re, ' - ');
    console.log(sentence);
    });
    $("#answer").text(sentence);
    $("#question").hide();
    $("#button").hide();
    $("#display").show();
  // console.log("anything")
  });
});