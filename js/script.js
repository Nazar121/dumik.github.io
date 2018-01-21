
$(document).ready(function(){
 $("#nav-manu").on("click","#nav-a", function (event) {
     event.preventDefault();
     var id  = $(this).attr('href'),
         top = $(id).offset().top;
     $('body,html').animate({scrollTop: top}, 2000);
 });
});

