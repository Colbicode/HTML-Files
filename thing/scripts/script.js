var step = 0

function master() {
    var cont = document.getElementById("continue");
    var text = document.getElementById("text");
    var start = document.getElementById("start");
    var skip = document.getElementById("skip");
    var extra = document.getElementById("extra");

    function hide(cont, text, extra) {
        cont.style.opacity = 0;
        text.style.opacity = 0;
        extra.style.opacity = 0;
    }

    switch(step) {
        case 0:
            skip.addEventListener("click", function() {
                step = 10;
                master();
            });
            text.firstChild.nodeValue = messages[step];
            skip.style.opacity = 0;
            start.style.opacity = 0;
            start.addEventListener("transitionend", function() {
                start.style.display = "none";
                text.style.opacity = 1;
                text.addEventListener("transitionend", function() {
                    cont.style.opacity = 1;
                    text.removeEventListener("transitionend", arguments.callee);
                    start.removeEventListener("transitionend", arguments.callee);
                });
            });
            break;
        case 1:
            cont.style.pointerEvents = "none";
            cont.style.opacity = 0;
            text.style.opacity = 0;
            text.addEventListener("transitionend", function() {
                text.firstChild.nodeValue = "A blank page exemplifies an opportunity. But what for?";
                cont.style.opacity = 1;
                text.style.opacity = 1;
                text.removeEventListener("transitionend", arguments.callee);
                text.addEventListener("transitionend", function() {
                    extra.style.opacity = 1;
                    cont.style.pointerEvents = "auto";
                    text.removeEventListener("transitionend", arguments.callee);
                });
            });
            break;
        case 2:
            cont.style.pointerEvents = "none";
            cont.style.opacity = 0;
            text.style.opacity = 0;
            extra.style.opacity = 0;
            text.addEventListener("transitionend", function() {
                text.firstChild.nodeValue = "The canvas is yours if only you'd choose.";
                cont.style.opacity = 1;
                text.style.opacity = 1;
                text.removeEventListener("transitionend", arguments.callee);
                text.addEventListener("transitionend", function() {
                    extra.firstChild.nodeValue("With a brush in your hand and a song in your heart...");
                    extra.style.opacity = 1;
                    cont.style.pointerEvents = "auto";
                    text.removeEventListener("transitionend", arguments.callee);
                });
            });
            break;
        case 3:
            hide(cont, text, extra);
            break;
        case 10:
            text.style.opacity = 0;
            cont.style.opacity = 0;
    }

    step += 1
}