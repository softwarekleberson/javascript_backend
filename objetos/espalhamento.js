const cliente = [

{
    nome : "kleberson",
    idade : 90,
    email : "silvasauro@gmail.com",
    fones : ["5523456789", "44789456123"],

    dependente : [{
        nome : "maria",
        idade : 25,
        status : "mulher"
    }],

}, 

{
    nome : "florinda",
    idade : 29,
    email : "donaflorinda@gmail.com",
    fones : ["55123456789", "44741852"],

    dependente : [{
        nome : "fernanda",
        idade : 5,
        status : "filha"
    }],
} 
]


/**
 * esses 3 pontinhos são o array sendo recebido e espalhado dentro de um novo array
 */

const listaEspalhamneto = [...cliente[0].dependente, ... cliente[1].dependente]

console.table(listaEspalhamneto)