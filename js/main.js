const header = document.querySelector(".header");
const logo = document.querySelector(".header-logo-img use")
window.addEventListener("scroll", () => {
  if (this.scrollY > 1) {
    header.classList.add("header-light");
    logo.href.baseVal = "./assets/icons/sprite.svg#logo-dark";
  } else {
    header.classList.remove("header-light");
    logo.href.baseVal = "./assets/icons/sprite.svg#logo-light";
  }
});
