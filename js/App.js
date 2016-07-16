var App = (function(){

	$("#wall").click(function(){
		console.log("i hit the wall");
	});

	$("#wall").mousedown(function(){
		console.log("i waved at the wall");
	});	

	$("#wall").mouseup(function(){
		console.log("i waved away at the wall");
	});

}());