const python = [10,9,8,7,6]
const java = [8,7,6,5,4]
const go = [10,10,10,10]

function mediaSala(media){
    const somaNota = media.reduce((acum, atual) =>
    atual + acum, 0)

    return somaNota / media.length
}

console.log(mediaSala(java))
