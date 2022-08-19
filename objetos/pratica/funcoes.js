const cliente = {
    nome : "kleberson",
    idade : 90,
    email : "silvasauro@gmail.com",
    fones : ["5523456789", "44789456123"],

    dependente : [{
        nome : "maria",
        idade : 25,
        status : "mulher"
    }],

    saldo : 100,

    deposiatar : function(valor){
        this.saldo += valor
    }
}

console.log(cliente.deposiatar(3000))
console.log(cliente)