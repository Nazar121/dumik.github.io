
$(document).ready(function(){
	$("#nav-manu").on("click","#nav-a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 2000);
	});


	// Nazar's code
	$( window ).resize(function() {
		square();
	});

	function square() {
		// console.log($('.gallery > .row > div').innerWidth());
		var width = $('.gallery > .row > div').innerWidth();
		$('.gallery > .row > div').css({
			height: width
		});
	}
	square();

	var galleryArr = [
		{id: 'test_1', images: ['./img/7.jpg', './img/5.jpg', './img/18.jpg']},
		{id: 'test_2', images: ['./img/5.jpg']},
		{id: 'test_3', images: ['./img/9.jpg']},
		{id: 'test_4', images: ['./img/18.jpg']},
		{id: 'test_5', images: ['./img/16.jpg']}
	];
	function gallery() {
		for (var i = 0; i<galleryArr.length; i++) {
			var block = '<div class="col-4">';
			block += '<div class="img" id="'+ galleryArr[i].id +'" style="background: url(' + galleryArr[i].images[0] + ');  background-size: cover; background-position: center;" data-toggle="modal" data-target="#modal"></div>';
			block += '</div>';
			$('.gallery > .row').append(block);
			square();
		}
	}
	gallery();

	var slideId;
	$('.gallery .img').on('click', function(event) {
		slideId = event.target.id;
		for (var i=0; i<galleryArr.length; i++) {
			if (slideId === galleryArr[i].id) {
				// console.log(slideId);
				// console.log(galleryArr[i].id);
				$('.instagramImages').css({
					background: 'url(' + galleryArr[i].images[0] + ')',
					'background-size': 'cover',
					'background-position': 'center'
				});
				$('.instagramInfo').text(galleryArr[i].id);
				break;
			}
		}
	});

	// $('i.instagramSlider-left').on('click', function() {
	// 	console.log('slideId');
	// });

	// test com

	// $('i.instagramSlider-right').on('click', function() {
	// 	console.log('right');
	// });
	// The end.
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






