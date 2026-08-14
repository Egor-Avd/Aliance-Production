const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
  if (this.scrollY > 1) {
    header.classList.add("header-light");
  } else {
    header.classList.remove("header-light");
  }
});
