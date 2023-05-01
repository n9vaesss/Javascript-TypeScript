FalaOI()

function FalaOI() {
    console.log('Oi')
}


const souUmDado = function () {
    console.log('Sou um dado.')
}

function executaFuncao(funcao) {
    console.log('Vou executar dua função abaixo: ')
    funcao()
}

executaFuncao(souUmDado)


const funcaoArrow = () => {
    console.log("Sou uma arrow function")
}

funcaoArrow()


const obj = {
    falar(){
        console.log("Estou falando.....")
    }
}

obj.falar()