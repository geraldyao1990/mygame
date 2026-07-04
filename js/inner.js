nie.define("Index", function() {
	if (-1 != window.location.href.indexOf("page1") ? $(".nav ul").find("li").eq(0).addClass("on") : -1 != window.location.href.indexOf("page2") ? $(".nav ul").find("li").eq(1).addClass("on") : -1 != window.location.href.indexOf("page3") ? $(".nav ul").find("li").eq(2).addClass("on") : -1 != window.location.href.indexOf("page4") ? $(".nav ul").find("li").eq(3).addClass("on") : -1 != window.location.href.indexOf("page5") ? $(".nav ul").find("li").eq(4).addClass("on") : -1 != window.location.href.indexOf("page6") && $(".nav ul").find("li").eq(5).addClass("on"), $(".go_top").click(function() {
		$("html,body").animate({
			scrollTop: 0
		}, 500)
	}), -1 != window.location.href.indexOf("page2.html")) {
		var e = new Swiper(".banner1 .swiper-container", {
			autoplay: 3e3,
			prevButton: ".banner1 .swiper-button-prev",
			nextButton: ".banner1 .swiper-button-next",
			wrapperClass: "swiper-wrapper1",
			slideClass: "swiper-slide1",
			loop: !0,
			loopedSlides: 20
		}),
			n = new Swiper(".banner2 .swiper-container", {
				wrapperClass: "swiper-wrapper2",
				slideClass: "swiper-slide2",
				slidesPerView: "auto",
				centeredSlides: !0,
				slideToClickedSlide: !0,
				loop: !0,
				loopedSlides: 20
			});
		e.params.control = n, n.params.control = e
	}
}), nie.config.copyRight.setWhite();