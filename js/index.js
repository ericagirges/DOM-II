// declare variables
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


//declare variables
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

const textContent = document.querySelectorAll(".text-content");

//add mouseover change background color and add padding to text-content
textContent[0].addEventListener("mouseover", function(event){
    event.target.setAttribute("style", "background:#80DDE3; padding: 10px;")
});

textContent[1].addEventListener("mouseover", function(event){
    event.target.setAttribute("style", "background: #FACC7C; padding: 10px;")
});

// when text is copied send alert
document.addEventListener("copy", function(event){
    alert("Sucessfully copied.");

});

// dblclick on sign me up send alert
const signupButton = document.querySelectorAll(".btn");

Array.from(signupButton).forEach(function(button){
    button.addEventListener("dblclick", function(event){
        alert("Your adventure begins here!");
        });
    });

// add action on keydown

const pageImages = document.querySelectorAll(".img-content");

document.addEventListener("keydown", function(event){
    if(event.key === "Shift"){
        pageImages[1].src = "https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1087&q=80";
    
    };
  
});



document.addEventListener("select", function(event){
    event.srcElement.setAttribute("style", "color: #4487FB");
});



