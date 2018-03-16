// Check off specific todos by clicking

$(document).ready(function(){
	//we want to make sure that we can also click li elements
	//that we added after it first loads 
	// so it is better to use ul tag then just select $("li").click(function(){
	$("ul").on("click","li",function(){
		// REPLACE ALL THE IF CONDITIONS WITH TOGGLE CLASS
		// // if li is gray
		// if($(this).css("color") === "rgb(128, 128, 128)"){
		// 	// turn it black
		// 	$(this).css({
		// 		color: "black",
		// 		textDecoration: "none"	
		// 	});	
		// }
		// else{
		// 	// turn it to gray
		// 	$(this).css({
		// 		color: "gray",
		// 		textDecoration: "line-through"	
		// 	});	
		// }

		$(this).toggleClass("completed");
		
	});
	// this will work only for lists that were preloaded,
	// but what about for the lists we will add?
	//$("span").click(function(event){
	$("ul").on("click","span", function(event){
		// we want to click on X span but we want to remove the list
		$(this).parent().fadeOut(500,function(){
			$(this).remove();
		});
		// stop bubbling up events to parent tags so it only activates
		//element that was clicked
		event.stopPropagation(); 
	});

	// we want not just any input, we want type-text input
	$("input[type='text']").keypress(function(event){ 						
		//we only want to listen to enter key, so we use 
		// event.which and listen to 13, "enter key" code
		if(event.which ===13){																	
			// get the value in input
			var todoText = $(this).val();
		
		// empty the value of the input
		$(this).val("");
		//add the string to the ul in html
		$("ul").append("<li> <span><i class='far fa-trash-alt'></i></span> " + todoText +"</li>");
		}	
	});

	$("#toggle-form").click(function(){
		$("input[type='text']").fadeToggle();
	});
});

