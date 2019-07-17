$(document).ready(function(){ 
    $("a.desplegable").toggle(
          function() {
            $(this).parent().find(".menu").slideDown('');
          },
          function() {
            $(this).parent().find(".menu").slideUp('');
          }                        
        );
$(window).resize(function(){
    if($(this).width()>750){
        $(".desplegable").parent().find(".menu").show();
    } else{
        $(".desplegable").parent().find(".menu").hide();
    }
});
});