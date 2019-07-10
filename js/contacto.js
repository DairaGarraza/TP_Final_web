function validar(){
	var error=false;
	var mensajeError='';
	var regextelefono = /^[0-9]{8}$/;
	var regexemail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
	var nombre=document.getElementById("nombre").value;
	var email=document.getElementById("email").value;
	var telefono=document.getElementById("telefono").value;

	if(nombre==''){
		error=true;
		mensajeError+="<p>El nombre no puede estar vacío</p>";
	}
	if (!regexemail.test(email)) {
		error=true;
		mensajeError+="<p>Poner bien el email</p>";
	}
	
	if( !regextelefono.test(telefono)){
		error=true;
		mensajeError+="<p>El telefono debe tener 8 dígitos</p>";
	}

	if(error==true){
		document.getElementById("mensaje").innerHTML=mensajeError;
		return false;
	}else{
		return true;
	}
}
