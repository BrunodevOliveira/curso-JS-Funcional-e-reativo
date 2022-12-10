const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function gerarElementos(array) {
  return {
    iniciar(fn) {
      let indice = 0
      const intervalo = setInterval(() => {
        if (indice >= array.length) {
          clearInterval(intervalo)
        } else {
          fn(array[indice])
          indice++
        }
      }, 1000)

      return {
        parar() {
          clearInterval(intervalo)
        }
      }
    }
  }
}

const temp1 = gerarElementos(numeros)

//essa função pega cada elemetno do array numeros e eleva ao quadrado 
const exec1 = temp1.iniciar(num => {
  console.log(Math.pow(2, num));
})

setTimeout(() => {
  exec1.parar()
}, 4000)

gerarElementos(['Ana', 'Bia', 'Carlos']).iniciar(console.log)