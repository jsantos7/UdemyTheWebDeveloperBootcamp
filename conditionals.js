var age = prompt("How old are you?");

if(age < 0){
	console.log("Error. You entered a negative number. Age cannot be negative.");
}

if((age % 2)== 1){
	console.log("Your age is odd");
}

if(age == 21){
	console.log("Happy 21st birthday!!");
}

if(age % Math.sqrt(age)===0){
	console.log("perfect square");
}


if (age < 18) {
	console.log("Sorry, you are not old enough to enter the venue.");
}

else if(age < 21){
	console.log("You can enter but cannot drink.");
}

else{
	console.log("Come on in. You can drink.");
}

