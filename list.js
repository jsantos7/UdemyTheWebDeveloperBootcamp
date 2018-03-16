console.log("Connected")
var input = prompt("What would you like to do?");
var todo;
var arr=[];


while(input !== "quit"){
	if(input === "new"){
		todo = prompt("Enter a to do");
		arr.push(todo);
		console.log(todo + " added to the list");
	}
	else if(input === "list"){
		printList(arr);
	}
	else if(input === "delete"){
		var index=prompt("Enter index of the list you want to delete.");		
		arr.splice(index, 1);
		console.log("To do removed");
	}

	input = prompt("What would you like to do?");
}

console.log("Ok. you quit the app");


function printList(x){
	var count=0;
	console.log("********");
	for(var i=0; i<x.length;i++){
		console.log(i + ": " + x[i]);
	}
 
	console.log("********");
}