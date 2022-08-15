const menu = document.querySelector(".nav--menu")
const icon = document.querySelector(".menu--icon")

icon.addEventListener("click",toggleMenu)

function toggleMenu(){
    menu.classList.toggle( "visible" )
}




