//assincrono, neste modo primeiro vai ler todo o arquivo, depois (then), vai chamar uma função, arrow function e passar como argumento o que foi lido e imprimir no console.log, caso tenha problema catch resolve isso e lança a excesão

function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8'
    fs.promises
    .readFile(caminhoDoArquivo, encoding)
    .then((texto) => chalk.blue(console.log(texto)))
    .catch((erro) => trataErro(erro))
}
