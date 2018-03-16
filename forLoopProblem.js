/*Print all numbers between -10 and 19*/
var low = -10;
var high = 19;
for(var i=low; i<= high; i++){
	console.log(i);
}

console.log('\n\n');

/*Print all even numbers between 10 and 40 */
low = 10;
high = 40
for(var i=low; i<=high; i++){
	if(i%2 === 0){
		console.log(i);
	}
}

console.log('\n\n');
/*Print all odd numbers between 300 and 333*/
low = 300;
high = 333;
for(var i=low; i<=high; i++){
	if(i%2 != 0){
		console.log(i);
	}
}
console.log('\n\n');

/*Print all numbers divisible by 5 AND 3 between 5 and 50*/
low = 5;
high = 50;
for(var i=low; i<=high; i++){

	if(i%3 === 0){
		console.log(i);
	}

	if(i%5 === 0){
		console.log(i);
	}
}