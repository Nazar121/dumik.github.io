
$(document).ready(function(){
 $("#nav-manu").on("click","#nav-a", function (event) {
     event.preventDefault();
     var id  = $(this).attr('href'),
         top = $(id).offset().top;
     $('body,html').animate({scrollTop: top}, 2000);
 });
});
;


var menuOpen = function(openMenu, openClose) {
	var openMenu = document.getElementById('open-menu');
	var closeMenu =  document.getElementById('close-menu');
		
		document.body.style.overflow = "hidden";

		openMenu.style.display = "none";
		closeMenu.style.display = "block";


		return closeMenu;
};

var menuClose = function() {
	var openMenu = document.getElementById('open-menu');
	var closeMenu =  document.getElementById('close-menu');
		
		document.body.style.overflow = "auto";

		openMenu.style.display = "block";
		closeMenu.style.display = "none";


		return openMenu;
};






