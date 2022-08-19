const notas = [10, 6.5, 8, 7.5]
let notasSomadas = 0

for (let index = 0; index < notas.length; index++) {
    notasSomadas += notas[index]
}

let media = notasSomadas / notas.length
console.log(media)