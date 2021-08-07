// FORM INPUT EVENT HANDLING

var inputs = document.querySelectorAll("input[type='text']");

for (let i=0; i<inputs.length; i++) {
    inputs[i].addEventListener("click", function() {this.setAttribute("value", "")});
}


// FORM SUBMISSION EVENT HANDLING
var form = document.getElementById("myForm");

form.addEventListener('submit', handleForm);


// FORM EVENT HANDLING
var card = document.querySelector(".form-block");
let not_checked = true;

function handleForm(event) { event.preventDefault(); } 


// FORM SIZE ADJUSTMENT
let current_adjust = 0;

function validateForm() {
    let fname = document.forms["myForm"]["firstName"].value;
    let lname = document.forms["myForm"]["lastName"].value;
    let email = document.forms["myForm"]["email"].value;
    let password = document.forms["myForm"]["password"].value;

    var fnameP = document.getElementById("fname-p");
    var lnameP = document.getElementById("lname-p");
    var emailP = document.getElementById("email-p");
    var passP = document.getElementById("pass-p");

    var fnameI = document.getElementById("firstName");
    var lnameI = document.getElementById("lastName");
    var emailI = document.getElementById("email");
    var passI = document.getElementById("password");
    
    let height_adjust = 0;

    if (fname == "") {
        fnameP.classList.remove("hidden");
        fnameI.classList.add("error");
        height_adjust += 1;
    } else {
        fnameP.classList.add("hidden");
        fnameI.classList.remove("error");
    }

    if (lname == "") {
        lnameP.classList.remove("hidden");
        lnameI.classList.add("error");
        height_adjust += 1;
    } else {
        lnameP.classList.add("hidden");
        lnameI.classList.remove("error");
    }

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
        emailP.classList.remove("hidden");
        emailI.classList.add("error");
        height_adjust += 1;
    } else {
        emailP.classList.add("hidden");
        emailI.classList.remove("error");
    }

    if (password == "") {
        passP.classList.remove("hidden");
        passI.classList.add("error");
        height_adjust += 1;
    } else {
        passP.classList.add("hidden");
        passI.classList.remove("error");
    }


    if (window.matchMedia("(max-width: 768px").matches) {
        card.style.height = `${card.offsetHeight + 20*(height_adjust-current_adjust)}px`;
    } else if (window.matchMedia("(min-width: 768px").matches) {
        card.style.height = `${card.offsetHeight + 12*(height_adjust-current_adjust)}px`;
    }

    current_adjust = height_adjust

    return true;
}