$(function(){

	const spBlakePoint = 640;

		//PCのナビゲーション
		$(".pc-menu-1st__list").hover(function(){
			if (spBlakePoint <= $(window).width()) {
					$(this).children(".pc-menu-2nd").slideToggle();
			}
		});

	/* SP MenuBtn */
	$(".spHd__menu").click(function(){
		var w = $(window).width();
		if (w <= spBlakePoint) {
			$( this ).toggleClass( 'active' );
			$( ".spMenu1st" ).slideToggle();
			return false;
		}
	});

	/* SP Accordion */
	$(".spMenu1st > li > span").click(function(){
		var w = $(window).width();
		if (w <= spBlakePoint) {
			$( this ).toggleClass( 'active' );
			$( this ).next(".spMenu2nd").slideToggle();

			return false;
		}
	});



	/* ===================================
	 FOR PAGES
	===================================  */
	/*
	 dl class="illustCol" 
	 imgがある場合のみ、スタイル適用
	*/
	$(function(){
		$("dl.illustCol > dt:has(img)").addClass("hasImg");
	});

	/*
	 FAQ Toggle
	*/
	$("dl.faq > dt").click(function(){
		$( this ).next("dd").slideToggle();
		return false;
	});

	/*
	 FADEIN ANIMATION
	*/
	$(window).scroll(function (){
		$('.effect-fade').each(function(){
				var elemPos = $(this).offset().top;
				var scroll = $(window).scrollTop();
				var windowHeight = $(window).height();
				if (scroll > elemPos - windowHeight + 100){
				$(this).addClass('effect-scroll');
			}
		});
	});








});
