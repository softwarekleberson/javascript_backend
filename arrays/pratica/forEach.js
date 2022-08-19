let notas = [10,9,8,7,6]
let soma = 0
let somaPar = [10,8,6,4,2]
let pares = 0

somaPar.forEach(soma => {
    pares += soma
})

notas.forEach(nota => {
    soma += nota
})

console.log(pares)
console.log(soma / notas.length)