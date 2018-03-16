function isEven(x){
	if(x%2 === 0){
		return true;
	}
	else return false;
}


console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));


function factorial(x){
	var num=x;
	var sum=1;

	if(x === 0){
		return num + "! is 1";
	}
	while(x >0){
		sum*=x;
		x--;
	}
	return num + "! is " + sum;
}

console.log('\n\n');
console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));


function kebabToSnake(x){
	var str = x.replace(/-/g, '_');
	return str;
}

console.log('\n\n');
console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-awesome"));
console.log(kebabToSnake("blah"));