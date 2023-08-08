const btn = document.querySelector(".menu-btn")
const nav = document.querySelector(".nav-links ul")
var visibality = true;
btn.addEventListener("click", () =>{
    if (visibality) {
        // nav.style.transition = "all 1s ease-in-out"
        nav.style.display = "flex"; 
        visibality = false 
    }
    else{
        nav.style.display = "none"; 
        visibality = true
    }
})