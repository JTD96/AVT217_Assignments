$(document).ready(function() {
	demoFunction();
	$(window).resize(function () {

	});
	$(window).scroll(function () {

	});

});

function demoFunction() {
	$('.titleClick').click(function() {
		$('.titlebox').toggleClass('shift');
	})
	$('.jqHover1').hover(function() {
		$('.mtext').toggleClass('appear');
	})
	$('.jqHover1').click(function() {
		$('.merk').toggleClass('appear');
	})
	$('.jqClick1').dblclick(function() {
		$('.mb_1').prop("disabled", false);
		$('.mb_2').prop("disabled", false);
	})
	$('.jqHover2').hover(function() {
		$('.ptext').toggleClass('appear');
	})
	$('.jqHover2').click(function() {
		$('.phon').toggleClass('appear');
	})
	$('.jqClick2').dblclick(function() {
		$('.pb_1').prop("disabled", false);
		$('.pb_2').prop("disabled", false);
	})
	$('.jqHover3').hover(function() {
		$('.otext').toggleClass('appear');
	})
	$('.jqHover3').click(function() {
		$('.orie').toggleClass('appear');
	})
	$('.jqClick3').dblclick(function() {
		$('.ob_1').prop("disabled", false);
		$('.ob_2').prop("disabled", false);
	})
	$('.jqHover4').hover(function() {
		$('.wtext').toggleClass('appear');
	})
	$('.jqHover4').click(function() {
		$('.wald').toggleClass('appear');
	})
	$('.jqClick4').dblclick(function() {
		$('.wb_1').prop("disabled", false);
		$('.wb_2').prop("disabled", false);
	})
	$('.jqHover5').hover(function() {
		$('.gtext').toggleClass('appear');
	})
	$('.jqHover5').click(function() {
		$('.gord').toggleClass('appear');
	})
	$('.jqClick5').dblclick(function() {
		$('.gb_1').prop("disabled", false);
		$('.gb_2').prop("disabled", false);
	})

}
var x = document.getElementById("maudio");
function playAudio1() { 
	x.play(); 
} 

function pauseAudio1() { 
    x.pause(); 
} 

var y = document.getElementById("paudio"); 
function playAudio2() { 
	y.play(); 
} 

function pauseAudio2() { 
    y.pause(); 
} 
var z = document.getElementById("oaudio"); 
function playAudio3() { 
	z.play(); 
} 

function pauseAudio3() { 
    z.pause(); 
} 
var a = document.getElementById("waudio"); 
function playAudio4() { 
	a.play(); 
} 

function pauseAudio4() { 
    a.pause(); 
} 
var b = document.getElementById("gaudio"); 
function playAudio5() { 
	b.play(); 
} 

function pauseAudio5() { 
    b.pause(); 
} 