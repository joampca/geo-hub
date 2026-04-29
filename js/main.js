let temporizadorGlobo;

document.addEventListener("mousedown", () => {
  document.body.classList.add("clicando");
  clearTimeout(temporizadorGlobo);
  temporizadorGlobo = setTimeout(() => {
    document.body.classList.remove("clicando");
  }, 300);
});

// Função para abrir/fechar o menu hambúrguer no mobile
function toggleMenu() {
  const menuList = document.querySelector(".side-menu ul");
  if (menuList) {
    // A função toggle adiciona a classe se ela não existir, e remove se existir
    menuList.classList.toggle("show-menu");
  }
}
