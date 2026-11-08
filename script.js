
// MENU PARA CELULAR

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});


// FECHAR MENU AO CLICAR EM UM LINK

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });
});


// ALTERNAR TEMA CLARO E ESCURO

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    const isLight = document.body.classList.contains("light-theme");

    themeToggle.textContent = isLight ? "☾" : "☼";
});


// ANIMAÇÃO AO ROLAR A PÁGINA

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    observer.observe(element);
});


// ANO AUTOMÁTICO NO RODAPÉ

document.getElementById("year").textContent = new Date().getFullYear();


// VALIDAÇÃO BÁSICA DO FORMULÁRIO

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (event) => {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        event.preventDefault();
        alert("Por favor, preencha todos os campos.");
    }

});
