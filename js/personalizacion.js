$(document).ready(function(){

	$("#tituloEvento").keyup(function() {

		var titulo = $(this).val();

		if (titulo == "") {

			titulo = "Titulo";			
		}

		$("#tituloVistaPrevia").text(titulo);		
	});

	$("#fechaHoraEvento").keyup(function(){

		var fecha = $(this).val();

		if (fecha == "") {
			fecha = "Fecha";			
		}

		$("#fechaVistaPrevia").text(fecha);		
	})

	$("input[name='color']").change(function(){
		var colorFuente = $("input[name='color']:checked").val();
		$(".vista-previa").css("color", colorFuente);		
	});	

	$("input[name='fondo']").change(function(){
		var color = $("input[name='fondo']:checked").val();
		$(".vista-previa").css("background-color", color);		
	});	
});