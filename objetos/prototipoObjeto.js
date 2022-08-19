function Cliente (nome, cpf, email){
    this.nome = nome,
    this.cpf = cpf,
    this.email = email
    this.saldo = 0

    this.depositar = function(valor){
        this.saldo += valor
    }
}

let kleberson = new Cliente("kleberson", "123456789", "santos@gmail.com")
kleberson.depositar(500)

console.log(kleberson)

//acessa o prototipo do objeto a forma dele. Nesse caso, o protipo de cliente
console.log(kleberson.__proto__)