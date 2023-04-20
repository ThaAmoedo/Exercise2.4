/*
Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter 
os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.


Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada
aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/



// Criando a lista de estudantes com seus dados
const estudantes = [
    { nome: 'Lulu', 
    nota1: 8, 
    nota2: 7 },

    { nome: 'Akali', 
    nota1: 7, 
    nota2: 6 },

    { nome: 'Lux', 
    nota1: 5, 
    nota2: 9 },

    { nome: 'Ahri', 
    nota1: 6, 
    nota2: 8 },

    { nome: 'Zoe', 
    nota1: 9, 
    nota2: 7 },
];

// Definindo a função para calcular a média das notas de um aluno
function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2;
}

// Verificando se cada aluno passou no concurso e mostrando uma mensagem na tela
estudantes.forEach(estudante => {  // .forEach para percorrer a lista de "estudantes"
    const media = calcularMedia(estudante.nota1, estudante.nota2);
    if (media >= 7) {
        alert(`${estudante.nome} passou no concurso, com média: 
                  ${media.toFixed(2)}`);
    } else {
        alert(`${estudante.nome} NÃO passou no concurso, com média: 
                  ${media.toFixed(2)}`);
    }
});
