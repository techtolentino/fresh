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
//= require turbolinks
//= require foundation
//= require_tree .
$(function() {
  
  $(document).foundation();


	$(function () {
		$("#fresh").hide().fadeIn(3000);
	});

	$("#create_button").click(function(e){
		var code = $("#code").val();
		var phrase = $("#phrase").val();
		var color = $("#color").val();

		console.log(code);
		$(".design-a").text(code);
		$(".design-b").text(phrase);
		$(".design-b").css("color", color);
		e.preventDefault();
	});

});


