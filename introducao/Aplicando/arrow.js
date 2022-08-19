const nome = nomePessoa => `Nome : ${nomePessoa}`
const soma = (n1, n2) => n1 + n2

const maior = (n1, n2) => {
    if(n1 > n2){
        return n2
    }else{
        return n1
    }
}

console.log(nome("kleberson"))
console.log(soma(10,20))
console.log(maior(5,3))
