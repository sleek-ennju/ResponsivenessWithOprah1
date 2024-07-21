const hamburger = document.getElementById("hamburger_icon");
const navLinksContainer = document.querySelector(".navlinks_container");

function handleRevealNav (){
    navLinksContainer.classList.toggle("navlinks_container-helper");
}

hamburger.addEventListener("click", handleRevealNav);