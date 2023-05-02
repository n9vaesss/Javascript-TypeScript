function soma(a, b) {
    return a + b
}

function soma2(a, b) {
    console.log(a, b)
}

soma2(5,2)

// document.addEventListener('click', function(){
//     document.body.style.backgroundColor = 'red'
// })

function criaPessoa(nome, sobrenome){
    return{
        nome, 
        sobrenome
    }
}

const p1 = criaPessoa('Luiz', 'Otavio')
const p2 = {
    nome: 'Joao',
    sobrenome: 'Oliveira'
}

console.log(p1)
console.log(p2)

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto
    }
    return falaResto
}

const olaMundo = falaFrase('Olá')
console.log(olaMundo('mundo!'))