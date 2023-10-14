jQuery(document).ready(function () {
	var headerwrap = jQuery(".header-wrap");
	jQuery(window).on("load scroll ready", function () {
		if (jQuery(this).scrollTop() > 0) {
			headerwrap.addClass("sticky");
		} else {
			headerwrap.removeClass("sticky");
		}
	});

	jQuery(".menu").on("click", function () {
		jQuery(".header-wrap .links").toggleClass("open");
		jQuery("body").toggleClass("pause");
		jQuery(this).toggleClass("open");
	});

	var headerheight = headerwrap.height();
	// Scroll Offset
	jQuery(".offset-top").on("click", function (e) {
		e.preventDefault();
		var target = jQuery(this).attr("href");
		jQuery("html, body")
			.stop()
			.animate(
				{
					scrollTop: jQuery(target).offset().top - 75,
				},
				2000,
				"swing",
				function () {}
			);
	});

	// SVG Create
	jQuery(function () {
		jQuery("img.svg").each(function () {
			var $img = jQuery(this);
			var imgID = $img.attr("id");
			var imgClass = $img.attr("class");
			var imgURL = $img.attr("src");
			jQuery.get(
				imgURL,
				function (data) {
					var $svg = jQuery(data).find("svg");
					if (typeof imgID !== "undefined") {
						$svg = $svg.attr("id", imgID);
					}
					if (typeof imgClass !== "undefined") {
						$svg = $svg.attr("class", imgClass + " replaced-svg");
					}
					$svg = $svg.removeAttr("xmlns:a");
					if (
						!$svg.attr("viewBox") &&
						$svg.attr("height") &&
						$svg.attr("width")
					) {
						$svg.attr(
							"viewBox",
							"0 0 " +
								$svg.attr("height") +
								" " +
								$svg.attr("width")
						);
					}
					$img.replaceWith($svg);
				},
				"xml"
			);
		});
	});

	//Submenu
	jQuery(
		"<span class='nav-link-toggle'><svg xmlns='http://www.w3.org/2000/svg' width='10.498' height='6' viewBox='0 0 10.498 6'><g id='arrow-down-short' transform='translate(-10.123 -15.872)'><path id='Path_1' data-name='Path 1' d='M10.344,17.093a.75.75,0,0,1,1.062,0l3.967,3.969,3.968-3.969A.751.751,0,0,1,20.4,18.154l-4.5,4.5a.75.75,0,0,1-1.062,0l-4.5-4.5a.75.75,0,0,1,0-1.062Z' transform='translate(0 -1)' fill='#0f1331' fill-rule='evenodd'/></g></svg></span>"
	).insertBefore(jQuery(".dropdown .dropdown-inner")),
		jQuery(".nav-link-toggle").on("click", function () {
			jQuery(this).toggleClass("open");
			jQuery(this).parents("li").find(".dropdown-inner").slideToggle();
			jQuery(this)
				.parents("li")
				.siblings("li")
				.find(".dropdown-inner")
				.slideUp();
			jQuery(this)
				.parents("li")
				.siblings("li")
				.find(".nav-link-toggle")
				.removeClass("open");
		});

	//Sliders

	jQuery(".customers-slider").slick({
		dots: false,
		infinite: true,
		speed: 1200,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: jQuery(".customer-slide-prev"),
		nextArrow: jQuery(".customer-slide-next"),
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	jQuery(".companies-slider").slick({
		speed: 8000,
		autoplay: true,
		autoplaySpeed: 0,
		cssEase: "linear",
		slidesToScroll: 1,
		infinite: true,
		swipeToSlide: true,
		arrows: false,
		dots: false,
		variableWidth: true,
		pauseOnHover: false,
	});

	jQuery(".companies-slider-reverse").slick({
		speed: 10000,
		autoplay: true,
		autoplaySpeed: 0,
		cssEase: "linear",
		slidesToScroll: 1,
		infinite: true,
		swipeToSlide: true,
		arrows: false,
		dots: false,
		variableWidth: true,
		pauseOnHover: false,
	});
});

jQuery(window).on("load", function () {
	var headerwrap = jQuery(".header-wrap");
	var headerheight = headerwrap.height();
	var target = jQuery("#first-sec");
	jQuery("html, body")
		.stop()
		.animate(
			{
				scrollTop: jQuery(target).offset().top - headerheight,
			},
			2000,
			"swing",
			function () {}
		);
});
