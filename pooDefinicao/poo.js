class User{
    constructor(nome, email, nascimento, rol, ativo = true){
        this.nome = nome
        this.email = email
        this.nascimento = nascimento
        this.rol = rol || "estudante"
        this.ativo = ativo
    }

    exibirInfo(){
       return `Nome ${this.nome}, email ${this.email}`
    }
}

const kleberson = new User("kleberson", "santos@gmail.com", "01/04/2002")

console.log(kleberson.exibirInfo())
