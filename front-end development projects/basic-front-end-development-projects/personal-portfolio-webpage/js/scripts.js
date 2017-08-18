$(document).ready(function() {
	
	$("#nav-top").click(function() {
		/* Act on the event */
		$(".header-nav-link-2").addClass("active"); // top
		$(".header-nav-link-1").removeClass("active"); // portfolio

	});

	$("#nav-portfolio").click(function() {
		/* Act on the event */
		$(".header-nav-link-1").addClass("active");
		$(".header-nav-link-2").removeClass("active");

	});

});