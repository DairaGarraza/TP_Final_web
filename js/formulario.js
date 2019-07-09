// clonar
$(".agregarformulario").click(function(){
	var clonar=$(this).parent(".bloque").clone(true); //clonar
	$(this).parent(".bloque").after(clonar); //mostrar
	var subtotal = parseInt($("#total-inscripcion-evento").val());
	subtotal = subtotal + 100;
	$("#total-inscripcion-evento").val(subtotal);

	var contadorBloque = $("#contador-bloque").val();
	contadorBloque ++;
	$("#contador-bloque").val(contadorBloque);
});

// remover
$(".eliminar").click(function(){
	if($("#contador-bloque").val()!-1){
		$(this).parent(".bloque").remove();
		var subtotal = parseInt($("#total-inscripcion-evento").val());
		subtotal = subtotal - 100;
		$("#total-inscripcion-evento").val(subtotal);
		var contadorBloque = $("#contador-bloque").val();
		contadorBloque --;
		$("#contador-bloque").val(contadorBloque);
	}else{
		$("#nombrePersona1, #apellidoPersona1, #dniPersona1").val('');
	}
});

/*
$(document).ready(function(){

    //clonar
    $(".agregarformulario").click(function(){
    	var clonar=$(this).parent(".bloque").clone(); //clonar
        $(this).parent(".bloque").after(clonar); //mostrar
    });
        
    
    //remover
    $(".formulario .eliminar").click(function(){
    	$(this).parent(".bloque").remove();
    });
});
*/