document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MENU
    ========================== */

    const menuButton = document.querySelector(".menu-button");
    const nav = document.querySelector("nav");

    if (menuButton && nav) {

        menuButton.addEventListener("click", function () {

            nav.classList.toggle("active");

            const aberto = nav.classList.contains("active");

            menuButton.setAttribute(
                "aria-expanded",
                aberto ? "true" : "false"
            );

        });

    }


    /* =========================
       FECHAR MENU
    ========================== */

    const links = document.querySelectorAll("nav a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            if (nav) {
                nav.classList.remove("active");
            }

            if (menuButton) {
                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        });

    });


    /* =========================
       AUMENTAR FONTE
    ========================== */

    const increaseFont =
        document.getElementById("increaseFont");

    if (increaseFont) {

        increaseFont.addEventListener("click", function () {

            const atual = parseInt(
                getComputedStyle(document.documentElement)
                    .getPropertyValue("--tamanho")
            );

            if (atual < 24) {

                document.documentElement.style.setProperty(
                    "--tamanho",
                    (atual + 2) + "px"
                );

            }

        });

    }


    /* =========================
       DIMINUIR FONTE
    ========================== */

    const decreaseFont =
        document.getElementById("decreaseFont");

    if (decreaseFont) {

        decreaseFont.addEventListener("click", function () {

            const atual = parseInt(
                getComputedStyle(document.documentElement)
                    .getPropertyValue("--tamanho")
            );

            if (atual > 12) {

                document.documentElement.style.setProperty(
                    "--tamanho",
                    (atual - 2) + "px"
                );

            }

        });

    }


    /* =========================
       CONTRASTE
    ========================== */

    const contrastButton =
        document.getElementById("contrastButton");

    if (contrastButton) {

        contrastButton.addEventListener("click", function () {

            document.body.classList.toggle(
                "high-contrast"
            );

        });

    }


    /* =========================
       MODO ESCURO
    ========================== */

    const darkMode =
        document.getElementById("darkMode");

    if (darkMode) {

        darkMode.addEventListener("click", function () {

            document.body.classList.toggle("dark");

        });

    }


    /* =========================
       ESPAÇAMENTO
    ========================== */

    const spacingButton =
        document.getElementById("spacingButton");

    if (spacingButton) {

        spacingButton.addEventListener("click", function () {

            document.body.classList.toggle(
                "extra-spacing"
            );

        });

    }


    /* =========================
       FAQ
    ========================== */

    const questions =
        document.querySelectorAll(".faq-question");

    questions.forEach(function (question) {

        question.addEventListener("click", function () {

            const answer =
                question.nextElementSibling;

            if (!answer) {
                return;
            }

            const aberto =
                answer.classList.contains("active");

            answer.classList.toggle("active");

            const sinal =
                question.querySelector("span");

            if (sinal) {

                sinal.textContent =
                    aberto ? "+" : "−";

            }

        });

    });


    /* =========================
       BOTÃO VOLTAR AO TOPO
    ========================== */

    const topButton =
        document.getElementById("topButton");

    if (topButton) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 400) {

                topButton.classList.add("show");

            } else {

                topButton.classList.remove("show");

            }

        });


        topButton.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =========================
       FORMULÁRIO
    ========================== */

    const form =
        document.querySelector(".contact-form");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            const name =
                document.getElementById("name");

            const email =
                document.getElementById("email");

            const message =
                document.getElementById("message");


            if (!name.value.trim()) {

                alert("Digite seu nome.");

                name.focus();

                return;

            }


            if (!email.value.trim()) {

                alert("Digite seu e-mail.");

                email.focus();

                return;

            }


            if (!message.value.trim()) {

                alert("Digite uma mensagem.");

                message.focus();

                return;

            }


            alert(
                "Mensagem enviada com sucesso!"
            );

            form.reset();

        });

    }

});
