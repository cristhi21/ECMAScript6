/**
 * ************************************************
 * 6. ¿Qué se implementó en ES7?
 * ************************************************
 */

// 2 cambios añadidos en es7 valor include y operaciones en forma exponencial


//includes: Nos permite saber si hay un elemento dentro de una array

let numbers = [1,2,3,4,7,8];

if(numbers.includes(9)) {
    console.log("Si se encuentra el valor 7")
} else {
    console.error("No se encuentra")
}

//Nota anteriormenre se usaba indexof


//Elevar a la potencia con el doble asterisco **

let base = 4;
let exponent = 3;
let result = base ** exponent;

console.log(result);


// Antes Math.pow(base, exponente)
console.log(Math.pow(2, 4)); // 16
// hoy en día
console.log(2 ** 4); // 16




/**
 * Algunas fuentes:
 * 
 * https://www.campusmvp.es/recursos/post/JavaScript-ECMAScript-ES6-Existe-ES7-Aclarando-las-diferentes-versiones-del-lenguaje.aspx
 * 
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Novedades_en_JavaScript
 * 
 * https://developer.mozilla.org/en-US/docs/Archive/Web/JavaScript/ECMAScript_Next_support_in_Mozilla
 */