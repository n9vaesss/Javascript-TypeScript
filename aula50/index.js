function funcao(a, b, c, d, e) {
    let total = 0

    for (let argumento of arguments) {
        total += argumento
    }

    console.log(total)
    console.log(a, b, c, d, e)
}

funcao(1, 2, 3, 4)


function funcao1(a, b = 2, c = 4) {
    console.log(a + b + c)
}

funcao1(1, undefined, 20)


function funcao2({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade)
}

let obj = {
    nome: 'Caio',
    sobrenome: 'Novaes',
    idade: 22
}

funcao2(obj)


function funcao3([nome, sobrenome, idade]) {
    console.log(nome, sobrenome, idade)
}

let arr = ['Caio', 'Novaes', 22]

funcao3(arr)


const conta = function (operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') { acumulador += numero }
        if (operador === '-') { acumulador -= numero }
        if (operador === '/') { acumulador /= numero }
        if (operador === '*') { acumulador *= numero }
    }
    console.log(acumulador)
}

conta('+', 1, 20, 30, 40, 50)


const conta1 = function (...args) {
    console.log(args)
}

conta1('+', 1, 20, 30, 40, 50)