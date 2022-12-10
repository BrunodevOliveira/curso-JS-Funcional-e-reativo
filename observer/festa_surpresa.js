
const readline = require('readline')

function obterResposta(pergunta) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  return new Promise(resolve => {
    rl.question(pergunta, resp => {
      resolve(resp)
      rl.close()
    })
  })
}

// * Observer
function namorada() {
  console.log("Namorada: apagar as luzes")
  console.log("Namorada: pedir silêncio")
  console.log("Namorada: gritar Suresa!!!")
}

// * Observer
function sindico(evento) {
  console.log("Sindico: monitorando o barulho")
  console.log(`Sindico: evento -> ${evento.resp}`)
  console.log(`Sindico: evento -> ${new Date(evento.data)}`)

}

//~Subject ->  Ele tem que trabalhar de forma proativa para que outros códigos sejam reativos
async function porteiro(interessados) {
  while (true) {
    const resp = await obterResposta('O namorado chegou? (s/N/q) ')
    if (resp.toLowerCase() === 's') {
      //! Observadores são notificados
      (interessados || []).forEach(observer => observer({ resp, data: Date.now() }))
    } else if (resp.toLowerCase() === 'q') {
      break;
    }
  }
}

/*
  Chamada da função -> Registrea dois observadores
  Os observadores são -> namorada e indico
  O subject -> é a função porteiro que monitora se o evento aconetceu ou não
*/
porteiro([namorada, sindico])