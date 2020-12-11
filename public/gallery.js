window.onload = function(){
  var index = 1;
  hideSlides();
  showSlide(0);

  function moveSlide(a) {
    hideSlides();
    showSlide(index += a);
  }

  function hideSlides() {
    var slides = document.getElementsByClassName("photo-post");
    for (var i = 0; i < slides.length; i++){

      slides[i].style.display = "none";
    }
  }

  function showSlide(input){
    var slides = document.getElementsByClassName("photo-post");
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

// I wrote this file with help from the W3School's article: https://www.w3schools.com/howto/howto_js_slideshow.asp

};
