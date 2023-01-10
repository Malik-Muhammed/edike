const hamburgerIcon = document.querySelector(".hamburger-icon");
const navlinks = document.querySelector(".nav-content");


hamburgerIcon.addEventListener("click", ()=>{
    navlinks.classList.toggle("show")
    navlinks.classList.contains("show")? hamburgerIcon.src="./image/icon-close-menu.svg" :   
    hamburgerIcon.src="./image/icon-menu.svg"

})