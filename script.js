const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPergunsta = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você utiliza com frequência as ferramentas basicas em IA? ",
        alternativas: [
            "Sim",
            "Não"
        ]
    },

    {
        enunciado: "Você consegue imaginar sua vida sem  o uso de Inteligência Artificial
atualmente?",
        alternativas: [
            "Sim",
            "Não"
        ]
    },

     {
        enunciado: "Você consegue diferenciar uma IA generativa de outras formas de IA?",
        alternativas: [
            "Sim",
            "Não"
        ]
    }, 

    {
        enunciado: "Quando pensa em “inteligência artificial”, o ChatGPT é a primeira IA que vem na sua mente?",
        alternativas: [
            "Sim",
            "Não"
        ]
    }, 

    {
        enunciado: "A educação é a área que você acha que a Ia mais imapacta sua vida?",
        alternativas: [
            "Sim",
            "Não"
        ]
    }, 

    {
        enunciado: "Você confia nas informações fornecidas por IAs como ChatGPT?",
        alternativas: [
            "Sim",
            "Não"
        ]
    }, 

    {
        enunciado: "Você já usou IA sem saber que era IA?",
        alternativas: [
            "Sim",
            "Não"
        ]
    }, 


    

];

function mostraPerguntas() {
    perguntaAtual = perguntas[atual];
    caixasPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();

}

function mostraAlternativas() {
   for (const alternativas of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativas;
    caixaAlternativas.appendChild(botaoAlternativas);
   }

}