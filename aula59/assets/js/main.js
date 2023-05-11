function Calculadora() {
  this.display = document.querySelector(".display")

  this.inicia = () => {
    this.capturaCliques()
  }

  this.capturaCliques = () => {
    document.addEventListener('click', event => {
      const el = event.target
      if (el.classList.contains('btn-num')) this.addNumDisplay(el)
      if (el.classList.contains('btn-clear')) this.clear()
      if (el.classList.contains('btn-del')) this.del()
      if (el.classList.contains('btn-eq')) this.realizaConta()
    })
  }

  this.addNumDisplay = el => this.display.value += el.innerHTML

  this.clear = () => this.display.value = ''

  this.del = () => this.display.value = this.display.value.slice(0, -1)

  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value)

      if (!conta) {
        alert('Conta invalida')
        return
      }

      this.display.value = conta
    } catch (e) {
      alert('Conta invalida')
      return;
    }
  }

}

const calculadora = new Calculadora()
calculadora.inicia()