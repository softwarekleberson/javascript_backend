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

function chaveValor(obj){
    const valores = Object.keys(obj)
    if(valores.includes("dependente")){
        console.log(`Deseja seguro : ${obj.nome}`)
    }
}

chaveValor(cliente)
console.log(Object.values(cliente))
console.log(Object.entries(cliente))
