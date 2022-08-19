//Forma sincrona de ler arquivo neste modo o arquivo é lido é recebe uma respostas imediata, mas se o arquivo for grande a resposta não será sincrona e sim assincrona pois irá demandar tempo para a execução

function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8'
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto)=> {
        if(erro){
            trataErro(erro)
        }
        console.log(chalk.green(texto))
    })
}
