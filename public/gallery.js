// slideshow stuff
var index = 1;
showSlide(0);

function moveSlide(a) {
  hideSlides();
  var slideToShow = index + a;
  showSlide(index += a);
}

function hideSlides() {
  var slides = document.getElementsByClassName("photo-post");
  for (var i = 0; i < slides.length; i++){
    // slides[i].style.display = "none";
    slides[i].toggle();
  }
}

function showSlide(thisSlide){
  var slides = document.getElementsByClassName("photo-post");
  if (thisSlide > slides.length){
    index = 1
  }
  if (thisSlide < 1){
    index = slides.length
  }
  // for (var i = 0; i < slides.length; i++) {
  //       slides[i].style.display = "none";
  // }

  // slides[thisSlide-1].style.display = "block";
  slides[thisSlide].toggle();
}

var prevButton = document.getElementById("previous-button");
var nextButton = document.getElementById("next-button");

prevButton.addEventListener("click", moveSlide(-1));
nextButton.addEventListener("click", moveSlide(1));


// showSlides(index);
//
// // Next/previous controls
// function plusSlides(n) {
//   showSlides(index += n);
// }
//
// // // Thumbnail image controls
// // function currentSlide(n) {
// //   showSlides(slideIndex = n);
// // }
//
// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("photo-post");
//   // var dots = document.getElementsByClassName("dot");
//   if (n > slides.length){
//     slideIndex = 1
//   }
//   if (n < 1){
//     slideIndex = slides.length
//   }
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }
