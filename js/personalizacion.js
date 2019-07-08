$(document).ready(function(){

	$("#tituloEvento").keyup(function() {

		var titulo = $(this).val();
		if (titulo == "") {
			$("#tituloVistaPrevia").text("Titulo");
		} else {
			$("#tituloVistaPrevia").text($(this).val());
		}		
	});
});