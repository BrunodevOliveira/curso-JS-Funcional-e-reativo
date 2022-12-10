const { interval, from } = require('rxjs')


/*
  intervalo que serão gerados os números
  retorna um observable, que implementa o padrão Observer
*/
const gerarNumeros = interval(500) //Operador de criação, gera números no intervalo especificado

// é a forma de me registrar em um observable. 
// Aqui informo que estou interessado em receber os dados gerados pelo stream de gerarNumeros
// o subscribe retorna uma inscrição (Subscription), com ela posso me desinscrever
const subscription1 = gerarNumeros.subscribe(num => {
  console.log(Math.pow(2, num));
})


const subscription2 = gerarNumeros.subscribe(console.log)

setTimeout(() => {
  subscription1.unsubscribe()
}, 5000)

setTimeout(() => {
  subscription2.unsubscribe()
}, 8000)


//^ Operador de criação ->  Gera um stream de dados com o array passado como argumento
// from(['transforma', 'em', 'um', 'etream', 'de', 'dados']).subscribe(console.log)