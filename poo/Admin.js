import User from "./user.js"

/**
 * Importante colocar .js no import User 
 * "./user.js"
 */

export default class Admin extends User {

    constructor(nome, email, nascimento, rol = "admin", ativo = true){
        super(nome, email, nascimento, rol, ativo)
    }

    criarCurso(nomeCurso, vagas){
        return `Nome curso -> ${nomeCurso}, quantidade vagas ${vagas}`
    }

    exibirInfo(){
        return `${this.nome}` 
    }
    
}


