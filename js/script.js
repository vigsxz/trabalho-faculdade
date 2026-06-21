function mostrarMensagem() {
  const mensagem = document.getElementById("mensagem");
  const botao = document.querySelector("button");

  if (mensagem.innerHTML === "") {
    mensagem.innerHTML = `
      Entre em contato:
      <br>
      <a href="https://wa.me/5561999999999" target="_blank">
        WhatsApp
      </a>
    `;
    botao.innerText = "Ocultar contato";
  } else {
    mensagem.innerHTML = "";
    botao.innerText = "Agendar horário";
  }
}