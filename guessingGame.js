var magicNum = 7;
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

if(guess === magicNum){
	alert("You guessed it.");
}
else if(guess < magicNum){
	alert("That is too low. Try again");
}
else if(guess > magicNum){
	alert("That is too high. Try again.")
}