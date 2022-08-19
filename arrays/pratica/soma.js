const notas = [10,9,8,7,1]
const aumenta = notas.map(soma => soma == 10 ? soma : ++soma)

console.log(aumenta)
