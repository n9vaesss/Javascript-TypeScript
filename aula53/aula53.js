function retornaFuncao(nome) {
    return function () {
        return nome
    }
}

const funcao = retornaFuncao('Caio')
const funcao2 = retornaFuncao('Novaes')

console.log(funcao)
console.log(funcao2)

console.log(funcao(), funcao2())
