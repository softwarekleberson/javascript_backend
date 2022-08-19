const notas = [10, 6.5, 8, 7.5]
let somaNota = 0

notas.forEach(nota =>{
    somaNota += nota
})

let media = somaNota / notas.length
console.log(media)

/*
forEach pega o vetor, o forEach passa por todos os elementos
e coloca dentro de uma variavel, que nesse casso é o nota
*/
 