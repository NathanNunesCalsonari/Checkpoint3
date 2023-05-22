const inputFirstName = document.querySelector("#idFirstName");

inputFirstName.addEventListener("keyup", () => {

    const lblFirstName = document.querySelector("label[for='idFirstName']");

    if (inputFirstName.value.length < 5) {
        inputFirstName.setAttribute("style", "outline-color:#ff0000;");
        lblFirstName.setAttribute("style", "color:#ff0000;");
    } else {
        inputFirstName.setAttribute("style", "outline-color:#00ff00;");
        lblFirstName.setAttribute("style", "color:#00ff00;");
    }

});

const inputLastName = document.querySelector("#idLastName");

inputLastName.addEventListener("keyup", () => {

    const lblLastName = document.querySelector("label[for='idLastName']");

    if (inputLastName.value.length < 5) {
        inputLastName.setAttribute("style", "outline-color:#ff0000;");
        lblLastName.setAttribute("style", "color:#ff0000;");
    } else {
        inputLastName.setAttribute("style", "outline-color:#00ff00;");
        lblLastName.setAttribute("style", "color:#00ff00;");
    }

});

const inputEmail = document.querySelector("#idEmail");


inputEmail.addEventListener("keyup", () => {

    const lblEmail = document.querySelector("label[for='idEmail']");

    if (inputEmail.value.length < 5 || JSON.stringify(inputEmail.value).includes("@") == false) {
        inputEmail.setAttribute("style", "outline-color:#ff0000;");
        lblEmail.setAttribute("style", "color:#ff0000;");
    } else {
        inputEmail.setAttribute("style", "outline-color:#00ff00;");
        lblEmail.setAttribute("style", "color:#00ff00;");

    }

});

const inputPass = document.querySelector("#idPass");

inputPass.addEventListener("keyup", () => {

    const lblPass = document.querySelector("label[for='idPass']");

    if (inputPass.value.length < 5 || inputPass.value.length > 8) {
        inputPass.setAttribute("style", "outline-color:#ff0000;");
        lblPass.setAttribute("style", "color:#ff0000;");
    } else {
        inputPass.setAttribute("style", "outline-color:#00ff00;");
        lblPass.setAttribute("style", "color:#00ff00;");
    }


});