const cliente = {
    nome : "kleberson",
    idade : 90,
    email : "silvasauro@gmail.com",
    fones : ["5523456789", "44789456123"],

    dependente : [{
        nome : "maria",
        idade : 25,
        status : "mulher"
    }]
}

cliente.dependente.push({
    nome : "joaquina",
    idade : 10,
    status : "filha"
})

cliente.dependente.push({
    nome : "poliana",
    idade : 5,
    status : "filha"
})

console.log(cliente)
console.log(cliente.dependente[0])

const maisVelha = cliente.dependente.filter(dependentes => dependentes.idade === 25)
console.log(maisVelha[0])

