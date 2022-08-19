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

const admin = {
    nome : "jose",
    email : "jose@gmail.com",
    rol : "admin",

    criarCurso : function(){
        console.log("curso criado")
    }
}

/**
 * esse Object.setPrototypeOf fará um seguinte ela vai pegar o
 * prototipo do user e vai passar para o admin o que ele quer, ou seja, tudo que envolve o user
 * Ao chamar o exibirInfo() mesmo sendo um admin, o node verá que não tem isso lá então o nosso Object servirá para resolver isso
 */

Object.setPrototypeOf(admin, user)

admin.criarCurso()
admin.exibirInfo()