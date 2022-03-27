const cabecalhoMenuBotao = document.getElementById("cabecalho__menu");
const menuLateral = document.getElementById("menu-lateral");

cabecalhoMenuBotao.onclick = () => {
  menuLateral.classList.toggle("menu-lateral--ativo");
};
