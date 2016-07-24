var App = (function(){

	var $player = $("#camera-entity");

	function parseCoords(position) {
		return position.x + " " + $player.attr("position").y + " " + position.z;
	}

	function goToObject($element) {
		var position = $element.attr("position");
		position.z += 2;
		$player.attr("position", parseCoords(position));
	}

	$(".move-to-clickable").each(function(){
		$(this).click(function(){
			console.log("i hit the wall");
			goToObject($(this));
		});
	});

	$("#lego-man").click(function(){
		
	});



}());