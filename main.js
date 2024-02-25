function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

const menuBtn = document.getElementById("menu-btn"); // obtem o elemento do botão de menu pelo seu ID.
const navLinks = document.getElementById("nav-links");// obtem a lista de links de nav. pelo ID
const menuBtnIcon = menuBtn.querySelector("i"); //obtem o icone dentro do botao de menu

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open"); //quando o menu é clicado, a função é executada.

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line"); //o icone também é alterado dependendo se o menu está aberto ou não.
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const headerImage = document.querySelector(".h-image"); // obtem o elemento da imagem da classe h-container
headerImage.addEventListener(
    "animationend",
    (e) => {
        setTimeout(() => {
            headerImage.classList.add ("reveal"); // depois de um "delay" mostra a imagem.
        });
    },
    {once: true }//chamado somente uma vez.
);

const scrollRevealOption = { // especifica a distancia, origem e a duração da animação de revelação.
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".h-content h1", { //usa a biblioteca ScrollReveal.js para aplicar o efeito de revelação
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".h-content h2", {
    ...scrollRevealOption,
    delay: 2000,
  });
  ScrollReveal().reveal(".h-content p", {
    ...scrollRevealOption,
    delay: 2500,
  });
  ScrollReveal().reveal(".h-content div", {
    ...scrollRevealOption,
    delay: 3000,
  });
  
  ScrollReveal().reveal(".header .nav__links", {
    delay: 3500,
  });

