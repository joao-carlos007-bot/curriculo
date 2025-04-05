function enviarMensagem(event) {
    const nome = document.getElementById("nome");
    const mensagem = document.getElementById("mensagem");
    const telefone = "5583993167254";

    const texto = `Olá, meu nome é ${nome}, ${mensagem}`;
    const msgformatada = encodeURIComponent(texto);
    formulario.reset();
    const url = `https://wa.me/${telefone}?text=${msgformatada}`;
    window.open(url, "_blank");
  }