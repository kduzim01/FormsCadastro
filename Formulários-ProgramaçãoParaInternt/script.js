const cpfInput = document.getElementById("cpf");
const cpfFeedback = document.getElementById("cpf-feedback");
const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

function setCPFState({ valid, mensage }) {
    cpfInput.classList.remove("is-valid", "is-invalid");
    cpfFeedback.classList.remove("ok", "err");

    if (valid) {
        cpfInput.classList.add("is-valid");
        cpfFeedback.classList.add("ok");
        cpfFeedback.textContent = mensage || "CPF válido.";
        cpfInput.setCustomValidity("");
    } else {
        cpfInput.classList.add("is-invalid");
        cpfFeedback.classList.add("err");
        cpfFeedback.textContent = mensage || "Por favor, insira um CPF válido.";
        cpfInput.setCustomValidity("CPF inválido.");
    }
}

function validarCPFOnBlur() {
    const value = cpfInput.value.trim();
    if (value === "") {
        setCPFState({ valid: false, mensage: "O campo de CPF não pode ficar vazio." });
        return false;
    }
    if (cpfRegex.test(value)) {
        setCPFState({ valid: true, mensage: "CPF válido." });
        return true;
    } else {
        setCPFState({ valid: false, mensage: "Formato inválido. Ex.: 000.000.000-00" });
        return false;
    }
}

cpfInput.addEventListener("blur", validarCPFOnBlur);
cpfInput.addEventListener("input", () => validarCPFOnBlur());

const loginInput = document.getElementById("login");
const loginFeedback = document.getElementById("login-feedback");
const loginRegex = /^[A-Za-z0-9._-]{4,}$/;

function setLoginState({ valid, mensage }) {
    loginInput.classList.remove("is-valid", "is-invalid");
    loginFeedback.classList.remove("ok", "err");

    if (valid) {
        loginInput.classList.add("is-valid");
        loginFeedback.classList.add("ok");
        loginFeedback.textContent = mensage || "Login válido.";
        loginInput.setCustomValidity("");
    } else {
        loginInput.classList.add("is-invalid");
        loginFeedback.classList.add("err");
        loginFeedback.textContent = mensage || "Login inválido.";
        loginInput.setCustomValidity("Login inválido.");
    }
}

function validarLogin() {
    const value = loginInput.value.trim();
    if (value === "") {
        setLoginState({ valid: false, mensage: "O campo de login não pode ficar vazio." });
        return false;
    }
    if (loginRegex.test(value)) {
        setLoginState({ valid: true, mensage: "Login válido." });
        return true;
    } else {
        setLoginState({ valid: false, mensage: "Mínimo 4 caracteres. Apenas letras, números e . _ -" });
        return false;
    }
}

loginInput.addEventListener("blur", validarLogin);
loginInput.addEventListener("input", validarLogin);


const emailInput = document.getElementById("email");
const feedbackEl = document.getElementById("email-feedback");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function setEmailState({ valid, mensage }) {
    emailInput.classList.remove("is-valid", "is-invalid");
    feedbackEl.classList.remove("ok", "err");

    if (valid) {
        emailInput.classList.add("is-valid");
        feedbackEl.classList.add("ok");
        feedbackEl.textContent = mensage || "E-mail válido.";
        emailInput.setCustomValidity("");
    } else {
        emailInput.classList.add("is-invalid");
        feedbackEl.classList.add("err");
        feedbackEl.textContent = mensage || "Por favor, insira um e-mail válido.";
        emailInput.setCustomValidity("E-mail inválido.");
    }
}

function validarEmailOnBlur() {
    const value = emailInput.value.trim();
    if (value === "") {
        setEmailState({ valid: false, mensage: "O campo de e-mail não pode ficar vazio." });
        return false;
    }
    if (emailRegex.test(value)) {
        setEmailState({ valid: true, mensage: "E-mail válido." });
        return true;
    } else {
        setEmailState({ valid: false, mensage: "Formato inválido. Ex.: nome@empresa.com" });
        return false;
    }
}

emailInput.addEventListener("blur", validarEmailOnBlur);


const senhaInput = document.getElementById("senha");
const senhafeedback = document.getElementById("senha-feedback");
const senhaRegex = /^(?=.*[0-9])(?=.*[A-Za-z]).{8,}$/;

function setSenhaState({ valid, mensage }) {
    senhaInput.classList.remove("is-valid", "is-invalid");
    senhafeedback.classList.remove("ok", "err");

    if (valid) {
        senhaInput.classList.add("is-valid");
        senhafeedback.classList.add("ok");
        senhafeedback.textContent = mensage || "Senha válida.";
        senhaInput.setCustomValidity("");
    } else {
        senhaInput.classList.add("is-invalid");
        senhafeedback.classList.add("err");
        senhafeedback.textContent = mensage || "Senha inválida.";
        senhaInput.setCustomValidity("Senha inválida.");
    }
}

