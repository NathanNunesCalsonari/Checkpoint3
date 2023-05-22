const inputFirstName = document.querySelector("#idFirstName");

inputFirstName.addEventListener("keyup", () => {

    const lblFirstName = document.querySelector("label[for='idFirstName']");

    if (inputFirstName.value.length) {
        inputFirstName.setAttribute("style", "outline-color:#ff0000;");
        lblFirstName.setAttribute("style", "color:#ff0000;");
    } else {
        inputFirstName.setAttribute("style", "outline-color:#00ff00;");
        lblFirstName.setAttribute("style", "color:#00ff00;");
    }

});