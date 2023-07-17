// https://github.com/sinasibil
// https://www.linkedin.com/in/rs-zeinali/

const tl=gsap.timeline({default:{duration:1,ease:Power1.easeOut
    }})
tl.fromTo(".cookie-container",{scale:0.3},{scale:1,ease:Elastic.easeOut.config(0.7,0.2),duration:3})
gsap.fromTo(".text",{y:60,opacity:0},{y:0,opacity:1,duration:1});
tl.fromTo("svg",{opacity:0,rotation:'-345deg',x:-150},{x:0,opacity:1,rotation:'0deg',duration:2},'<');

let btn=document.querySelector("button");
btn.addEventListener("click",()=> {
    gsap.to(".cookie-container",{scale:1.3 ,y:200,opacity:0,})
})
