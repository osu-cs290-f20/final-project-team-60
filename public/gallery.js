window.onload = function(){
  // slideshow stuff
  var index = 1;
  hideSlides();
  showSlide(0);

  function moveSlide(a) {
    hideSlides();
    // var slideToShow = index + a;
    showSlide(index += a);
  }

  function hideSlides() {
    var slides = document.getElementsByClassName("photo-post");
    for (var i = 0; i < slides.length; i++){

      slides[i].style.display = "none";
      //slides[i].toggle();
      // console.log(slides.item(0));
      //slides[i].toggle();
    }
  }

  function showSlide(input){
    // console.log(thisSlide);
    var slides = document.getElementsByClassName("photo-post");
    //console.log(slides.length);
    // var index = thisSlide;
    if (Number(input) > Number(slides.length - 1)){
      console.log("hi");
      index = 1;
    }
    if (Number(input) < 0){
      index = (slides.length - 1);
    }

    console.log(index);
    console.log(slides.length);


    slides[index].style.display = "block";
    // slides[thisSlide].style.display = "block";
    //slides[thisSlide].toggle();
  }

  var prevButton = document.getElementById("previous-button");
  var nextButton = document.getElementById("next-button");

  prevButton.addEventListener("click", function(){
    console.log("Prev");
    moveSlide(-1);
  });
  nextButton.addEventListener("click", function(){
    console.log("Next");
    moveSlide(1);
  });


//   // showSlides(index);
//   //
//   // // Next/previous controls
//   // function plusSlides(n) {
//   //   showSlides(index += n);
//   // }
//   //
//   // // // Thumbnail image controls
//   // // function currentSlide(n) {
//   // //   showSlides(slideIndex = n);
//   // // }
//   //
//   // function showSlides(n) {
//   //   var i;
//   //   var slides = document.getElementsByClassName("photo-post");
//   //   // var dots = document.getElementsByClassName("dot");
//   //   if (n > slides.length){
//   //     slideIndex = 1
//   //   }
//   //   if (n < 1){
//   //     slideIndex = slides.length
//   //   }
//   //   for (i = 0; i < slides.length; i++) {
//   //       slides[i].style.display = "none";
//   //   }
//   //   for (i = 0; i < dots.length; i++) {
//   //       dots[i].className = dots[i].className.replace(" active", "");
//   //   }
//   //   slides[slideIndex-1].style.display = "block";
//   //   dots[slideIndex-1].className += " active";
//   // }
//
};
