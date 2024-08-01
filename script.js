const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A mudança do novo ensino médio fez com que os alunos tivessem mais contatos com a internet e tecnologia dentro das escolas. ",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "o receio sobre o poder da internet na mão de alunos dentro de sala de aula."
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "a tecnologia pode abrir caminhos."
            }
        ]
    },
    {
        enunciado: " Em um dia de aula uma professora passou um trabalho para ser feito dentro de sala, usando uma das plataformas disponivéis para os alunos no computador da escola, ela pediu para você ficar com a parte da explicação do trabalho em frente a turma, como vocÊ apresentaria?",
        alternativas: [
            {
                texto: " Você escolhe apresentar o trabalho por meio de um slide prático, com um guia para direcionar as pessoas rapidamente.",
                afirmacao: "Ele tem medo de falar em publico,então foi pelo modo prático e rápido."
            },
            {
                texto: "Você resolve falar e explicar o trabalho no quadro de sala de aula, de modo completo e respondendo duvidas la na frente.",
                afirmacao: "se sentiu seguro para prestar ajuda e falar em frente de todos."
            }
        ]
    },
    {
        enunciado: "  Uma das questoẽs apresentadas foi como você lida com a educação sendo avançada junto com a tecnologia dentro das escolas e oque você acha sobre isso? ",
        alternativas: [
            {
                texto: "Estão lidando muito bem com o novo ensino e a tecnologia, um modo mais prático de ensinar e aprender.",
                afirmacao: "a educação está avançando junto com a tecnologia."
            },
            {
                texto: " As pessoas estão se desenteressando pela faculdade de pedagogia, pois eles tem que seguir o cronograma do governo.",
                afirmacao: "a preocupação com professores e seus empregos."
            }
        ]
    },
    {
        enunciado: "No final do trabalho, você teria que achar uma forma de representar o novo ensino junto a tecnologia, seja em forma de desenho, frase,etc.",
        alternativas: [
            {
                texto: "os alunos preferem fazer um desenho por aplicativos que tem no computador.",
                afirmacao: "Modo prático e direto de mostrar que ate desenhos são feitos por internet hoje em dia."
            },
            {
                texto: " Fazer um desenho a mão e com detalhes.",
                afirmacao: " expressa mais realidade e simplicidde, feito com amor."
            }
        ]
    },
    {
        enunciado: "A escola fez uma atividade de pesquisa com os alunos, perguntando se eles estavam se adaptando com o novo modo de ensino das escolas publicas.",
        alternativas: [
            {
                texto: "defende a nova aplicação feita nas escolas, pois pode abrir mais horizontes aos alunos.",
                afirmacao: " Hoje em dia dependemos da internet para viver."
            },
            {
                texto: "totalmente contra, novas diciplinas que não caeem em vestibulares.",
                afirmacao: "prejudica os alunos, principalmente 3 ano. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();