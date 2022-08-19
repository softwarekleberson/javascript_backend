const alunos = ['jose', 'manuel', 'carlos', 'cleiton']
const notas = [10, 4, 8, 2]

const alunoReprovado = alunos.filter((nome, index) => notas[index] < 5)
console.log("Reprovados " + alunoReprovado)

const aprovados = alunos.filter((nome, index) => notas[index] >= 8)
console.log("Aprovado com nota maior ou igual a 10 " + aprovados)

/*
Filter retorna um booleano
*/
 