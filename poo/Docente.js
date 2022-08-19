import User from "./user.js";

export default class Docente extends User{
    constructor(nome, email, nascimento, rol = "docente", ativo = true){
        super(nome, email, nascimento, rol, ativo)
    }

    aprovarAluno(nome, curso){
        return `Nome aluno -> ${nome}, curso ${curso} aprovado`
    }

    static registro(dataRegistro){
        return `${dataRegistro}`
    }
}

