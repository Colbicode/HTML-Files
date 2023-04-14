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

    ham.classList.toggle('open');
    nav.classList.toggle('active');
}

function showCitations() {
    const rightBranch = document.querySelector("#rightBranch");
    const leftBranch = document.querySelector("#leftBranch");
    const citations = document.querySelector("#citations");
    //const ham = document.querySelector(".hamburger")

    //ham.classList.toggle('open');
    rightBranch.classList.toggle('open');
    leftBranch.classList.toggle('open');
    citations.classList.toggle('active');
}

function goToCitations() {
    const citations = document.querySelector("#citations");
    if (!citations.classList.contains('active')) {
        showCitations();
    }
}

function invert() {
    document.querySelector('header').classList.toggle("inverted");
}

function normal() {
    document.querySelector('header').classList.toggle("normal");
}


//Gets Scrolling: Could use later
/*
window.addEventListener("scroll", function(event) {
    scroll_y = this.scrollY;
    scroll_x = this.scrollX;
});
*/