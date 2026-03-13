// Smooth navigation scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function(e) {

e.preventDefault();

const target = document.querySelector(this.getAttribute('href'));

if(target){
target.scrollIntoView({
behavior:"smooth"
});
}

});

});


// Hamburger Menu

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

if(hamburger && navMenu){

hamburger.addEventListener("click", () => {
navMenu.classList.toggle("show");
});

}


// 3D Tilt Cards

if(typeof VanillaTilt !== "undefined"){

VanillaTilt.init(document.querySelectorAll(".tilt"),{
max:15,
speed:400,
glare:true,
"max-glare":0.3
});

}


// Typing Animation

if(typeof Typed !== "undefined"){

var typed = new Typed("#typing", {

strings:[
"MERN Stack Developer",
"AI / ML Explorer",
"DSA Enthusiast",
"200+ LeetCode Problems Solved"
],

typeSpeed:60,
backSpeed:40,
loop:true

});

}


// Cursor Glow Effect

const glow = document.querySelector(".cursor-glow");

if(glow){

document.addEventListener("mousemove",(e)=>{

glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";

});

}