const notas = [10, 9, 8, 7, 6, 5]

const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota)
console.log(notasAtualizadas)

/**
 * O map retorna um elemento, ao contrario das arrow function
 * é necessario atruibuir o ++ nota deste jeito posis se não
 * a nota não vai sofrer atribuição
 */