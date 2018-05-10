
$(document).ready(function(){
 $("#nav-manu").on("click","#nav-a", function (event) {
     event.preventDefault();
     var id  = $(this).attr('href'),
         top = $(id).offset().top;
     $('body,html').animate({scrollTop: top}, 2000);
 });
});
;

//$(document).ready(function(){
//	$("#fixedWrapper").removeClass("default");
//	$(window).scroll(function(){
//		if ($(this).scrollTop() < 5) {
//			$("#fixedWrapper").addClass("default").fadeIn('fast');
//		} else {
//			$("fixedWrapper").removeClass("default").fadeIn('fast');
//		};
//	});
//});
//
$(document).ready(function(){
		var $menu = $("#fixedWrapper");

		$(window).scroll(function(){
			if ( $(this).scrollTop() > 670
			 && $menu.hasClass("wrapper") ){
				$menu.removeClass("wrapper").addClass("fixed");
			} else if($(this).scrollTop() <= 700 && $menu.hasClass("fixed")) {
				$menu.removeClass("fixed").addClass("wrapper");
			}
		});
	});

$(document).ready(function(){
		var $menu = $("#choiceMenu");

		$(window).scroll(function(){
			if ( $(this).scrollTop() > 670
			 && $menu.hasClass("choice-menu") ){
				$menu.removeClass("choice-menu").addClass("choice-menu-fixed");
			} else if($(this).scrollTop() <= 700 && $menu.hasClass("choice-menu-fixed")) {
				$menu.removeClass("choice-menu-fixed").addClass("choice-menu");
			}
		});
	});




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

var openListMenu = function() {
	var menuChoice = document.getElementById('choiceMenu');
	var menuList = document.getElementById('listMenu');
	var contentImg = document.getElementById('content');
	var openList = document.getElementById('openList');
	var closeList = document.getElementById('closeList');



	menuChoice.style.height = "50%";
	menuList.style.transform = "translate(0%, 0%)";
	contentImg.style.transform = "translate(60%, 0%)";
	openList.style.display = "none"
	closeList.style.display = "block"
};


var closeListMenu = function() {
	var menuChoice = document.getElementById('choiceMenu');
	var menuList = document.getElementById('listMenu');
	var contentImg = document.getElementById('content');

	menuChoice.style.height = "0";
	menuList.style.transform = "translate(200%, 0%)";
	contentImg.style.transform = "translate(0%, 0%)";
	openList.style.display = "block"
	closeList.style.display = "none"
}




