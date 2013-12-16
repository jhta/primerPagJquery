$(document).on("ready",inicio);
	var arrayEnalces=new Array("#inicio","#servicios","#trabajo","#faq","#contacto");
		
	function inicio(){
		//alert("hola");
		//alert(arrayEnalces.length);
		for(var i in arrayEnalces ){
			//alert("#inicio");
			if(arrayEnalces[i]!="#inicio")
				$(arrayEnalces[i]).hide();
			
		
				
		};
		
		$(".iconoMenu").on("click",cambio);
			
		//$("#serviciosw").hide();*/	
	};
	
	function cambio ( ) {
		var Nid=$(this).attr('id');	
		//salert(Nid+"	 hola");
		$(arrayEnalces[Nid]).fadeIn();
		$("#"+Nid).addClass("seleccionado");
			
	  for(var i in arrayEnalces ){
			//alert("#inicio");
			if(i!=Nid){
				$("#"+Nid).removeClass("seleccionado");
	
				$(arrayEnalces[i]).hide();					
				};
	};
	
	};
