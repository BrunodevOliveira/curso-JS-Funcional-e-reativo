function gerarNumeros() {
  return {
    iniciar(fn, intervalo = 1000) {
      let num = 0
      const interval = setInterval(() => {
        fn(num++);
      }, intervalo)

      return {
        parar() {
          clearInterval(interval)
        }
      }
    },
    saldacao: 'olá'

  }
}
// Criar o stream de dados
const temp1 = gerarNumeros()

// iniciar o stream 
const exec1 = temp1.iniciar(numero => {
  console.log(`#1: ${numero * 2}`);
}, 1000)

const temp2 = gerarNumeros()

const exec2 = temp2.iniciar(a => {
  console.log(`#2: ${a + 100}`);
}, 2000)

// parar o stream
setTimeout(() => {
  exec1.parar()
  exec2.parar()
}, 10000);