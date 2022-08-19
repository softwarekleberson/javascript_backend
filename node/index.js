const chalk = require('chalk')
const fs = require('fs')

const texto = 'A interface File provê informações sobre arquivos e permite ao JavaScript a acessar seu conteúdo.São geralmente recuperados a partir de um objeto [FileList] (https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) DataTransfer utilizado em operações de arrastar e soltar, ou a partir da API mozGetAsFile() em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElements). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja Implementation notes para mais informações.)'

function extrairLink(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultado = []
    let temp
    while((temp = regex.exec(texto)) != null){
        arrayResultado.push({ [temp[1]] : temp[2] })
    }
    return arrayResultado
}

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'não a arquivo no caminho'))
}

async function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8'
    try{
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(extrairLink(texto))
    }catch(erro){
        trataErro(erro)
    }
}

pegaArquivo('./arquivos/texto1.md')

