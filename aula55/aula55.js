(function (idade, peso, altura) {
    const sobrenome = 'Novaes'
    function criaNome(nome) {
        return nome + '' + sobrenome
    }

    function falaNome() {
        console.log(criaNome('Caio'))
    }

    falaNome()
    console.log(idade, peso, altura)
})(30, 80, 1.80)

const nome = "qualquer coisa"