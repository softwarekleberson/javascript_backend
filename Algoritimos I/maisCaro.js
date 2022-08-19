const livros = require('./livros')



let maisCaro = 0
for(let index = 0; index < livros.length; index ++){
    if(livros[index].valor > livros[maisCaro].valor){
        maisCaro = index
    }
}

console.log(livros[maisCaro].valor)