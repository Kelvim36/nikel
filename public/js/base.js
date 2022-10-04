const nome = "Kelvim";
let nome2 = "";
let pessoaDefault = {
    nome: "Kelvim",
    idade: "20",
    trabalho: "Programador"
}

let nomes = ["Kelvim", "Joana", "Billy"];

let possoasListaVazia = [];

let pessoas = [
        {
            nome: "Kelvim",
            idade: "20",
            trabalho: "Programado"
        },
        {
            nome: "Joana",
            idade: "25",
            trabalho: "UX/UI Designer"
        }    
];


function alterarNome() {
    nome2 = "Joana";
    console.log("Valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(nomeNovo) {
    nome2 = nomeNovo;
    console.log("Valor alterado recenbendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
console.log("Nome:");
console.log(pessoa.nome);

console.log("Idade:");
console.log(pessoa.idade);

console.log("Trabalho:");
console.log(pessoa.trabalho);
}

function adcionarPessoa(pesssoa) {
    pessoas.push(pessoas);
}

function imprimirPessoas() {
    console.log("-----IMPRIMIR PESSOAS-----");
    pessoas.forEach((item) => {
       console.log("Nome:");
       console.log(item.nome);

        console.log("Idade:");
       console.log(item.idade);

       console.log("Trabalho:");
       console.log(item.trabalho);
    })}

imprimirPessoas();

adcionarPessoa({
    nome: "Thiago",
    idade: "27",
    trabalho: "Pedreiro"
});

imprimirPessoas();
