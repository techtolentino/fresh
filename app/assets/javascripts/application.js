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

(function () {

	window.Fresh = {};

	// Enitites
	Fresh.Shirt = function (attrs) {
		this.shirtColor = attrs.shirtColor;
		this.symbol = attrs.symbol;
		this.symbolColor = attrs.symbolColor;
		this.phrase = attrs.phrase;
		this.phraseColor = attrs.phraseColor;
	};

	// Database implementations
	var LocalStorageDB = function () {
		
		this.saveShirt = function () {
			// Write to localstorage
		};

		this.getShirts = function () {
			// Get all shirts from localstorage
		};
	};

	Fresh.db = new LocalStorageDB();

	// Commands
	Fresh.createShirt = function (attrs) {
		// shirtColor, symbol, symbolColor, phrase, phraseColor
		// Maybe do some validation here
		var shirt = new Fresh.Shirt(attrs);
		Fresh.db.saveShirt(shirt);
		return {
			success: true,
			shirt: shirt
		};
	};

})();


$(function() {
  
  $(document).foundation();


	$(function () {
		$("#fresh").hide().fadeIn(2000);
	});

	var activeShirt = {
		shirtColor: 'white',
		symbol: '{  }',
		symbolColor: 'f82576',
		phrase: '!FALSE',
		phraseColor: 'f82576'
	};

	var renderShirt = function (targetEl, shirt) {
		$(".tshirt", targetEl).attr("src", "t-" + shirt.shirtColor + ".png");		
		$(".design-a", targetEl).text(shirt.symbol);
		$(".design-a", targetEl).css("color", '#' + shirt.symbolColor);
		$(".design-b", targetEl).text(shirt.phrase);
		$(".design-b", targetEl).css("color", '#' + shirt.phraseColor);
	};

	var $activeShirtEl = $('.creation .shirt');
	renderShirt($activeShirtEl, activeShirt);

	$("#shirt_color").change(function () {
		var shirtColor = $("#shirt_color").val();
		activeShirt.shirtColor = shirtColor;
		
		$(".tshirt", $activeShirtEl).attr("src", shirtColor);
		// renderShirt($activeShirtEl, activeShirt);		
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

});

	var newIdCount = 1;
	$("#create_button").on('click', function(e){
		var result = Fresh.createShirt(activeShirt);
		if (result.success) {
			// Render new shirt with result.shirt
			// Create new div for shirt
			// Render it using renderShirt
			// Add new shirt div to #gallery
		}
		else {
			console.log("Shirt creation failed with error:", result.error);
		}
		// $(".creation").clone().appendTo("#gallery");
		// $('.tshirt').attr('id', 'id'+ newIdCount++);
		// $('.design-a').attr('id', 'id'+ newIdCount++);
		// $('.design-b').attr('id', 'id'+ newIdCount++);
		console.log('this designed was cloned');
		e.preventDefault();
	});

