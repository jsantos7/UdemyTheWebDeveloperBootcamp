var answer = prompt("Are we there yet?");
var upperCase = answer.toUpperCase();
while(!(upperCase === "YES")){
	answer = prompt("Are we there yet?");
	upperCase = answer.toUpperCase();
}
alert("Yes, we made it.");