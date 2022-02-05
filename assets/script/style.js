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
});
