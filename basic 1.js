//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida/o al bootcamp Femcoders de Factoría F5" y mira en tu navegador si sale el resultado.

//Escribe tu código aquí
console.log('Bienvenida al bootcamp Femcoders de Factoria F5')

//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por los siguientes tipos de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí
let Name = 'Alexandra'
let Edad = 43
let JavaISACupOfCoffee = false
let JavaIsACompiledLenguage = true
let x = null
let numero
const car = Object
console.log(Name)
console.log(Edad)
console.log(JavaISACupOfCoffee)
console.log(JavaIsACompiledLenguage)
console.log(x)
console.log(numero)
console.log(car)
//Ejercicio 3: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola.

//Escribe tu código aquí
let desserts = ['helado', 'tarta', 'pastel']
console.log(desserts)

//Ejercicio 4: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.

//Escribe tu código aquí
const coder = 'Murry Alexandra'
Edad = 43
console.log(coder)
console.log(Edad)

//Ejercicio 5: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado.

//Escribe tu código aquí
console.log(typeof Name)
console.log(typeof Edad)
console.log(typeof JavaISACupOfCoffee)
console.log(typeof x)
console.log(typeof numero)
console.log(typeof car)

// OPERADORES ARITMÉTICOS

// Ejercicio 6: Suma 2 números
let suma = 8
suma += 1 // suma = 8 + 1
console.log('Resultado de la suma:', suma)

// Ejercicio 7: Resta 2 números
let resta = 2
resta -= 2 // resta = 2 - 2
console.log('Resultado de la resta:', resta)

// Ejercicio 8: Multiplicación de 2 números
let producto = 50
producto *= 2 // producto = 50 * 2
console.log('Resultado de la multiplicación:', producto)

// Ejercicio 9: División de 2 números
let division = 8
division /= 2 // division = 8 / 2
console.log('Resultado de la división:', division)

//OPERADORES DE COMPARACIÓN
// Ejercicio 10: Crea dos variables, la primera con valor 1 y la segunda con valor 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aqui
let var1 = 1
let var2 = 2
let comparacion = var1 === var2
console.log(comparacion)

// Ejercicio 10: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí
comparacion = var1 + 1 === var2
console.log(comparacion)

//Ejercicio 11: completa el ejercicio

let num1 = 15
let num2 = 20

comparacion = num1 + 5 == num2 //Realiza la operación de comparación que consideres para que el resultado en consola sea true
console.log(comparacion)

//Ejercicio 12: completa el ejercicio

let num3 = 1
let num3AsString = '1'

let result = num3 === num3AsString //Realiza la operación de comparación que consideres entre las dos variables dadas, para que el resultado en consola sea false sin usar el comparador de desigualdad
console.log(result)

//Ejercicio 13: completa el ejercicio

//Realiza la operación de comparación que consideres con las dos variables del ejercicio anterior para que el resultado en consola sea true.
let result2 = num3 !== 'num3AsString'
console.log(result2)

//OPERADORES DE CADENAS
//Ejercicio 14: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

//Escribe tu código aquí
let name = 'Murry Alexandra'
let lastName = 'Rojas Castro'
let fullName = name + ' ' + lastName
console.log(fullName)

//OPERADORES DE LÓGICA
//Ejercicio 15: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

let a = 6
let b = 3

let res = a < 10 === b > 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res)

let res2 = a < 10 === b < 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res2)

let res3 = a == 5 && b == 5 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res3)

let res4 = a == 6 || b == 0 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res4)

let res5 = a == 0 || b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res5)

let res6 = a == 6 && b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res6)
