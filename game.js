var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];

function nextSequence() {
   var randomNumber = Math.floor(Math.random() * 4)
   var randomChosenColour = buttonColours[randomNumber]

   gamePattern.push(randomChosenColour)
   console.log(gamePattern)

   $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
};
