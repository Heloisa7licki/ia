const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPergunta = document.querySelector(".caixa-perguntas"); 
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");



const perguntas = [
    {
        enunciado: "Você utiliza com frequência as ferramentas básicas em IA?",
        alternativas: ["Sim", "Não"]
    },
    {
        enunciado: "Você consegue imaginar sua vida sem o uso de Inteligência Artificial atualmente?",
        alternativas: ["Sim", "Não"]
    },
    {
        enunciado: "Você consegue diferenciar uma IA generativa de outras formas de IA?",
        alternativas: ["Sim", "Não"]
    },
    {
        enunciado: "Quando pensa em “inteligência artificial”, o ChatGPT é a primeira IA que vem na sua mente?",
        alternativas: ["Sim", "Não"]
    },
    {
        enunciado: "A educação é a área que você acha que a IA mais impacta sua vida?",
        alternativas: ["Sim", "Não"]
    },
    {
        enunciado: "Você confia nas informações fornecidas por IAs como ChatGPT?",
        alternativas: ["Sim", "Não"]
    },
    {
        enunciado: "Você já usou IA sem saber que era IA?",
        alternativas: ["Sim", "Não"]
    },
];



let atual = 0;
let perguntaAtual;
let historiaFinal = "";



function mostraPerguntas() {
    perguntaAtual = perguntas[atual];
    caixaPergunta.textContent = perguntaAtual.enunciado; 
    mostraAlternativas();
}



function mostraAlternativas() {
    caixaAlternativas.innerHTML = ''; 
    for (const alternativa of perguntaAtual.alternativas) { 
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa)); 
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}



function respostaSelecionada(opcaoSelecionada) {
    const afitmacoes = opcaoSelecionada.afitmacoes;
    historiaFinal += afitmacoes +"";
    atual++;
    if (atual < perguntas.length) {
        mostraPerguntas(); 

    }
}



mostraPerguntas();
