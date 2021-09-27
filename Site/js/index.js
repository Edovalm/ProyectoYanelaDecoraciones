//Function Toggle
function toggle(idActivator,classElement,classElementActive) {
    const activator = document.querySelector(idActivator)
    const theElement = document.querySelector(classElement) 

    activator.addEventListener("click", () => {
        theElement.classList.toggle(classElementActive)
    }); 
}

//Llamado de Function Toggle
toggle("#menu-toggle",".main-nav__menu","main-nav__menu--active");
toggle("#search-toggle",".main-nav__search","main-nav__search--active");

//Elementos Animados 
let animatedElement = document.querySelectorAll(".animated-element");
let windowHeight = window.innerHeight;
function animatedScroll(){
    let scrollTop = (document.documentElement.scrollTop);
    for(var i = 0; i < animatedElement.length; i++){
        let heightForAnimation = animatedElement[i].offsetTop;
        if(heightForAnimation - (windowHeight * 0.65)  < scrollTop) {
            animatedElement[i].style.opacity = 1;
            animatedElement[i].classList.add("from-above");
        }
    }
}

window.addEventListener("scroll", animatedScroll);