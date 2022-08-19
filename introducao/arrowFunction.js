const nomePessoa = nome => `meu nome é ${nome}`
console.log(nomePessoa('kleberson'))

const soma = (num1, num2) => num1 + num2
console.log(soma(50,10))

const somaNumerosPequenos = (n1, n2) => {
    if(n1 > 10 || n2 > 10){
        return 'soma menores que 10'
    }else{
        return n1 + n2
    }
}

console.log(somaNumerosPequenos(2,4))