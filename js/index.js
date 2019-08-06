// Your code goes here


//event 1: scroll

window.addEventListener("scroll", (event) => {
    document.querySelector("body").style.background = "red";
});

//event 2: mouseover

const firstHTwo = document.querySelector("h2");
firstHTwo.addEventListener("mouseover", (event) => {
    firstHTwo.style.fontSize = "100px";
});

//event 3

/* const navA = document.querySelectorAll("nav");
navA.addEventListener("dblclick", (event) => {
    navA.forEach(event => {
        alert(event);
    })
    
});  */

const navA = document.querySelectorAll('.nav-link');
navA.forEach((e) => e.addEventListener('dblclick', (event) => alert("Spain is so lovely this time of year.")));



//event 4
let imgs = document.querySelector(".img-content");
//let daBod = document.querySelector("body");
/* window.addEventListener("resize", event => {
    imgs.style.display = "none";
}); */

/* window.addEventListener('resize', () => {
    imgs.target.style.display = "none";
 }); */
let navNav = document.querySelector(".nav-container");
 window.addEventListener("resize", function(event){
     console.log('resize!');
    navNav.style.backgroundColor = "pink";
    event.stopPropagation();
    },
      true);
navNav.addEventListener("click", ()=> {
    navNav.style.border = "15px purple dashed";
})
//event 5

let keyDown = document.querySelector('header div h1');
window.addEventListener('keydown', (event) => {
      keyDown.style.backgroundColor = "blue"
    })


//event 6

let mapImage = document.querySelector(".img-content");
console.log(mapImage);
mapImage.addEventListener("wheel", (event) => {
    mapImage.style.transform = "skewY(30deg)";
});

//event 7

let dragDrop = document.querySelector(".img-fluid");

document.addEventListener("drag", event => {
    dragDrop.style.border = "10px solid black";
});
//event 8

window.addEventListener("load", event => {
    alert("Welcome to a hot mess");
})

//event 9
let leaveMouse = document.querySelector(".destination"); leaveMouse.addEventListener("mouseleave", () => {
    leaveMouse.style.border = "dotted white 15px";
})

//event 10

let selection = document.querySelector(".select-here");
let textChange = document.querySelector(".change-this-text");

document.addEventListener("select", () => {
    console.log("You selected some text.")
});

window.addEventListener("copy", () => {
    console.log("Someone copied some stuff");
})