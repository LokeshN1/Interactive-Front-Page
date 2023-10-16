var crsr = document.querySelector("#cursor");
var blr = document.querySelector("#cursor_blur");

document.addEventListener("mousemove", function(m){
    crsr.style.left = m.x + "px"
    crsr.style.top = m.y + "px"
    
    blr.style.left = m.x - 150 + "px"
    blr.style.top = m.y - 150 + "px"
})

var h4_all = document.querySelectorAll(".nav h4, .nav img");

h4_all.forEach(function(ele){
    ele.addEventListener("mouseenter", function(){
        crsr.style.scale = 1
        crsr.style.border = "2px solid white"
        crsr.style.backgroundColor = "transparent"
        
    })
    })
    
    h4_all.forEach(function(ele){
        ele.addEventListener("mouseleave", function(){
            crsr.style.scale = 1
            crsr.style.backgroundColor = "rgb(0, 84, 152)"
            crsr.style.border = "0px"
        })
    })

    

gsap.to(".nav", {
    backgroundColor: "rgb(0 136 188)",
    height: "13vh",
    scrollTrigger : {
        trigger : ".nav",
        scroller : "body",
        start: "top - 50%",
        // markers : "true",
        scrub : true,
    }
})


gsap.to(".main", {
    backgroundColor: "#000",
    scrollTrigger :{
        trigger: ".main",
        scroller: "body",
        start: "top -30%",
        end: "top -90%",
        // markers:true,
        scrub: true
    }
})

gsap.from("#about", {
    y:90,
    opacity: 0,
     duration:3,
    scrollTrigger :{
        trigger: "#about",
        scroll: "body",
        start: "top 80%",
        end:"top 40%",
        scrub:4,
        // markers:true
    }
})
gsap.to("#quote #left_img",{
    y:0,
    x:15,
    duration: 2,
    scrollTrigger:{
        trigger: "#left_img",
        scroll: "body",
        start:"top 45%",
        end: "top 10%",
        scrub: 4,
        // markers: true
    }
})

gsap.to("#quote #right_img",{
    y:10,
    x:-130,
    duration: 4,
    scrollTrigger:{
        trigger: "#right_img",
        scroll: "body",
        start:"top 90%",
        end: "top 70%",
        scrub: 4,
        // markers: true
    }
})

gsap.to("#on_behind", {
    y:-55,
    duration: 2,
    scrollTrigger:{
        trigger:"#on_behind",
        scroller:"body",
        start: "top 90%",
        end: "top 55%",
        // markers: true,
        scrub:5,
    }
})

