$(document).ready(function() {
	$(window).scroll(function () {
		var scroll = $(this).scrollTop();
		$(".headerFlex").css({
			transform: "translate(0%, " + scroll / 10 + "%"
		});
	});
	$('.scrollDown, .menu').on('click', 'a', function () {
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
		$('.panelDesc').not($(this).next()).slideUp(350);
		$(this).next().slideToggle(350);
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

			// gallery
		$('<h3></h3>').css({
			paddingTop: '10px',
			textAlign: 'center'
		}).html('Фото').appendTo('.info');
		$('<div></div>').css({
			margin: '0 -10px'
		}).addClass('gallery').appendTo('.info');
		for (var i = 0; i < 6; i++) {
			$('<img>').attr({
				src: 'http://journey-tips.zzz.com.ua/image/lvivSlide' + [i] + '.jpg',
				alt: ''
			}).css({
				width: '80%',
				height: '200px',
				padding: '0 10px'
			}).appendTo('.gallery');
		}
		$('.gallery').slick({
			arrows: false,
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			adaptiveHeight: true,
			responsive: [
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed: 2000,
					adaptiveHeight: true,
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed: 2000,
					adaptiveHeight: true,
				}
			}
			]
		});

			// tours
		$('<div></div>').addClass('accordeon').css({
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			flexWrap: 'nowrap',
			flexDirection: 'column'
		}).appendTo('.info');
		$('<h3></h3>').css({
			textAlign: 'center'
		}).css({
			paddingTop: '10px'
		}).html('Лучшие экскурсии по Львову').addClass('lvivWalkingTitle').appendTo('.accordeon');

		for (var i = 1; i < 7; i++) {
			$('<div></div>').addClass('panelDesc' + [i]).css({
				width: '80%',
				height: '40px',
				backgroundColor: '#AF7575',
				cursor: 'pointer',
				margin: '10px',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				borderRadius: '3px'
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
				height: 'auto',
				width: '80%'
			}).appendTo('.accordeon');
			$('<img>').attr({
				src: 'http://journey-tips.zzz.com.ua/image/lvivTour' + [i] + '.jpg',
				alt: ''
			}).css({
				width: '600px',
				height: '400px'
			}).appendTo('.panelContent' + [i]);
			$('<span />').css({
				display: 'inlineBlock',
				lineHeight: '25px',
				marginLeft: '10px',
				height: 'auto'
			}).addClass('tabContent' + [i]).appendTo('.panelContent' + [i]);
			$('<p></p>').css({
				backgroundColor: '#AF7575',
				color: '#FFF'
			}).addClass('tabPrice' + [i]).appendTo('.panelContent' + [i]);
		}

		// var wallkingName = '{"walkingName1": "Крышами Львова", "walkingName2": "Средневековый Львов", "walkingName3": "Храмы Львова", "walkingName4": "Замки Львова", "walkingName5": "Мистический Львов"}';
		// wallkingName = JSON.parse(wallkingName);

		// for (var i = 1; 1 < 6; i++) {
		// 	$('.wallkingName' + [i]).html(wallkingName.wallkingName[i]);
		// }

		$('.wallkingName1').html('"Крышами Львова"');
		$('.wallkingName2').html('"Средневековый Львов');
		$('.wallkingName3').html('"Храмы Львова"');
		$('.wallkingName4').html('"Замки Львова"');
		$('.wallkingName5').html('"Мистический Львов"');
		$('.wallkingName6').html('"Лычаковское кладбище"');

		$('.tabContent1').html('В сопровождении экскурсовода туристы отправятся по крышам старого города. Всего в программе предусматривается поход по 6 крышам старинных домов.');
		$('.tabContent2').html('Самая обычная экскурсия, которую называют «ознакомительной», для Львова становится интереснейшей прогулкой.');
		$('.tabContent3').html('Главное достояние Львова – его соборы. За время экскурсии туристы постетят самые зназначительные сакральные постройки греко-католиков, католиков, православных, ... .');
		$('.tabContent4').html('В ходе экскурсии гости проедут по  \"Львовскому Золотому кольцу\" и увидят триглавных замка области: Олеський, Подгорецкий и Золочевский, они являются красивейшими ов всей стране.');
		$('.tabContent5').html('Никто не будет спорить, что Львов с его древними постройками и историческим прошлым полон настоящей мистики. Множество тайн скрывает в себе город.');
		$('.tabContent6').html('На нём расположены более чем 3500 памятников и склепов. с 2008 года на его территории проводят ночные экскурсии, где можно с головой окунуться в особую загадочную атмосферу и получить самые необычное впечатления от экскурсии.')

		$('.tabPrice1').html('Стоимость: 250 гривен(2,5часа), вся экскурсия на 1 - 5 человек. Время и место: договорное."');
		$('.tabPrice2').html('Стоимость: 60 взрослый/, индивидуальная экскурсия: 100грн/час');
		$('.tabPrice3').html('Стоимость: 70 взрослый/50 десткий гривен(2,5часа)"');
		$('.tabPrice4').html('Стоимость: 250 гривен с человека, из Львова автобус отправляется в 10:00, возвращается к 18:00');
		$('.tabPrice5').html('Стоимость: 90гривен/час, маршрут начинается в 19:00и длится 2-3 часа.');
		$('.tabPrice6').html('Стоимость посещения: 30 взрослый/20 десткий гривен, а экскурсия: от 130 гривен.');

			// restaurants
		$('<h3></h3>').css({
			textAlign: 'center'
		}).css({
			paddingTop: '10px'
		}).html('Креативные заведения Львова').addClass('lvivrestaurants').appendTo('.accordeon');

		for (var i = 1; i < 10; i++) {
			$('<div></div>').addClass('panelDescRestaurant' + [i]).css({
				width: '80%',
				height: '40px',
				backgroundColor: '#AF7575',
				cursor: 'pointer',
				margin: '10px',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				borderRadius: '3px'
			}).click(openHideSlide).appendTo('.accordeon');
			$('<span />').css({
				display: 'inlineBlock',
				lineHeight: '40px',
				marginLeft: '10px'
			}).addClass('restaurantName' + [i]).appendTo('.panelDescRestaurant' + [i]);
			$('<span>').addClass('arrowBox').appendTo('.panelDescRestaurant' + [i]);
			$('<i>').addClass('fas fa-arrow-down').appendTo('.arrowBox' + [i]);

			$('<div></div>').addClass('panelRestaurant' + [i]).css({
				display: 'none',
				height: 'auto',
				width: '80%'
			}).appendTo('.accordeon');
			$('<span />').css({
				display: 'inlineBlock',
				lineHeight: '25px',
				marginLeft: '10px',
				height: 'auto'
			}).addClass('restaurantContent' + [i]).appendTo('.panelRestaurant' + [i]);
			$('<h3>').css({
				textAlign: 'center',
				padding: '10px 0 10px 0'
			}).addClass('restaurantLink' + [i]).appendTo('.panelRestaurant' + [i]);
			$('<a></a>').css({
				textDecoration: 'none',
				color: '#AF7575'
			}).appendTo('.restaurantLink' + [i]);
		}

		$('.restaurantName1').html('"Керосиновая лампа"');
		$('.restaurantName2').html('"Дом легенд"');
		$('.restaurantName3').html('"Краивка"');
		$('.restaurantName4').html('"Львовская мастерская шоколада"');
		$('.restaurantName5').html('"Львовские пляцки"');
		$('.restaurantName6').html('"Самый дорогой ресторан Галиции"');
		$('.restaurantName7').html('Театр пива "Правда"');
		$('.restaurantName8').html('"Форель, хлеб и вино"');
		$('.restaurantName9').html('Кулинарная студия "Кривая Липа"');

		$('.restaurantContent1').html('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nam, est necessitatibus magni tempora maiores iusto, ');
		$('.restaurantContent2').html('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nam, est necessitatibus magni tempora maiores iusto, ');
		$('.restaurantContent3').html('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nam, est necessitatibus magni tempora maiores iusto, ');
		$('.restaurantContent4').html('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nam, est necessitatibus magni tempora maiores iusto, ');
		$('.restaurantContent5').html('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nam, est necessitatibus magni tempora maiores iusto, ');
		$('.restaurantContent6').html('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nam, est necessitatibus magni tempora maiores iusto, ');
		$('.restaurantContent7').html('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nam, est necessitatibus magni tempora maiores iusto, ');
		$('.restaurantContent8').html('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nam, est necessitatibus magni tempora maiores iusto, ');
		$('.restaurantContent9').html('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nam, est necessitatibus magni tempora maiores iusto, ');

			// hostels
		$('<h3></h3>').css({
			textAlign: 'center'
		}).css({
			paddingTop: '10px'
		}).html('Лучшие хостелы').addClass('lvivHostels').appendTo('.accordeon');

		for (var i = 1; i < 6; i++) {
			$('<div></div>').addClass('panelDescHostel' + [i]).css({
				width: '80%',
				height: '40px',
				backgroundColor: '#AF7575',
				cursor: 'pointer',
				margin: '10px',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				borderRadius: '3px'
			}).click(openHideSlide).appendTo('.accordeon');
			$('<span />').css({
				display: 'inlineBlock',
				lineHeight: '40px',
				marginLeft: '10px'
			}).addClass('hostelName' + [i]).appendTo('.panelDescHostel' + [i]);
			$('<span>').addClass('arrowBox').appendTo('.panelDescHostel' + [i]);
			$('<i>').addClass('fas fa-arrow-down').appendTo('.arrowBox' + [i]);

			$('<div></div>').addClass('panelHostel' + [i]).css({
				display: 'none',
				height: 'auto',
				width: '80%'
			}).appendTo('.accordeon');
			$('<span />').css({
				display: 'inlineBlock',
				lineHeight: '25px',
				marginLeft: '10px',
				height: 'auto'
			}).addClass('hostelContent' + [i]).appendTo('.panelHostel' + [i]);
			$('<h3>').css({
				textAlign: 'center',
				padding: '10px 0 10px 0'
			}).addClass('hostelLink' + [i]).appendTo('.panelHostel' + [i]);
			$('<a></a>').css({
				textDecoration: 'none',
				color: '#AF7575'
			}).appendTo('.hostelLink' + [i]);
			$('<p></p>').css({
				backgroundColor: '#AF7575',
				color: '#FFF'
			}).addClass('hostelPrice' + [i]).appendTo('.panelHostel' + [i]);
		}

		$('.hostelName1').html('Anti Hostel Forrest');
		$('.hostelName2').html('The Georgehouse Hostel');
		$('.hostelName3').html('Cherry Hostel');
		$('.hostelName4').html('Post House Hostel');
		$('.hostelName5').html('Хостел Вилла Юлиетка');

		$('.hostelContent1').html('Анти-хостел Форрест находится в центре Львова. Поездка от аеропорта займёт всеголишь 20 минут, а от вокзала 15 минут. Хостел отличается стильным дизайном. Убирают здесь ежедневно. На територии присутсвует бесплатный WI-FI, ванная, общая кухня, кондиционеры, утюги, стиральная машина, ....');
		$('.hostelContent2').html('Хостел расположен в нескольких минутах ходьбы от центра города. На територии есть: бесплатный WI-FI, кухня, ванная, холодильник, плита, ....');
		$('.hostelContent3').html('Хостел находится в "Старом Львове" не далеко от дворца Потоцких. На територии имеется: бар, бесплатный WI-Fi, ванная, ....');
		$('.hostelContent4').html('Хостел находиться в центре города. На територии имеется: кухня, номера для некурящих, бесплатный WI-Fi, ванна, ....');
		$('.hostelContent5').html('Хостел располоден в 2.3 км от площади Рынка и в 2.8 км от вокзала. На територии имеется: номера для некурящих, бесплатный WI-FI, сад, кухня, ванна, ....');

		$('.hostelPrice1').html('Ул. Фурманская 5, От 115 грн/ночь');
		$('.hostelPrice2').html('Ул. Устияновича 8, от 110 грн/ночь');
		$('.hostelPrice3').html('Ул. Костюшки 5, от 95 грн/ночь');
		$('.hostelPrice4').html('Ул. Словатського 8, от 120грн/ночь');
		$('.hostelPrice5').html('Ул. Метрологическая 14, от 75грн/ночь');

		$('.hostelLink1 a').attr({
			href: 'https://antihostel.com.ua/'
		}).html('https://antihostel.com.ua/');
		$('.hostelLink2 a').attr({
			href: 'https://georgehouse.com.ua/hostel/'
		}).html('https://georgehouse.com.ua/hostel/');
		$('.hostelLink3 a').attr({
			href: 'http://fruit-hostels.lviv.ua/ru'
		}).html('http://fruit-hostels.lviv.ua/ru');
		$('.hostelLink4 a').attr({
			href: 'http://posthousehostel.com.ua/RU/'
		}).html('http://posthousehostel.com.ua/RU/');
		$('.hostelLink5 a').attr({
			href: 'http://www.hotelslvov.com.ua/xostel-villa-yulietka'
		}).html('http://www.hotelslvov.com.ua/xostel-villa-yulietka');

			// hotels
		$('<h3></h3>').css({
			textAlign: 'center'
		}).css({
			paddingTop: '10px'
		}).html('Отели').addClass('lvivhotels').appendTo('.accordeon');

		for (var i = 1; i < 9; i++) {
			$('<div></div>').addClass('panelDescHotel' + [i]).css({
				width: '80%',
				height: '40px',
				backgroundColor: '#AF7575',
				cursor: 'pointer',
				margin: '10px',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				borderRadius: '3px',
				overflow: 'hidden'
			}).click(openHideSlide).appendTo('.accordeon');
			$('<span />').css({
				display: 'inlineBlock',
				lineHeight: '40px',
				marginLeft: '10px'
			}).addClass('hotelName' + [i]).appendTo('.panelDescHotel' + [i]);
			$('<span>').addClass('arrowBox').appendTo('.panelDescHotel' + [i]);
			$('<i>').addClass('fas fa-arrow-down').appendTo('.arrowBox' + [i]);

			$('<div></div>').addClass('panelHotel' + [i]).css({
				display: 'none',
				height: 'auto',
				width: '80%'
			}).appendTo('.accordeon');
			$('<span />').css({
				display: 'inlineBlock',
				lineHeight: '25px',
				marginLeft: '10px',
				height: 'auto'
			}).addClass('hotelContent' + [i]).appendTo('.panelHotel' + [i]);
			$('<h3>').css({
				textAlign: 'center',
				padding: '10px 0 10px 0'
			}).addClass('hotelLink' + [i]).appendTo('.panelHotel' + [i]);
			$('<a></a>').css({
				textDecoration: 'none',
				color: '#AF7575'
			}).appendTo('.hotelLink' + [i]);
			$('<p></p>').css({
				backgroundColor: '#AF7575',
				color: '#FFF'
			}).addClass('hotelPricePrice' + [i]).appendTo('.panelHotel' + [i]);
		}

		$('.hotelName1').html('Отель Леополис (<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>)');
		$('.hotelName2').html('Отель Nobilis (<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>)');
		$('.hotelName3').html('Гостиница Citadel inn (<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>)');
		$('.hotelName4').html('Atlas Deluxe (<i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i>)');
		$('.hotelName5').html('Kavalier Boutique Hotel (<i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i>)');
		$('.hotelName6').html('Отель Eney (<i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i>)');
		$('.hotelName7').html('Отель Швейцарский (<i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i>)');
		$('.hotelName8').html('LH HOTEL & SPA (<i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i>)');

		$('.fa-star').css({
			fontFamily: 'fontAwesome'
		});


	}


		// poltava
	function poltava () {
		// # code
	}



		// lutsk
	function lutsk () {
		// # code
	}
});