var arr = [
	{
		title: "Three Stooges",
		rating: 4.5,
		hasWatched: "no"
	}, {
		title: "Frozen",
		rating: 3.5,
		hasWatched: "no"
	}, {
		title: "Dragon Ball Z",
		rating: 5,
		hasWatched: "yes"
	}, {
		title: "Mad Max Fury Road",
		rating: 4,
		hasWatched: "no"
	}
]

arr.forEach(function(i){
	if(i.hasWatched === "yes"){
		console.log("You have watched \"" + i.title + "\" - " + i.rating + " stars");
	}
	else{
		console.log("You have not seen \"" + i.title + "\" - " + i.rating + " stars");
	}
});