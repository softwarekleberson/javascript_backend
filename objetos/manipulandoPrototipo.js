function Cliente (nome, cpf, email){
    this.nome = nome,
    this.cpf = cpf,
    this.email = email
    this.saldo = 0

    this.depositar = function(valor){
        this.saldo += valor
    }
}

//call chama a forma de Cliente, e eu pego o que eu quero dessa forma
function ClientePolpanca(nome, email){
    Cliente.call(this,nome, email)

    this.seguro = function(resposta){
        this.seguro = resposta
    }
}

//Aqui foi criado uma função, utilizando uma prototype
ClientePolpanca.prototype.depositarPoupanca = function(valor){
    this.saldo += valor
}

let kleberson = new Cliente("kleberson", "123456789", "santos@gmail.com")
kleberson.depositar(500)

let juliana = new ClientePolpanca("juliana", "juliana@gmail.com")
juliana.seguro(true)
juliana.depositarPoupanca(1000)

console.log(juliana)