$(document).ready(function() {
	$(window).scroll(function () {
		var scroll = $(this).scrollTop();
		$(".headerFlex").css({
			transform: "translate(0%, " + scroll / 10 + "%"
		});
	});
	$('*').on('click', 'a', function () {
		var href = $(this).attr('href');
		var top = $(href).offset().top;
		$('body, html').animate({
			scrollTop: top
		}, 1000);
		return false;
	});

	$('.footerInput, .headerInput').focus(function () {
		$(this).siblings('.labelBox').addClass('focus');
		if ($(this).siblings('.headerLabel')) {
			$('form').attr('class', 'headerForm').addClass('formFocus');
			$(this).siblings('.headerLabel').addClass('focusPlus');
		}
	});
	$('.footerInput, .headerInput').focusout(function () {
		if ($(this).val() === '') {
			$(this).siblings('.labelBox').removeClass('focus');
			if ($(this).siblings('.headerLabel')) {
				$('form').attr('class', 'headerForm').removeClass('formFocus');
				$(this).siblings('.headerLabel').removeClass('focusPlus');
			}
		}
	});

		// ajax
	$('.headerBtn').click(function (e) {

		city = '';
		cityReg = $('.city').val().match(/\D/ig);
		var result = cityReg.join('');

		if (result = 'lviv' || 'львов' || 'львів') {
			if ($('h3').is('.cityName')) {
				$('.box').css({
					visibility: 'visible'
				});
				return false;
			} else {
				lviv();
			}
		}

		$('.headerInput').blur();

		e.preventDefault();
		return false;

	});

	$('.close').click(function () {
		$('.box').css({
			visibility: 'hidden'
		});
	});

		// open/hideSlide
	function openHideSlide () {
		$('.panelDesc').not($(this).next()).slideUp(500);
		$(this).next().slideToggle(500);
	}



		// Lviv
	function lviv () {

		$('.box').css({
			visibility: 'visible'
		});

		var str = '{"name": "Львов", "description": "Львов – замечательный, архитектурно и культурно насыщенный город Украины, который знаменит по всей Европе. Собираясь посетить этот замечательный город, лучше взять с собой дополнительную карту памяти.", "gallery": "Галерея", "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ullam inventore perspiciatis quaerat, ab possimus sed error itaque quod! Provident ut placeat corrupti delectus aliquid recusandae iste quibusdam ipsam totam."}';
		str = JSON.parse(str);
		$('<h3></h3>').html(str.name).addClass('cityName').appendTo('.info');
		$('<p></p>').html(str.description).addClass('shortDescription').appendTo('.info');
			// accordion
		$('<h3></h3>').html('Пешие прогулки по Львову').addClass('lvivWalkingTitle').appendTo('.info');
		$('<div></div>').addClass('accordeon').css({
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexWrap: 'nowrap',
			flexDirection: 'column'
		}).appendTo('.info');
		for (var i = 1; i < 5; i++) {
			$('<div></div>').addClass('panelDesc' + [i]).css({
				width: '80%',
				height: '40px',
				backgroundColor: '#AF7575',
				cursor: 'pointer',
				margin: '10px',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center'
			}).click(openHideSlide).appendTo('.accordeon');
			$('<span />').css({
				display: 'inlineBlock',
				lineHeight: '40px',
				marginLeft: '10px'
			}).addClass('wallkingName' + [i]).appendTo('.panelDesc' + [i]);
			$('<span>').addClass('arrowBox').appendTo('.panelDesc' + [i]);
			$('<i>').addClass('fas fa-arrow-down').appendTo('.arrowBox' + [i]);
			$('<div></div>').addClass('panelContent' + [i]).css({
				display: 'none',
				width: '200px',
				height: '100px',
				width: '80%'
			}).appendTo('.accordeon');
			$('<span />').css({
				display: 'inlineBlock',
				lineHeight: '25px',
				marginLeft: '10px',
				height: 'auto'
			}).addClass('tabContent' + [i]).appendTo('.panelContent' + [i]);
		}
		$('.wallkingName1').html('Пеший маршрут "Крышами Львова"');
		$('.wallkingName2').html('Пеший маршрут "Средневековый Львов');
		$('.wallkingName3').html('Пеший маршрут "Замки Львова"');
		$('.wallkingName4').html('Пеший маршрут "WALLKING NAME"');

		$('.tabContent1').html('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor aut illo repellendus sequi, reprehenderit tenetur necessitatibus culpa. Unde magni veniam est ex vero nostrum, id soluta esse vel eligendi libero.');
		$('.tabContent2').html('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio pariatur quibusdam ullam impedit explicabo nulla, esse doloribus, reprehenderit at est autem. Quo pariatur illum quos libero nesciunt, iure repudiandae quibusdam.');
		$('.tabContent3').html('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum modi accusamus dolores dicta, repudiandae veritatis cupiditate ut vitae eligendi quibusdam neque placeat iure, necessitatibus delectus alias illo consectetur saepe doloribus!');
		$('.tabContent4').html('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quae adipisci ab dolorem veritatis! Eaque, ipsa temporibus, laudantium, in quas sed, non fuga numquam neque eos est consectetur rem unde!');

			// gallery
		$('<div></div>').addClass('gallery').appendTo('.info');
			// row
		$('<div></div>').addClass('row').appendTo('.gallery');
			// column
		$('<div></div>').addClass('column1 column').appendTo('.row');

		$('<div></div>').addClass('column2 column').appendTo('.row');

		$('<div></div>').addClass('column3 column').appendTo('.row');
		for (var i = 0; i < 2; i++) {
			$('<img>').attr({
				src: 'http://journey-tips.zzz.com.ua/image/lvivSlide' + [i] + '.jpg'
			}).css({
				width: '100%',
				height: '170px'
			}).appendTo('.column1');
		}
		for (var k = 2; k < 4; k++) {
			$('<img>').attr({
				src: 'http://journey-tips.zzz.com.ua/image/lvivSlide' + [k] + '.jpg'
			}).css({
				width: '100%',
				height: '170px'
			}).appendTo('.column2');
		}
		for (var j = 4; j < 6; j++) {
			$('<img>').attr({
				src: 'http://journey-tips.zzz.com.ua/image/lvivSlide' + [j] + '.jpg'
			}).css({
				width: '100%',
				height: '170px'
			}).appendTo('.column3');
		}
	}



		// poltava
	function poltava () {
		$('.box').css({
			visibility: 'visible'
		});

		var str = '{"name": "Львов", "description": "Львов – замечательный, архитектурно и культурно насыщенный город Украины, который знаменит по всей Европе. Собираясь посетить этот замечательный город, лучше взять с собой дополнительную карту памяти.", "gallery": "Галерея", "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ullam inventore perspiciatis quaerat, ab possimus sed error itaque quod! Provident ut placeat corrupti delectus aliquid recusandae iste quibusdam ipsam totam."}';
		str = JSON.parse(str);
		$('<h3></h3>').html(str.name).addClass('cityName').appendTo('.info');
		$('<p></p>').html(str.description).addClass('shortDescription').appendTo('.info');
			// accordion
		$('<div></div>').addClass('accordeon').css({
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexWrap: 'nowrap',
			flexDirection: 'column'
		}).appendTo('.info')
		for (var i = 1; i < 5; i++) {
			$('<div></div>').addClass('panelDesc' + [i]).css({
				width: '80%',
				height: '40px',
				backgroundColor: '#AF7575',
				cursor: 'pointer',
				margin: '10px',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center'
			}).click(openHideSlide).appendTo('.accordeon');
			$('<span />').css({
				display: 'inlineBlock',
				lineHeight: '40px',
				marginLeft: '10px'
			}).addClass('wallkingName' + [i]).appendTo('.panelDesc' + [i]);
			$('<span>').addClass('arrowBox').appendTo('.panelDesc' + [i]);
			$('<i>').addClass('fas fa-arrow-down').appendTo('.arrowBox' + [i]);
			$('<div></div>').addClass('panelContent' + [i]).css({
				display: 'none',
				width: '200px',
				height: '100px',
				width: '80%'
			}).appendTo('.accordeon');
			$('<span />').css({
				display: 'inlineBlock',
				lineHeight: '25px',
				marginLeft: '10px',
				height: 'auto'
			}).addClass('tabContent' + [i]).appendTo('.panelContent' + [i]);
		}
		$('.wallkingName1').html('Пеший маршрут "Крышами Львова"');
		$('.wallkingName2').html('Пеший маршрут "Средневековый Львов');
		$('.wallkingName3').html('Пеший маршрут "Замки Львова"');
		$('.wallkingName4').html('Пеший маршрут "WALLKING NAME"');

		$('.tabContent1').html('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor aut illo repellendus sequi, reprehenderit tenetur necessitatibus culpa. Unde magni veniam est ex vero nostrum, id soluta esse vel eligendi libero.');
		$('.tabContent2').html('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio pariatur quibusdam ullam impedit explicabo nulla, esse doloribus, reprehenderit at est autem. Quo pariatur illum quos libero nesciunt, iure repudiandae quibusdam.');
		$('.tabContent3').html('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum modi accusamus dolores dicta, repudiandae veritatis cupiditate ut vitae eligendi quibusdam neque placeat iure, necessitatibus delectus alias illo consectetur saepe doloribus!');
		$('.tabContent4').html('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quae adipisci ab dolorem veritatis! Eaque, ipsa temporibus, laudantium, in quas sed, non fuga numquam neque eos est consectetur rem unde!');

			// gallery
		$('<div></div>').addClass('gallery').appendTo('.info');
			// row
		$('<div></div>').addClass('row').appendTo('.gallery');
			// column
		$('<div></div>').addClass('column1 column').appendTo('.row');

		$('<div></div>').addClass('column2 column').appendTo('.row');

		$('<div></div>').addClass('column3 column').appendTo('.row');
		for (var i = 0; i < 2; i++) {
			$('<img>').attr({
				src: 'http://journey-tips.zzz.com.ua/image/lvivSlide' + [i] + '.jpg'
			}).css({
				width: '100%',
				height: '170px'
			}).appendTo('.column1');
		}
		for (var k = 2; k < 4; k++) {
			$('<img>').attr({
				src: 'http://journey-tips.zzz.com.ua/image/lvivSlide' + [k] + '.jpg'
			}).css({
				width: '100%',
				height: '170px'
			}).appendTo('.column2');
		}
		for (var j = 4; j < 6; j++) {
			$('<img>').attr({
				src: 'http://journey-tips.zzz.com.ua/image/lvivSlide' + [j] + '.jpg'
			}).css({
				width: '100%',
				height: '170px'
			}).appendTo('.column3');
		}
	}



		// lutsk
	function lutsk () {
		$('.box').css({
			visibility: 'visible'
		});

		var str = '{"name": "Львов", "description": "Львов – замечательный, архитектурно и культурно насыщенный город Украины, который знаменит по всей Европе. Собираясь посетить этот замечательный город, лучше взять с собой дополнительную карту памяти.", "gallery": "Галерея", "text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ullam inventore perspiciatis quaerat, ab possimus sed error itaque quod! Provident ut placeat corrupti delectus aliquid recusandae iste quibusdam ipsam totam."}';
		str = JSON.parse(str);
		$('<h3></h3>').html(str.name).addClass('cityName').appendTo('.info');
		$('<p></p>').html(str.description).addClass('shortDescription').appendTo('.info');
			// accordion
		$('<div></div>').addClass('accordeon').css({
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexWrap: 'nowrap',
			flexDirection: 'column'
		}).appendTo('.info')
		for (var i = 1; i < 5; i++) {
			$('<div></div>').addClass('panelDesc' + [i]).css({
				width: '80%',
				height: '40px',
				backgroundColor: '#AF7575',
				cursor: 'pointer',
				margin: '10px',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center'
			}).click(openHideSlide).appendTo('.accordeon');
			$('<span />').css({
				display: 'inlineBlock',
				lineHeight: '40px',
				marginLeft: '10px'
			}).addClass('wallkingName' + [i]).appendTo('.panelDesc' + [i]);
			$('<span>').addClass('arrowBox').appendTo('.panelDesc' + [i]);
			$('<i>').addClass('fas fa-arrow-down').appendTo('.arrowBox' + [i]);
			$('<div></div>').addClass('panelContent' + [i]).css({
				display: 'none',
				width: '200px',
				height: '100px',
				width: '80%'
			}).appendTo('.accordeon');
			$('<span />').css({
				display: 'inlineBlock',
				lineHeight: '25px',
				marginLeft: '10px',
				height: 'auto'
			}).addClass('tabContent' + [i]).appendTo('.panelContent' + [i]);
		}
		$('.wallkingName1').html('Пеший маршрут "Крышами Львова"');
		$('.wallkingName2').html('Пеший маршрут "Средневековый Львов');
		$('.wallkingName3').html('Пеший маршрут "Замки Львова"');
		$('.wallkingName4').html('Пеший маршрут "WALLKING NAME"');

		$('.tabContent1').html('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor aut illo repellendus sequi, reprehenderit tenetur necessitatibus culpa. Unde magni veniam est ex vero nostrum, id soluta esse vel eligendi libero.');
		$('.tabContent2').html('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio pariatur quibusdam ullam impedit explicabo nulla, esse doloribus, reprehenderit at est autem. Quo pariatur illum quos libero nesciunt, iure repudiandae quibusdam.');
		$('.tabContent3').html('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum modi accusamus dolores dicta, repudiandae veritatis cupiditate ut vitae eligendi quibusdam neque placeat iure, necessitatibus delectus alias illo consectetur saepe doloribus!');
		$('.tabContent4').html('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quae adipisci ab dolorem veritatis! Eaque, ipsa temporibus, laudantium, in quas sed, non fuga numquam neque eos est consectetur rem unde!');

			// gallery
		$('<div></div>').addClass('gallery').appendTo('.info');
			// row
		$('<div></div>').addClass('row').appendTo('.gallery');
			// column
		$('<div></div>').addClass('column1 column').appendTo('.row');

		$('<div></div>').addClass('column2 column').appendTo('.row');

		$('<div></div>').addClass('column3 column').appendTo('.row');
		for (var i = 0; i < 2; i++) {
			$('<img>').attr({
				src: 'http://journey-tips.zzz.com.ua/image/lvivSlide' + [i] + '.jpg'
			}).css({
				width: '100%',
				height: '170px'
			}).appendTo('.column1');
		}
		for (var k = 2; k < 4; k++) {
			$('<img>').attr({
				src: 'http://journey-tips.zzz.com.ua/image/lvivSlide' + [k] + '.jpg'
			}).css({
				width: '100%',
				height: '170px'
			}).appendTo('.column2');
		}
		for (var j = 4; j < 6; j++) {
			$('<img>').attr({
				src: 'http://journey-tips.zzz.com.ua/image/lvivSlide' + [j] + '.jpg'
			}).css({
				width: '100%',
				height: '170px'
			}).appendTo('.column3');
		}	}
});