// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require foundation

$(function() {
  
  $(document).foundation();


	$(function () {
		$("#fresh").hide().fadeIn(3000);
	});

	$("#create_button").on('click', function(e){
		var code = $("#symbol").val();
		var phrase = $("#phrase").val();
		var color_symbol = $("#color_symbol").val();
		var color_phrase = $("#color_phrase").val();
		var shirt_color = $("#shirt_color").val();

		console.log(code);
		$(".design-a").text(code);
		$(".design-a").css("color", color_symbol);
		$(".design-b").text(phrase);
		$(".design-b").css("color", color_phrase);
		$(".tshirt").attr("src", shirt_color);
		$('html, body').animate({scrollTop:0}, 'slow');

		e.preventDefault();
	});

});

// css animation - opacity - 
// gulp and or grunt
// event listener on-change to have shirt change when user selects different options
// 1 post shirt designs
// 2 creating profiles with the app
// create a fork option for users to play around with their creation

