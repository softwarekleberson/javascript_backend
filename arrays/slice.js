const nomes = ['kaw', 'jose', 'moises', 'antony', 'kleberson', 'chica']

const sala1 = nomes.slice(0, nomes.length / 2)
const sala2 = nomes.slice(nomes.length / 2)

console.log(`Turma completa ${nomes}`)
console.log(`Sala 1 ${sala1}`)
console.log(`Sala 2 ${sala2}`)

/**
 * slice corta, a partir de um certo ponto
 * recebe 2 argumentos, o ponto de inicio do corte e o fim
 *  do corte
 */
