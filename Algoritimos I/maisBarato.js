const livros = require('./livros')

let maisBarato = 0
for(let index = 0; index < livros.length; index++ ){
    if(livros[index].valor < livros[maisBarato].valor){
        maisBarato = index
    }
}

console.log("O livro mais barato custa " + livros[maisBarato].valor + " seu nome é   " + livros[maisBarato].titulo)

