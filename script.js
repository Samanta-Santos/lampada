const lampada = document.querySelector(".lampada");
const botao = document.querySelector(".botao");
const titulo = document.querySelector(".titulo");
var ligada = false;
var quebrada = false;

//Botão para ligar e desligar
botao.addEventListener("click", () => {
  if (!ligada) {
    lampada.src = "./images/ligada.png";
    botao.innerHTML = "Apagar";
    titulo.textContent = "Lâmpada acessa";
    botao.classList.add("bg-yellow");
    ligada = true;
  } else if (ligada || quebrada) {
    lampada.src = "./images/desligada.png";
    botao.innerHTML = "Acender";
    titulo.textContent = 'Lâmpada desligada'
    botao.classList.remove("bg-yellow");
    ligada = false;
  }
});

//Clickar para quebrar
lampada.addEventListener("click", () => {
    lampada.src = "./images/quebrada.png";
    titulo.textContent = "Vixi, você quebrou, já era!";
    botao.innerHTML = "Trocar";
    botao.classList.add("bg-grey");
    ligada = true;
});

//Passar o mouse para ligar
/*
lampada.addEventListener("mouseenter", () => {
  lampada.src = "./images/ligada.png";
  botao.innerHTML = "Apagar";
  botao.classList.add("bg-yellow");
});

lampada.addEventListener("mouseout", () => {
  lampada.src = "./images/desligada.png";
  botao.innerHTML = "Acender";
  botao.classList.remove("bg-yellow");
});
*/
