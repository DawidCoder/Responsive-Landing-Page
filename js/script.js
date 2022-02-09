const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]
toggleButton.addEventListener("click", navbar);
function navbar(){
    navbarLinks.classList.toggle('active')
}


