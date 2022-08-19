export default class User{

    #nome
    #email
    #nascimento
    #rol
    #ativo

    constructor(nome, email, nascimento, rol, ativo = true){
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#rol = rol || "estudante"
        this.#ativo = ativo
    }

    get nome(){
        return this.#nome
    }

    get email(){
        return this.#email
    }

    get nascimento(){
        return this.#nascimento
    }

    get rol(){
        return this.#rol
    }

    get ativo(){
        return this.#ativo
    }

    set nome(nome){
        this.#nome = nome
    }

    set email(email){
        if(email === ''){
            throw new Error("Formato nao valido")
        }
        this.#email = email
    }

    set nascimento(nascimento){
        this.#nascimento = nascimento
    }

    set rol(rol){
        this.#rol = rol
    }

    set ativo(ativo){
        this.#ativo = ativo
    }


    exibirInfo(){
            return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.rol}, ${this.ativo}` 
    }
}


