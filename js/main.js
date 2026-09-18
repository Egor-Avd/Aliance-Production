const header = document.querySelector(".header");
const logo = document.querySelector(".header-logo-img use");
const mMenuToggle = document.querySelector(".mobile-menu-toggle");
const menu = document.querySelector(".mobile-menu");

const lightModeOn = (event) => {
  header.classList.add("header-light");
  logo.href.baseVal = "./assets/icons/sprite.svg#logo-dark";
};
const lightModeOff = (event) => {
  header.classList.remove("header-light");
  logo.href.baseVal = "./assets/icons/sprite.svg#logo-light";
};

const openMenu = (event) => {
  menu.classList.add("is-open");
  document.body.style.overflow = "hidden";
  lightModeOn();
};

const closeMenu = (event) => {
  menu.classList.remove("is-open");
  document.body.style.overflow = "";
  lightModeOff();
};

window.addEventListener("scroll", () => {
  this.scrollY > 1 ? lightModeOn() : lightModeOff();
});
mMenuToggle.addEventListener("click", (event) => {
  event.preventDefault();
  menu.classList.contains("is-open") ? closeMenu() : openMenu();
});

const swiper = new Swiper(".swiper", {
  speed: 400,
  autoHeight: true,
  loop: false,
  slidesPerView: 5,
  navigation: {
    nextEl: ".slider-swiper-button-prev",
    prevEl: ".slider-swiper-button-next",
  },
   slidesPerView: 1,

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      },
    // when window width is >= 640px
    1024: {
      slidesPerView: 4,
    }, 
    // when window width is >= 1200px
    1200: {
      slidesPerView: 5,
      },
  },
});