function validarSenhaOnBlur() {
    const value = senhaInput.value.trim();
    if (value === "") {
        setSenhaState({ valid: false, mensage: "O campo de senha não pode ficar vazio." });
        return false;
    }
    if (senhaRegex.test(value)) {
        setSenhaState({ valid: true, mensage: "Senha válida." });
        return true;
    } else {
        setSenhaState({ valid: false, mensage: "Mínimo 8 caracteres, letras e números." });
        return false;
    }
}

senhaInput.addEventListener("blur", validarSenhaOnBlur);
senhaInput.addEventListener("input", () => validarSenhaOnBlur());

function toggleSenha(id) {
    const input = document.getElementById(id);
    input.type = input.type === "password" ? "text" : "password";
}

const confirmSenhaInput = document.getElementById("confirm_senha");
const confirmSenhaFeedback = document.getElementById("confirm_senha-feedback");

function setConfirmSenhaState({ valid, mensage }) {
    confirmSenhaInput.classList.remove("is-valid", "is-invalid");
    confirmSenhaFeedback.classList.remove("ok", "err");

    if (valid) {
        confirmSenhaInput.classList.add("is-valid");
        confirmSenhaFeedback.classList.add("ok");
        confirmSenhaFeedback.textContent = mensage || "Senhas coincidem.";
        confirmSenhaInput.setCustomValidity("");
    } else {
        confirmSenhaInput.classList.add("is-invalid");
        confirmSenhaFeedback.classList.add("err");
        confirmSenhaFeedback.textContent = mensage || "As senhas não coincidem!";
        confirmSenhaInput.setCustomValidity("Senhas não coincidem.");
    }
}

function validarConfirmSenha() {
    const senha = senhaInput.value.trim();
    const confirm = confirmSenhaInput.value.trim();

    if (confirm === "") {
        setConfirmSenhaState({ valid: false, mensage: "O campo de confirmação não pode ficar vazio." });
        return false;
    }

    if (senha === confirm) {
        setConfirmSenhaState({ valid: true });
        return true;
    } else {
        setConfirmSenhaState({ valid: false, mensage: "As senhas não coincidem!" });
        return false;
    }
}

confirmSenhaInput.addEventListener("blur", validarConfirmSenha);
confirmSenhaInput.addEventListener("input", validarConfirmSenha);


function calcularIR() {
    const salario = parseFloat(document.getElementById("salario").value) || 0;
    const dependentes = parseInt(document.getElementById("dependente").value) || 0;
    const descontoPorDep = 200;
    let base = salario - (dependentes * descontoPorDep);
    if (base < 0) base = 0;

    let aliquota = 0;
    if (base <= 2000) aliquota = 0;
    else if (base <= 3000) aliquota = 0.075;
    else if (base <= 4500) aliquota = 0.15;
    else if (base <= 6000) aliquota = 0.225;
    else aliquota = 0.275;

    const ir = base * aliquota;
    document.getElementById("ir").value = ir.toFixed(2).replace('.', ',');
}

document.getElementById("salario").addEventListener("input", calcularIR);
document.getElementById("dependente").addEventListener("input", calcularIR);


const form = document.getElementById("cadastroform");
const irInput = document.getElementById("ir");

form.addEventListener("submit", function (e) {
    e.preventDefault(); 


    const validations = [
        { valid: validarCPFOnBlur(), element: cpfInput },
        { valid: validarEmailOnBlur(), element: emailInput },
        { valid: validarSenhaOnBlur(), element: senhaInput },
        { valid: senhaInput.value === document.getElementById("confirm_senha").value, 
          element: document.getElementById("confirm_senha"),
          message: "As senhas não coincidem!" },
        { valid: form.nome.checkValidity(), element: form.nome },
        { valid: form.login.checkValidity(), element: form.login }
    ];

    const firstInvalid = validations.find(v => !v.valid);

    if (firstInvalid) {
        firstInvalid.element.focus();
        if (firstInvalid.message) alert(firstInvalid.message);
        return;
    }

    alert("Usuário cadastrado com sucesso!");
    form.reset();
    const inputs = form.querySelectorAll("input");
    inputs.forEach(input => input.classList.remove("is-valid", "is-invalid"));
    const feedbacks = form.querySelectorAll(".feedback");
    feedbacks.forEach(span => span.textContent = "");
    irInput.value = "0,00";
});

form.addEventListener("reset", () => {
    const inputs = form.querySelectorAll("input");
    inputs.forEach(input => input.classList.remove("is-valid", "is-invalid"));

    irInput.value = "0,00";

    const feedbacks = form.querySelectorAll(".feedback");
    feedbacks.forEach(span => {
        span.textContent = "";
    });
});
