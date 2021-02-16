//Salio en junio de 2019
/**
 * ****************************************************
 * 10. ¿Qué se implementó en ES10?
 * ****************************************************
 */

let array = [1,2,3, [1,2,3,[1,2,3]]];

//array.flat - aplana el array
//las numeros son los niveles, valor de la profundidad sobre la cual se quiere trabajar el metodo flat
console.log(array.flat());
console.log(array.flat(2));

//El método flat () crea una nueva matriz con todos los elementos de la submatriz concatenados en ella de forma recursiva hasta la profundidad especificada.

//flat map, mapear cada elemento, pasarle una funcion y aplanaro segun el resultado

let array = [1,2,3,4,5]
console.log(array.flatMap(value => [value, value * 2]));


//trimStart -  Eliminar espacios en blanco del comienzo de un String
let hello = '              Hello world';
console.log(hello)
console.log(hello.trimStart())

//trimEnd -  Eliminar espacios en blanco del final de un String
let hello = 'Hi world         '
console.log(hello)
console.log(hello.trimEnd())


//Optional Catch Binding, se puede pasar de forma opcional el parametro de error al valor de catch

try {

} catch /*(error) ya no es necesario colocarlo*/ {
    error
}


//From entries - transforma clave - valor en objetos
//ej: array con 2 elementos podemos convertirlos en un objeto
let entries = [["name", "oscar"], ["age", 32]]
console.log(Object.fromEntries(entries))

//Podemos transformar de arreglo a objetos o de objetos a arreglos segun sea el caso



//Objeto de tipo simbolo, nos permite acceder a una descripcion de un objeto de tipo symbol

let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);

// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Symbol




/**
 * ********************************************
 * 11. TC39 y Cierre del curso
 * ********************************************
 */

 /**
  * https://tc39.es/
  * https://github.com/tc39/proposals
  * https://platzi.com/clases/asincronismo-js/
  * https://platzi.com/clases/scope/
  * https://platzi.com/clases/javascript-navegador/
  * https://platzi.com/clases/javascript-profesional/
  * https://platzi.com/clases/funcional-js/
  * https://platzi.com/blog/un-mes-gratis-en-platzi/
  */