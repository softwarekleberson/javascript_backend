const alunos = ['ana', 'jose', 'kleber', 'cleusa']
const notas = [10, 6, 1, 2]

const aprovados = alunos.filter((nome, index) => notas[index] > 5)
console.log(`Aprovados : ${aprovados}`)

const reprovados = alunos.filter((nome, index) => notas[index] < 5)
console.log(`Reprovados : ${reprovados}`)