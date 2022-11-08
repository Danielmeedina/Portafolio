document.addEventListener("click", (e) => {
  if (e.target.matches(".mostrar")) {
    const linksMostrar = document.querySelector(".panel");
    linksMostrar.classList.toggle("is-active");
  }
  if (e.target.matches(".panel a") || e.target.matches("img")) {
    document.querySelector(".panel").classList.remove("is-active");
  }
});
