/* Author: 

*/

// Allows you to use the $ shortcut.  Put all your code  inside this wrapper
jQuery(document).ready(function($) {
	
	// Forces WordPress to place nice with dropdowns
 	$("li.dropdown > a").addClass('dropdown-toggle');
	$("li.dropdown > a").attr('data-toggle','dropdown');
	$("a.dropdown-toggle").append('<b class="caret"></b>');

	$("#sg-tab a").click(function(){
		$("#support-group-details").slideDown();
		// $(".navbar").css("marginTop" , "130px");
	});

	$("#support-group-details span.close a").click(function(){
		$("#support-group-details").slideUp();
		// $(".navbar").css("marginTop" , "30px");
	});

	$("#headlines").show("slide", { direction: "left" }, 2000);

	//Classes Slider
	$(".slides-container2 a").hover(function(){
		$(".slide-bg").addClass("hidden");
		$(".class-icon").addClass("hover");
	},
	function(){
		$(".slide-bg").removeClass("hidden");
		$(".class-icon").removeClass("hover");
	});

	//Fitness slide
	$("#slide-classes1 a").hover(function(){
		$("#slide-classes1 h1").css("color", "#000");
		$("img.layer-img").addClass("hidden");
	},
	function(){
		$("#slide-classes1 h1").css("color", "#4d3c76");
		$("img.layer-img").removeClass("hidden");
	});

	//Wellness slide
	$("#slide-classes2 a").hover(function(){
		$("#slide-classes2 h1").css("color", "#000");
		$("img.broccoli, img.lemon, img.tomatoes").addClass("hidden");
	},
	function(){
		$("#slide-classes2 h1").css("color", "#285775");
		$("img.broccoli, img.lemon, img.tomatoes").removeClass("hidden");
	});

	//Spirit Care slide
	$("#slide-classes3 a").hover(function(){
		$("#slide-classes3 h1").css("color", "#000");
	},
	function(){
		$("#slide-classes3 h1").css("color", "#fcecb1");
	});

	//Spirit Care slide
	$("#slide-classes4 a").hover(function(){
		$("#slide-classes4 h1").css({"color": "#000", "text-shadow": "none"});
	},
	function(){
		$("#slide-classes4 h1").css({"color": "#d086a7", "text-shadow": "6px 6px 5px rgba(0,0,0,0.4)"});
	});


});