const cliente = {
    nome : "kleberson",
    idade : 27,
    email : "santos@gmail.com",
    cpf : "123456789"
}

console.log(`Meu nome é ${cliente.nome} e eu tenho ${cliente.idade} os três primeiros digitos do meu cpf são ${cliente.cpf.substring(0,3)}`)