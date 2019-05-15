

let jugador1 = prompt('jugador 1').toLowerCase()

let numero = Number(prompt('numero'))

// jugador1 = jugador1.toLowerCase()

let jugador2 = 'papel'

// if (jugador1 === 'papel') {
//   if (jugador2 === 'papel') {
//     console.log('empate')
//   } else if (jugador2 === 'piedra'){
//     console.log('gana jugador 1')
//   } else {
//     console.log('gana jugador 2')
//   }
// } else if (jugador1 === 'piedra') {
//   if (jugador2 === 'papel') {
//     console.log('gana jugador 2')
//   } else if (jugador2 === 'piedra') {
//     console.log('emapte')
//   } else {
//     console.log('gana jugador 1')
//   }
// } else if (jugador1 === 'tijera') {

// }

if (jugador1 === 'papel' && jugador2 === 'papel') {
  console.log('empate')
} else if (jugador1 === 'papel' && jugador2 === 'piedra') {
  console.log('gana jugador 1')
}
