const user = {
    nome : "kleberson",
    email : "santos@gmail.com",
    nascimento : "05/10/1994",
    rol : "admin",
    ativo : true,
    
    exibirInfo : function(){
        console.log(" Seu nome : " + this.nome + " Email " + this.email)
    }

}

//user.exibirInfo()

const exibir = function(){
    console.log(this.nome)
}

//O bind(user) irá unir a chamada da funçao exibir ao objeto literal user, desta forma eles ficam unidos e não se perde a referencia

const exibirNome = exibir.bind(user)
exibirNome()

//underfined
exibir()
