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

function oferecerDesconto(obj){
    const propriedadesCliente = Object.keys(obj)
    if(propriedadesCliente.includes("dependente")){
        console.log(`Você deseja o seguro : ${obj.nome}`)
    }
}

oferecerDesconto(cliente)

//value : pega o valor do objeto
console.log(Object.values(cliente))

//entries : devolve um array com chave e valor
console.log(Object.entries(cliente))
