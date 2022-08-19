const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7] 
const salaJava = [6, 5, 8, 9, 5, 6]
const Salapython = [7, 3.5, 8, 9.5]

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acum, atual) =>
    atual + acum, 0)
    return somaDasNotas / notasDaSala.length
}

console.log(`Media da sala de pytho ${mediaSala(Salapython)}`)
console.log(`Media da sala de java ${mediaSala(salaJava)}`)
console.log(`Media da sala de javascript ${mediaSala(salaJS)}`)

/**
 * o reduce deve receber dois paramentros na função, geralmente se utiliza esses dois como padrão, ai a ordem importa.
 * 
 * Esse 0 é igual a soma = 0
 * acum + atual e vai somando
 */