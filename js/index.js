// declare variables
const navLink = document.querySelectorAll(".nav-link");
const nav = document.querySelector("nav");

// click nav link change color orange and increase font size
nav.addEventListener("click", function (event) {
  navLink.forEach((el) =>
    el.setAttribute("style", "color: #000; font-size: 1.6rem;")
  );
  event.srcElement.setAttribute("style", "color: #F19804; font-size: 2.0rem;");
});

//declare variables
const header = document.querySelector(".intro");
const headerImg = header.querySelector("img");

// add mouseover header img to black and white
headerImg.addEventListener("mouseover", function (event) {
  event.target.setAttribute("style", "filter: grayscale(100%);");
});

// add mouseout header img back to normal color
headerImg.addEventListener("mouseout", function (event) {
  event.target.setAttribute("style", "filter: none;");
});

const textContent = document.querySelectorAll(".text-content");

//add mouseenter and mouseleave change background color and add padding to text-content
textContent[0].addEventListener("mouseenter", function (event) {
  event.target.setAttribute("style", "background:#80DDE3; padding: 10px;");
});

textContent[0].addEventListener("mouseleave", function(event){
    event.target.setAttribute("style", "background: none; padding: nonee;");
});


// mousemove change color and add padding
textContent[1].addEventListener("mousemove", function (event) {
  event.target.setAttribute("style", "background: #FACC7C; padding: 10px;");
});

textContent[1].addEventListener("mouseleave", function(event){
    event.target.setAttribute("style", "background: none; padding: nonee;");
});

// when text is copied send alert
document.addEventListener("copy", function (event) {
  alert("Sucessfully copied.");
});

// dblclick on sign me up send alert
const signupButton = document.querySelectorAll(".btn");

Array.from(signupButton).forEach(function (button) {
  button.addEventListener("dblclick", function (event) {
    alert("Your adventure begins here!");
  });
});

// add action on keydown
const pageLogo = document.querySelector("h1");

document.addEventListener("keydown", function (event) {
  if (event.key === "Shift") {
    pageLogo.setAttribute("style", "transform: rotate(0.5turn);");
  } else {
    pageLogo.setAttribute("style", "transform: none;");
  }
});

// on resize of window change color of h1
window.addEventListener("resize", function (event) {
  pageLogo.setAttribute("style", "color:#F65915; font-size: 3.6rem;");
});
