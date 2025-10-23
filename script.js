// =============================
// LÓGICA DO QUESTIONÁRIO
// =============================
const caixaIntroducao = document.querySelector(".caixa-introducao");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoComecar = document.getElementById("botao-comecar");
const botaoRecomecar = document.getElementById("botao-recomecar");

const perguntas = [
  { enunciado: "Você utiliza com frequência as ferramentas básicas em IA?", alternativas: ["Sim", "Não"] },
  { enunciado: "Você consegue imaginar sua vida sem o uso de Inteligência Artificial atualmente?", alternativas: ["Sim", "Não"] },
  { enunciado: "Você consegue diferenciar uma IA generativa de outras formas de IA?", alternativas: ["Sim", "Não"] },
  { enunciado: "Quando pensa em 'inteligência artificial', o ChatGPT é a primeira IA que vem na sua mente?", alternativas: ["Sim", "Não"] },
  { enunciado: "A educação é a área que você acha que a IA mais impacta sua vida?", alternativas: ["Sim", "Não"] },
  { enunciado: "Você confia nas informações fornecidas por IAs como ChatGPT?", alternativas: ["Sim", "Não"] },
  { enunciado: "Você já usou IA sem saber que era IA?", alternativas: ["Sim", "Não"] },
];

let atual = 0;
let historiaFinal = "";

botaoComecar.addEventListener("click", () => {
  caixaIntroducao.style.display = "none";
  caixaPerguntas.style.display = "block";
  caixaAlternativas.style.display = "block";
  mostraPergunta();
});

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }

  const perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas(perguntaAtual.alternativas);
}

function mostraAlternativas(alternativas) {
  for (const alternativa of alternativas) {
    const botao = document.createElement("button");
    botao.textContent = alternativa;
    botao.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botao);
  }
}

function respostaSelecionada(opcao) {
  historiaFinal += opcao + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "Fim do questionário!";
  caixaAlternativas.style.display = "none";
  textoResultado.textContent = "Suas respostas foram: " + historiaFinal.trim() + ".";
  caixaResultado.style.display = "block";
  botaoRecomecar.style.display = "inline-block";
}

botaoRecomecar.addEventListener("click", () => {
  atual = 0;
  historiaFinal = "";
  caixaResultado.style.display = "none";
  botaoRecomecar.style.display = "none";
  mostraPergunta();
  caixaPerguntas.style.display = "block";
  caixaAlternativas.style.display = "block";
});

// =============================
// EFEITO VISUAL TUBES CURSOR
// =============================
import TubesCursor from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js";

const app = TubesCursor(document.getElementById('canvas'), {
  tubes: {
    colors: ["#f967fb", "#53bc28", "#6958d5"],
    lights: {
      intensity: 200,
      colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"]
    }
  }
});

document.body.addEventListener('click', () => {
  const colors = randomColors(3);
  const lightsColors = randomColors(4);
  app.tubes.setColors(colors);
  app.tubes.setLightsColors(lightsColors);
});

function randomColors(count) {
  return new Array(count)
    .fill(0)
    .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'));
}
