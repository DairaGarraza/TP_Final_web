function sumar(){
	if(localStorage.getItem("total")===null){	// con el triple igual esta preguntando por la posicion de memoria
		localStorage.setItem('total',1);		// se llama "estrictamente igual"
	}else{
		localStorage.setItem('total',parseInt(localStorage.getItem('total'))+1);
	}
	document.getElementById("total").innerHTML=localStorage.getItem("total");
}
window.onload=function(){
	if(localStorage.getItem("total")===null){
		document.getElementById("total").innerHTML=0;
	} else{
		document.getElementById("total").innerHTML=localStorage.getItem("total");
	}
}

$(document).ready(function(){ 
    $("a.desplegable").toggle(
          function() {
            $(this).parent().find("nav.menu").slideDown('');
          },
          function() {
            $(this).parent().find("nav.menu").slideUp('');
          }                        
        );
$(window).resize(function(){
    if($(this).width()>750){
        $("a.desplegable").parent().find("nav.menu").show();
    } else{
        $("a.desplegable").parent().find("nav.menu").hide();
    }
});
});