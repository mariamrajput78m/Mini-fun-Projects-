const btns = document.querySelectorAll(".button");
const body = document.querySelector("body");

btns.forEach(function (buttons) {
    buttons.addEventListener('click', function (e) {
        if (e.target.id === "cream") {
            body.style.background = "linear-gradient(135deg, #FFF7AD, #FFB3AE)";
        }
        else if (e.target.id === "peach") {
            body.style.background = "linear-gradient(135deg, #FFB3AE, #FF49C1)";
        }
        else if (e.target.id === "magenta") {
            body.style.background = "linear-gradient(135deg, #FF49C1, #6A1452)";
        }
        else if (e.target.id === "plum") {
            body.style.background = "linear-gradient(135deg, #6A1452, #44113E)";
        }
        else if (e.target.id === "wine") {
            body.style.background = "linear-gradient(135deg, #44113E, #1a0517)";
        }
    });
});



/* solid colors 

const btns = document.querySelectorAll(".button");
const body = document.querySelector("body");

btns.forEach(function (buttons) {
    buttons.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target.id === "grey") {
            body.style.backgroundColor = e.target.id;
        }
        else if (e.target.id === "yellow") {
            body.style.backgroundColor = e.target.id;
        }
        else if (e.target.id === "pink") {
            body.style.backgroundColor = e.target.id;
        }
        else if (e.target.id === "red") {
            body.style.backgroundColor = e.target.id;
        }
        else {
            body.style.backgroundColor = e.target.id;
        }
    });
});


*/
