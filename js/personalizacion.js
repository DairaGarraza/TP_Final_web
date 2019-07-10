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

	$("input[name='tamanioFuente']").change(function(){
		var tamanioFuente = $("input[name='tamanioFuente']:checked").val();
		$("#tituloVistaPrevia").css("font-size", tamanioFuente);
	});

	$("input[name='ubicacion']").change(function(){

		$(".fecha").css("top", "0px");
		$(".fecha").css("right", "0px");
		$(".fecha").css("left", "0px");
		$(".fecha").css("bottom", "0px");

		var ubicacion = $("input[name='ubicacion']:checked").val();
		if (ubicacion == "abajo") {
			$(".fecha").css("top", "");
			$(".fecha").css("left", "");
		} else if (ubicacion == "arribaIzquierda") {
			$(".fecha").css("bottom", "");
			$(".fecha").css("right", "");
		} else if (ubicacion == "arribaDerecha") {
			$(".fecha").css("bottom", "");
			$(".fecha").css("left", "");
		}
	});

	$("input[name='fondo']").change(function(){
		var color = $("input[name='fondo']:checked").val();
		$(".vista-previa").css("background-color", color);		
	});	
});