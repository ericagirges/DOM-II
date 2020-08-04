// Your code goes here
const navLink = document.querySelectorAll(".nav-link");
const nav = document.querySelector("nav");


// mouseover nav link change color blue
nav.addEventListener("mouseover", function(event){
    event.target.style.color = "#5EC4FE";
    setTimeout(function(){
        event.target.style.color = "";
    }, 300);
}, false);

// click nav link change color orange and increase font size
nav.addEventListener("click", function(event){
    navLink.forEach(el => el.setAttribute("style", "color: #000; font-size: 1.6rem;"));
    event.srcElement.setAttribute("style", "color: #F19804; font-size: 2.0rem;")
});

const header = document.querySelector(".intro");
const headerImg = header.querySelector("img");


// add mouseover header img to black and white
headerImg.addEventListener("mouseover", function(event){
    event.target.setAttribute("style", "filter: grayscale(100%);");
});

// add mouseout header img back to normal color
headerImg.addEventListener("mouseout", function(event){
    event.target.setAttribute("style", "filter: none;");
});