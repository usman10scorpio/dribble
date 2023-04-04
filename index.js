let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slider");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    const nodeList = document.querySelectorAll(".header");
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].style.backgroundColor = "white";
    }
  } else {
    const nodeList = document.querySelectorAll(".header");
    for (let i = 0; i < nodeList.length; i++) {
      nodeList[i].style.backgroundColor = "inherit";
    }
  }
}