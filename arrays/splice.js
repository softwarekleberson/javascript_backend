const nomes = ['kaw ', 'jose ', 'moises ', 'antony ', 'kleberson ', 'chica ']

nomes.splice(1,2, 'parmenides')
nomes.splice(2,0, 'rodrigo')

console.log('atualização da lista chamada : ' + nomes)

/**
 * splice remove elemento a partir de uma posição qualquer
 * e quantos elementos eu queira retirar
 * e caso eu queira colocar um novo elemento (esse é opcional)
 */

/**
 * Tambem serve para adicionar elemento, primeiro argumento a posição de 
 * entrada, coloco o 0 para não retirar ninguem e passo o valor qu eeu quero colocar, nesse caso foi colocado 2, vá 1 casa a esquerda, é lá que vai ficar
 */