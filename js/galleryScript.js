;

$(document).ready(function(){

	// --- Gallery ---
	
	var slideId;
	var smallImageId = 0;

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
		{id: 'test_2', images: ['./img/5.jpg', './img/9.jpg', './img/18.jpg']},
		{id: 'test_3', images: ['./img/9.jpg']},
		{id: 'test_4', images: ['./img/18.jpg', './img/19.jpg']},
		{id: 'test_5', images: ['./img/16.jpg']}
	];
	function gallery() {
		for (var i = 0; i<galleryArr.length; i++) {
			var block = '<div class="col-12 col-sm-6 col-lg-4">';
			block += '<div class="img" id="'+ galleryArr[i].id +'" style="background: url(' + galleryArr[i].images[0] + ');  background-size: cover; background-position: center;" data-toggle="modal" data-target="#modal">';
			block +=  (galleryArr[i].images.length > 1) ? '<i class="far fa-images someImg"></i></div>' : '</div>';
			block += '</div>';
			$('.gallery > .row').append(block);
			square();
		}
	}
	gallery();

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
		
		smallImageId = 0;
		if (currentItem.images.length > 1) {
			var circles = '<div class="circles">'
			for(var i=0; i<currentItem.images.length; i++) {
				circles += '<span class="circle"></span>'
			}
			circles += '</div>';
			$('.instagramImages').append(circles);
			$('.instagramImages').append('<div class="smallSlider-left"><i class="fas fa-chevron-left"></i></div><div class="smallSlider-right"><i class="fas fa-chevron-right"></i></div>');
			smallSliderNav(currentItem);
		} else {
			$('.instagramImages').empty();
		}
		
		// smallSlider Click arrow to right
		$('.smallSlider-right').on('click', smallSliderArrowRight);

		// smallSlider Click arrow to left
		$('.smallSlider-left').on('click', smallSliderArrowLeft);

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


	// --- Instagram small slider ---
	// Arrow to right
	function smallSliderArrowRight() {
		var currentItem;
		for(var i=0; i<galleryArr.length; i++) {
			if (galleryArr[i].id === slideId) {
				currentItem = galleryArr[i]; 
			}
		}

		smallImageId++;
		smallSliderNav(currentItem);
	};
	
	// Arrow to left
	$('.smallSlider-left').on('click', smallSliderArrowLeft);
	function smallSliderArrowLeft() {
		var currentItem;
		for(var i=0; i<galleryArr.length; i++) {
			if (galleryArr[i].id === slideId) {
				currentItem = galleryArr[i]; 
			}
		}

		smallImageId--;
		smallSliderNav(currentItem);
	};

	// Navigation smallSlider
	function smallSliderNav(item) {
		var currentItem = item;
		var circles = $('.circles > .circle').toArray();

		for(var key in circles) {
			// console.log(key);
			$(circles[key]).removeClass('circleActive');
			if (+key === +smallImageId) {
				// console.log(circles[key]);
				$(circles[key]).addClass('circleActive');

				$('.instagramImages').css({
					background: 'url(' + currentItem.images[+smallImageId] + ')',
					'background-size': 'cover',
					'background-position': 'center'
				});
			}
		}

		(smallImageId === 0) ? $('.smallSlider-left').hide() : $('.smallSlider-left').show();
		(smallImageId === currentItem.images.length-1) ? $('.smallSlider-right').hide() : $('.smallSlider-right').show();

	};

	// The end.
});