//Primeiro Nome

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

//Segundo Nome

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

//Email

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

//Senha

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

//Confirmar senha

const inputConfirmar = document.querySelector("#idConfirmarPass");

inputConfirmar.addEventListener("keyup", () => {

    const lblConfirmar = document.querySelector("label[for='idConfirmarPass']");

    if (inputConfirmar.value != inputPass.value) {
        inputConfirmar.setAttribute("style", "outline-color:#ff0000;");
        lblConfirmar.setAttribute("style", "color:#ff0000;");
    } else {
        inputConfirmar.setAttribute("style", "outline-color:#00ff00;");
        lblConfirmar.setAttribute("style", "color:#00ff00;");
    }

});

//Validação

const inputSubmit = document.querySelector("#btnSubmit");

inputSubmit.addEventListener("click", () => {

    //Validação para o primeiro nome
    if (inputFirstName.value.length < 5) {
        alert("O primeiro nome necessita ter no minímo 5 caracteres para estar válido.")
    }

     //Validação para o segundo nome
    if (inputLastName.value.length < 5) {
        alert("O segundo nome necessita ter no minímo 5 caracteres para estar válido.")
    }

     //Validação para o email
    if (inputEmail.value.length < 5) {
        alert("O e-mail precisa ter no minímo 5 caracteres e também é necessário ter o @ para estar válido");
    } else if (JSON.stringify(inputEmail.value).includes("@") == false) {
        alert("O e-mail precisa ter um @ para ser válido")
    }

     //Validação para a senha
    if (inputPass.value.length < 6 || inputPass.value.length > 8) {
        alert("A senha precisa ter no minímo 6 caracteres e no máximo 8 para ser válida.")
    }

     //Validação para confirmar a senha
    if (inputConf.value != inputPass.value) {
        alert("As senhas estão diferentes. Por favor, coloque a mesma senha.")
    }
});

//Dark Mode

function toggleMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    
    const modoDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', modoDarkMode);
}

const DarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const savedMode = localStorage.getItem('dark-mode');

if (savedMode !== null) {
    document.body.classList.toggle('dark-mode', savedMode === 'true');
} else {
    document.body.classList.toggle('dark-mode', prefersDarkMode);
}

const toggleButton = document.getElementById('meu-btn');
toggleButton.addEventListener('click', toggleMode);