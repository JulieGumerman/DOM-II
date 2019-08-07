// Your code goes here


//event 1: scroll

window.addEventListener("scroll", (event) => {
    document.querySelector("body").style.background = "red";
    event.preventDefault();
    event.stopPropagation();
});


//event 2: mouseover

const firstHTwo = document.querySelector("h2");
firstHTwo.addEventListener("mouseover", (event) => {
    firstHTwo.style.fontSize = "100px";
    event.stopPropagation();
});

//event 3
//.stopPropagation() example 
//preventdefault


const navA = document.querySelectorAll('.nav-link');
navA.forEach((e) => {
    e.addEventListener('click', (event) => {
        alert("Spain is so lovely this time of year.");
        event.stopPropagation();
        event.preventDefault();
    });
        
});//forEach



//event 4

let navNav = document.querySelector(".nav-container");
 window.addEventListener("resize", function(event){
     console.log('resize!');
    navNav.style.backgroundColor = "pink";
    },
      true);

navNav.addEventListener("dblclick", ()=> {
    navNav.style.border = "15px purple dashed";
})
//event 5

let keyDown = document.querySelector('header div h1');
window.addEventListener('keydown', (event) => {
      keyDown.style.backgroundColor = "blue";
    })


//event 6

let mapImage = document.querySelector(".img-content");
console.log(mapImage);
mapImage.addEventListener("wheel", (event) => {
    mapImage.style.transform = "skewY(30deg)";
    event.stopPropagation();
});

//event 7

let dragDrop = document.querySelector(".img-fluid");

document.addEventListener("drag", event => {
    dragDrop.style.border = "10px solid black";
    event.stopPropagation();
});
//event 8

window.addEventListener("load", event => {
    alert("Welcome to a hot mess");
    event.stopPropagation();
})

//event 9
let leaveMouse = document.querySelector(".destination-img"); leaveMouse.addEventListener("mouseleave", () => {
    leaveMouse.style.border = "dotted white 15px";
})

//event 10

window.addEventListener("copy", (event) => {
    console.log("Your stuff has been copied!");
    event.stopPropagation();
});


//stopPropagation example 

let destinationDiv = document.querySelectorAll(".destination");
destinationDiv[0].addEventListener("click", () => {
    destinationDiv[0].style.border = "15px darkorange solid";
});

let theButton = document.querySelectorAll(".btn");
theButton[0].addEventListener("click", (event) => {
    theButton[0].style.color = "greenyellow";
    event.stopPropagation();
})
/* button click*/
/* click div*/
