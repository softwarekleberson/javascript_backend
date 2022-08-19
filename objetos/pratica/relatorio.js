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

let relatorio = ""

    function informacao(cliente){
        for(let info in cliente){
            if(typeof(cliente[info]) === "object" ||  typeof(cliente[info]) === "function"){
                continue
            }
            else{
                relatorio += ` 
                ${info} => ${cliente[info]} 
                `
            }
        }
        return relatorio
    }

console.log(informacao(cliente))