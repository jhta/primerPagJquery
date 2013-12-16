$(document).on("ready",main);
var actual=1;
function main(){
	var intervalo= setInterval("runSlider()",3000);
}

function runSlider(){
	if(actual==$("#containerSlider img").size()){
		actual=0;
	}
	
	$("#containerSlider").animate({
		marginLeft: (actual*(-850))	
	},700);
	
	actual++;
}
