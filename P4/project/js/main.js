$(document).ready(function() {
  showLinks();
  $(window).resize(function () {

  });
  $(window).scroll(function () {

  });

});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
function showLinks() {
  $('.one').hover(function() {
    $('.dlink1').toggleClass('appear');
  })
  $('.two').hover(function() {
    $('.dlink2').toggleClass('appear');
  })
  $('.three').hover(function() {
    $('.dlink3').toggleClass('appear');
  })
  $('.four').hover(function() {
    $('.dlink4').toggleClass('appear');
  })
  $('.five').hover(function() {
    $('.dlink5').toggleClass('appear');
  })
  $('.six').hover(function() {
    $('.dlink6').toggleClass('appear');
  })
  $('.seven').hover(function() {
    $('.dlink7').toggleClass('appear');
  })
  $('.eight').hover(function() {
    $('.dlink8').toggleClass('appear');
  })
  $('.nine').hover(function() {
    $('.dlink9').toggleClass('appear');
  })
  $('.ten').hover(function() {
    $('.dlink10').toggleClass('appear');
  })
}