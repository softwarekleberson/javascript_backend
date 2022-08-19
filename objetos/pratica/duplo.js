const pessoa = {
    nome : "cleusa",
    idade : 35,
    email : "cleusa@gmail.com",
    fones : ["123456789", "987456321", "591753452"],

        dependente : [{

            nome : "chica",
            idade : 65,
            status : "aposentada" 
        }]
}

pessoa.dependente.push = {
    nome : "kaw",
    idade : "25",
    status : "filha"
}

console.log(pessoa)

