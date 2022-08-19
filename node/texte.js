const texto = 'A interface File provê informações sobre arquivos e permite ao JavaScript a acessar seu conteúdo.São geralmente recuperados a partir de um objeto [FileList] (https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) DataTransfer utilizado em operações de arrastar e soltar, ou a partir da API mozGetAsFile() em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElements). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja Implementation notes para mais informações.)'

function extrairLink(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const linkCapturado = texto.match(regex)
    console.log(linkCapturado)
}

extrairLink(texto)