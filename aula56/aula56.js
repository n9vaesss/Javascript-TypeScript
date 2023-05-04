function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        set nomeCompleto(valor){
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
            console.log(valor)
        },
        fala(assunto) {
            return `${this.nome} esta ${assunto}`
        },
        altura,
        peso,
        get imc() {
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

const p1 = criaPessoa('Caio', 'Novaes', 1.80, 80)
p1.nomeCompleto = 'Maria Oliveira Silva'
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.imc)

console.log(p1.nomeCompleto)
