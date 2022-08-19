const jogador = [

    {
        nome : "neymar",
        idade : 30,
        gols : 20,

            time : [{
                atual : "Paris",
                contrato : "5 anos"
            }]
    },

    {
        nome : "vinicios junior",
        idade : 22,
        gols : 12,

            time : [{
                atual : "Real Madrid",
                contrato : "3 anos"
            }]
    }

]

jogador[0].time.push({
    atual : "Barcelona",
    contrato : "2 anos"
})

const neymar = [jogador[0].time]
console.log(neymar)

const timeAtual = [...jogador[0].time,...jogador[1].time]
console.log(timeAtual)