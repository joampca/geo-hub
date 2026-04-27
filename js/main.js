let temporizadorGlobo;

document.addEventListener("mousedown", () => {
  document.body.classList.add("clicando");
  clearTimeout(temporizadorGlobo);
  temporizadorGlobo = setTimeout(() => {
    document.body.classList.remove("clicando");
  }, 300);
});
