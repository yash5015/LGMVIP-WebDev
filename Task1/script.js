var slide = document.getElementById("slider");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");

var side1 = document.getElementById("side1");
var side2 = document.getElementById("side2");

var x = 0;

side1.onclick = function () {
  if (x != 0) {
    x -= 1;
  }
  if (x == 0) {
    slide.style.transform = "translateX(0%)";
    btn1.classList.add("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
  } else if (x == 1) {
    slide.style.transform = "translateX(-100%)";
    btn1.classList.remove("active");
    btn2.classList.add("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
  } else if (x == 2) {
    slide.style.transform = "translateX(-200%)";
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.add("active");
    btn4.classList.remove("active");
  } else if (x == 3) {
    slide.style.transform = "translateX(-300%)";
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.add("active");
  }
  console.log(x);
};
side2.onclick = function () {
  if (x < 3) {
    x += 1;
  }
  if (x == 1) {
    slide.style.transform = "translateX(-100%)";
    btn1.classList.remove("active");
    btn2.classList.add("active");
    btn3.classList.remove("active");
    btn4.classList.remove("active");
  } else if (x == 2) {
    slide.style.transform = "translateX(-200%)";
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.add("active");
    btn4.classList.remove("active");
  } else if (x == 3) {
    slide.style.transform = "translateX(-300%)";
    btn1.classList.remove("active");
    btn2.classList.remove("active");
    btn3.classList.remove("active");
    btn4.classList.add("active");
  }
  console.log(x);
};

btn1.onclick = function () {
  x = 0;
  slide.style.transform = "translateX(0px)";
  btn1.classList.add("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");
  btn4.classList.remove("active");
};
btn2.onclick = function () {
  x = 1;
  slide.style.transform = "translateX(-100%)";
  btn1.classList.remove("active");
  btn2.classList.add("active");
  btn3.classList.remove("active");
  btn4.classList.remove("active");
};
btn3.onclick = function () {
  x = 2;
  slide.style.transform = "translateX(-200%)";
  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn3.classList.add("active");
  btn4.classList.remove("active");
};
btn4.onclick = function () {
  x = 3;
  slide.style.transform = "translateX(-300%)";
  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn3.classList.remove("active");
  btn4.classList.add("active");
};

// Navbar

window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
  const menuToggle = document.querySelector(".menuToggle");
  const menu = document.querySelector(".menu");

  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
}

// Gallery..............................................

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
