;

$(document).ready(function(){

	// --- Gallery ---
	
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
		{id: 'test_1', images: ['./img/7.jpg']},
		{id: 'test_2', images: ['./img/5.jpg', './img/5.jpg', './img/18.jpg']},
		{id: 'test_3', images: ['./img/9.jpg']},
		{id: 'test_4', images: ['./img/18.jpg']},
		{id: 'test_5', images: ['./img/16.jpg']}
	];
	function gallery() {
		for (var i = 0; i<galleryArr.length; i++) {
			var block = '<div class="col-4">';
			block += '<div class="img" id="'+ galleryArr[i].id +'" style="background: url(' + galleryArr[i].images[0] + ');  background-size: cover; background-position: center;" data-toggle="modal" data-target="#modal">';
			block +=  (galleryArr[i].images.length > 1) ? '<i class="far fa-images someImg"></i></div>' : '</div>';
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
				instagramSliderContent(galleryArr[i]);
				for (var i=0; i<galleryArr.length; i++) {
					if (galleryArr[i].id === slideId) {
						var currentItem = i + 1;
						if (currentItem === galleryArr.length) {
							showArrow('left');
						} else if (currentItem === 1) {
							showArrow('right');
						} else {
							showArrow('both');
						}
					}
				}
				break;
			}
		}
	});


	// --- InstagramSlider ---

	// This function draws slider's content
	function instagramSliderContent(currentItem) {
		$('.instagramImages').css({
			background: 'url(' + currentItem.images[0] + ')',
			'background-size': 'cover',
			'background-position': 'center'
		});
		$('.instagramInfo').text(currentItem.id);
	}

	// show arrow left, right ar both
	function showArrow(arrow) {
		(arrow === undefined) ? arrow = 'both' : arrow;
		switch(arrow.toLowerCase()) {
			case 'left':
				$('.instagramSlider-right').hide();
				$('.instagramSlider-left').show();
				break;
			case 'right':
				$('.instagramSlider-left').hide();
				$('.instagramSlider-right').show();
				break;
			default:
				$('.instagramSlider-left').show();
				$('.instagramSlider-right').show();
				break;
		}
	}

	// Click arrow to left
	$('.instagramSlider-left').on('click', function() {
		for (var i=0; i<galleryArr.length; i++) {
			if (galleryArr[i].id === slideId) {
				var currentItem = i - 1;
				if (currentItem == 0) {
					showArrow('right');
				} else {
					showArrow('both');
				}
				instagramSliderContent(galleryArr[currentItem]);
				slideId = galleryArr[currentItem].id;
				return;
			}
		}
	});

	// Click arrow to right
	$('.instagramSlider-right').on('click', function() {
		for (var i=0; i<galleryArr.length; i++) {
			if (galleryArr[i].id === slideId) {
				var currentItem = i + 1;
				if (currentItem === galleryArr.length-1) {
					$('.instagramSlider-right').hide();
					$('.instagramSlider-left').show();
				} else {
					$('.instagramSlider-right').show();
					$('.instagramSlider-left').show();
				}
				instagramSliderContent(galleryArr[currentItem]);
				slideId = galleryArr[currentItem].id;
				return;
			}
		}
	});
	// The end.
});