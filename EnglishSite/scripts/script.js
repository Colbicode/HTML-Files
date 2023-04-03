//Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("ffc-logo");
    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        menu.style.display = "block";
        logo.style.display = "none";
    }
}

function show() {
    const nav = document.querySelector(".navigation")
    const ham = document.querySelector(".hamburger")
    
    if (!nav.classList.contains('active')) {
        document.addEventListener("click", function(event) {
            if (event.target.closest("")) {
                //////////////
            }
        });
    } else {
        document.removeEventListener("click", arguments.callee);
    }

    ham.classList.toggle('open');
    nav.classList.toggle('active');
}

function invert() {
    document.querySelector('header').classList.toggle("inverted");
}

function normal() {
    document.querySelector('header').classList.toggle("normal");
}
