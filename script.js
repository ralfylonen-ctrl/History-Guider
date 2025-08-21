// Banco de temas com resumo rápido
const temas = [
  {
    titulo: "Revolução Francesa (1789)",
    texto: "Movimento social e político que derrubou a monarquia na França, trazendo ideias de liberdade, igualdade e fraternidade.",
    imagem: "images/revolucao-francesa.jpg"
  },
  {
    titulo: "Guerra Fria (1947-1991)",
    texto: "Conflito ideológico entre EUA e URSS sem confronto direto, marcado pela corrida armamentista e espacial.",
    imagem: "images/guerra-fria.jpg"
  },
  {
    titulo: "Idade Média",
    texto: "Período entre os séculos V e XV, caracterizado pelo feudalismo, poder da Igreja e surgimento das universidades.",
    imagem: "images/idade-media.jpg"
  },
  {
    titulo: "Renascimento",
    texto: "Movimento cultural dos séculos XIV-XVI que valorizou a arte, ciência e o ser humano.",
    imagem: "images/renascimento.jpg"
  },
  {
    titulo: "Descobrimento do Brasil (1500)",
    texto: "Chegada de Pedro Álvares Cabral ao território que se tornaria o Brasil, marco do início da colonização portuguesa.",
    imagem: "images/descobrimento.jpg"
  },
  {
    titulo: "Primeira Guerra Mundial (1914-1918)",
    texto: "Conflito global causado por disputas imperialistas e alianças militares, resultando em milhões de mortes.",
    imagem: "images/primeira-guerra.jpg"
  },
  {
    titulo: "Segunda Guerra Mundial (1939-1945)",
    texto: "Maior conflito da história, envolvendo potências globais, marcado pelo nazismo, Holocausto e bombas atômicas.",
    imagem: "images/segunda-guerra.jpg"
  },
  {
    titulo: "Independência do Brasil (1822)",
    texto: "Proclamada por Dom Pedro I às margens do Rio Ipiranga, marcou a separação de Portugal.",
    imagem: "images/independencia.jpg"
  },
  {
    titulo: "Guerra do Contestado (1912-1916)",
    texto: "Conflito no sul do Brasil envolvendo posse de terras, camponeses e forças governamentais.",
    imagem: "images/contestado.jpg"
  },
  {
    titulo: "Ditadura Militar no Brasil (1964-1985)",
    texto: "Período autoritário com censura, perseguições políticas e crescimento econômico marcado por desigualdades.",
    imagem: "images/ditadura.jpg"
  }
];

// Mostrar os temas ao clicar em "Abrir"
document.getElementById("abrirBtn").addEventListener("click", () => {
  const temasDiv = document.getElementById("temas");
  temasDiv.innerHTML = ""; // limpa
  temas.forEach((tema, i) => {
    const btn = document.createElement("button");
    btn.innerText = tema.titulo;
    btn.onclick = () => mostrarResumo(i);
    temasDiv.appendChild(btn);
  });
  temasDiv.classList.remove("hidden");
});

// Função que mostra o resumo
function mostrarResumo(index) {
  const tema = temas[index];
  document.getElementById("tituloTema").innerText = tema.titulo;
  document.getElementById("textoTema").innerText = tema.texto;
  document.getElementById("imagemTema").src = tema.imagem;

  document.getElementById("resumo").classList.remove("hidden");
}
