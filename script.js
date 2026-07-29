const btns = document.querySelectorAll("Button");

btns.forEach(function (buttons) {
    console.log(buttons);
    buttons.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id == "grey") {
            body.style.background = e.target.id;
        }
        else if (e.target.id == "yellow") {
            body.style.background = e.target.id;
        }
        else if (e.target.id == "pink") {
            body.style.background = e.target.id;
        }
        else {
            body.style.background = e.target.id;
        }
    });
});