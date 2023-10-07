var cursor = document.getElementById("cursor");
var blur = document.getElementById("cursor-blur");
var navLinks = document.querySelector(".nav-links");
var menuButton = document.querySelector(".menu-btn");
var mainNav = document.getElementById("nav");
var isMenuOpen = false; 

function toggleMenu() {
    if (!isMenuOpen) {
        navLinks.classList.add("active");
        mainNav.style.backgroundColor = "black";
    } else {
        navLinks.classList.remove("active");
        mainNav.style.backgroundColor = ""; 
    }
    isMenuOpen = !isMenuOpen;
}

document.addEventListener("mousemove",function(dets){
    cursor.style.display = "block"
    blur.style.display = "block"
    
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"


    blur.style.left = dets.x - 150 + "px"
    blur.style.top = dets.y - 150 + "px"

})



gsap.to("#nav",{
    backgroundColor: "black",
    duration: 0.5,
    height: "100px",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end:"top -11%",
        scrub:1
    }
});

gsap.to("#main",{
    backgroundColor: "black",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        start: "top -20%",
        end: "top -100%",
        scrub: 2
    }
})
gsap.from("#about img,.about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4, 
    scrollTrigger:{
        trigger: "#about",
        scroller:"body",
        start: "top 60%",
        end:"top 55%",
        scrub:3,
    }
})
gsap.from(".card",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4, 
    scrollTrigger:{
        trigger: ".card",
        scroller:"body",
        start: "top 70%",
        end:"top 65%",
        scrub:3,
    }
})
gsap.from("#colon1",{
    y:-30,
    x:-30,

    scrollTrigger:{
        trigger: "#colon1",
        scroller:"body",
        start: "top 50%",
        end:"top 42%",
        scrub:2,
    }
})
gsap.from("#colon2",{
    y:30,
    x:30,

    scrollTrigger:{
        trigger: "#colon2",
        scroller:"body",
        start: "top 50%",
        end:"top 42%",
        scrub:2,
    }
})