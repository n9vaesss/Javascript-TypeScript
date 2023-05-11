function Pessoa(nome, sobrenome) {
    const ID = 123456

    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = () =>{
        console.log('Sou um metodo')
    }
}

const p1 = new Pessoa('Luiz', 'Otavio')
const p2 = new Pessoa('Caio', 'Novaes')

console.log(p1.nome) 