const array = ['nome', 'idade', 'email', 'cpf']

const cliente = {
    nome : "kleberson",
    idade : 27,
    email : "kleberson@gmail.com",
    cpf : "123456789"
}

console.log("Acessando nome atravez do indix do array : " + cliente[array[0]])
console.log("Acessando atravez do valor : " + cliente['idade'])

//Elemento por elemento, todos serão exibidos utilizando forEach
array.forEach(index => console.log(cliente[index]))

