const aluno = ['jose', 'manuel', 'carlos', 'cleiton']
const nota = [10, 9, 8, 7]
const nomeENotaAluno = [aluno, nota]

const vereficaNomeLista = (nomelista) => {
    if(nomeENotaAluno[0].includes(nomelista)){
        let index = nomeENotaAluno[0].indexOf(nomelista)
        return `Seu nome é ${nomeENotaAluno[0][index]} e sua nota foi ${nomeENotaAluno[1][index]}`
    }
    else{
        return "Nome não encontrado"
    }
}

console.log(vereficaNomeLista('jose'))

/*
metodo include, verifica se o elemento está presente na lista
index devolve a posição do elento na lista, em forma de numero
*/
 
