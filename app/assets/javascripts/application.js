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
		$("#fresh").hide().fadeIn(2000);
	});

	$("#shirt_color").change(function(){
		var shirt_color = $("#shirt_color").val();
		$(".tshirt").attr("src", shirt_color);
	});
	
	$("#symbol").change(function(){
		var code = $("#symbol").val();
		$(".design-a").text(code);
	});
	
	$("#color_symbol").change(function(){
		var color_symbol = $("#color_symbol").val();
		$(".design-a").css("color", color_symbol);
	});

	$("#phrase").change(function(){
		var phrase = $("#phrase").val();
		$(".design-b").text(phrase);
	});
	
	$("#color_phrase").change(function(){
		var color_phrase = $("#color_phrase").val();
		$(".design-b").css("color", color_phrase);
		$('html, body').animate({scrollTop:0}, 'slow');
	});
	// 	console.log(code);
	// 	e.preventDefault();

	// $("#create_button").on('click', function(e){
	// 	$("#creation").load("gallery #gallery");
	// 	console.log('this designed was cloned');
	// 	e.preventDefault();
	// });

});

   var c = 0;
   var cloned;

	$("#create_button").on('click', function(e){
		$("#creation").clone().appendTo("#gallery");

		cloned = $( '#id'+ c );
    $("#creation"+c).clone().attr('id', 'id'+(++c) ).insertAfter( cloned );

		console.log('this designed was cloned');
		e.preventDefault();
	});