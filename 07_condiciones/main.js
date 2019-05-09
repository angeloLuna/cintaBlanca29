// let input = prompt('ingresa contraseña')

// const password = 'gatitos13'

// if (input === password) {
//   console.log('Acceso concedido')
// } else {
//   console.log('Contraseña incorrecta')
// }

// let nombre = prompt('Nombre')

// .length regresa el numero de elementos que contiene la variable

// if (nombre.length < 3) {
//   console.log('Nombre corto')
// } else if (nombre.length < 7) {
//   console.log('Nombre normal')
// } else {
//   console.log('Nombre largo')
// }



// contraseña caracteres entre el rango de 4 - 8

let password = prompt('Contraseña')

// 1 solución
if (password.length >= 4) {
  if (password.length <= 8){
    console.log('correcto')
  } else {
    console.log('contraseña muy larga')
  }
} else {
  console.log('contraseña muy corta')
}

// 2 solucíon

if (password.length >= 4 && password.length <= 8) {
  console.log('Correcto')
} else {
  console.log('Debe ser entre 4 y 8 caracteres')
}

// and
// &&

// or
// ||

// not
// !


