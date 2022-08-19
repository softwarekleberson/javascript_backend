const nomes = ['kleberson', 'chica', 'cleusa', 'kaw']
const notas = [10, 9, 8, 7]

//Array by Dimencional
let listaDeNotaEAlunos = [nomes, notas]

console.log("Seu nome é : " + listaDeNotaEAlunos[0][1] + 
            " e sua media foi " + listaDeNotaEAlunos[1][1])

/**
 * observe que para acessar o nome eu passei a posição do array (nome) 
 * depois que eu entrei no array eu acessei o que tinha dentro dele no caso
 * chica
 */