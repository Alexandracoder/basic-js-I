// Bienvenida a Javascript básico
// Para comentar una línea: //
// Para comentar un bloque: /* ... */

// Abre el archivo index.html en Chrome o Firefox
// y asegúrate de que puedes ver este mensaje en la consola:

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

// Si has encontrado el mensaje, puedes continuar con los ejercicios

// Ejercicio 1
console.log('Bienvenida/o al bootcamp Femcoders de Factoría F5')

// VARIABLES Y TIPOS DE DATOS

// Ejercicio 2
let nombre = 'Alexandra' // string
let edad = 43 // number
let esCafe = false // boolean
let esCompilado = true // boolean
let vacio = null // null
let indefinido // undefined
let objeto = { marca: 'Toyota' } // object
let array = ['uno', 'dos', 'tres'] // array

console.log(nombre)
console.log(edad)
console.log(esCafe)
console.log(esCompilado)
console.log(vacio)
console.log(indefinido)
console.log(objeto)
console.log(array)

// Ejercicio 3
const postres = ['helado', 'tarta', 'pastel']
console.log(postres)

// Ejercicio 4
const coder = {
nombre: 'Murry Alexandra',
edad: 43,
}
console.log(coder)

// Ejercicio 5
console.log(typeof nombre)
console.log(typeof edad)
console.log(typeof esCafe)
console.log(typeof vacio)
console.log(typeof indefinido)
console.log(typeof objeto)
console.log(typeof array)

// OPERADORES ARITMÉTICOS

// Ejercicio 6: Suma
let suma = 8
suma += 1
console.log('Resultado de la suma:', suma)

// Ejercicio 7: Resta
let resta = 2
resta -= 2
console.log('Resultado de la resta:', resta)

// Ejercicio 8: Multiplicación
let producto = 50
producto *= 2
console.log('Resultado de la multiplicación:', producto)

// Ejercicio 9: División
let division = 8
division /= 2
console.log('Resultado de la división:', division)

// OPERADORES DE COMPARACIÓN

// Ejercicio 10
let var1 = 1
let var2 = 2
let comparacion = var1 === var2
console.log(comparacion)

// Comparación para que sea true
comparacion = var1 + 1 === var2
console.log(comparacion)

// Ejercicio 11
let num1 = 15
let num2 = 20
comparacion = num1 + 5 === num2
console.log(comparacion)

// Ejercicio 12
let num3 = 1
let num3AsString = '1'
let result = num3 === num3AsString
console.log(result) // false

// Ejercicio 13
let result2 = num3 == num3AsString
console.log(result2) // true

// OPERADORES DE CADENAS

// Ejercicio 14
let nombrePersona = 'Murry Alexandra'
let apellidoPersona = 'Rojas Castro'
let nombreCompleto = nombrePersona + ' ' + apellidoPersona
console.log(nombreCompleto)

// OPERADORES DE LÓGICA

// Ejercicio 15
let a = 6
let b = 3

let res = a < 10 && b > 1 // true
console.log(res)

let res2 = a < 10 && b < 1 // false
console.log(res2)

let res3 = a == 5 && b == 5 // false
console.log(res3)

let res4 = a == 6 || b == 0 // true
console.log(res4)

let res5 = a == 0 || b == 3 // true
console.log(res5)

let res6 = a == 6 && b == 3 // true
console.log(res6)
