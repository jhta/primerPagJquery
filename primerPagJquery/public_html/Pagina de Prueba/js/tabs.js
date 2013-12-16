
$(document).on("ready",main);
var tabInicial=1;
function main(){
	$("#tabs a").on("click",abrirTab);
	$(".tabContent").eq(tabInicial-1).fadeIn();
	$("#tabs a").eq(tabInicial-1).addClass("tabActual");
	
}

function abrirTab(){
	//alert($(this).index());
	$(".tabContent").hide();
	$("#tabs a").removeClass("tabActual");
	$(".tabContent").eq($(this).index()).fadeIn();
	$(this).addClass("tabActual");
	
	return false;
}
