let hamburger = document.getElementById("hamburger");
let nav= document.querySelector(".nav2");
let cross= document.getElementById("cross");
let a = document.querySelectorAll(".list2 a");
hamburger.addEventListener("click",()=>{
    nav.style.transform="translateX(0%)";

})
// cross.addEventListener("click",()=>{
//     nav.style.transform="translatex(-100%)";

// })
cross.addEventListener("click", () =>{
    nav.style.transform="translateX(-100%)";
})
a.forEach((e)=>{
    e.addEventListener("click", () =>{
        nav.style.transform="translateX(-100%)";
})
})