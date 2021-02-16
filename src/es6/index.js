/**
 * Curso de ECMAScript 6+
 * Oscar Barajas Tavares
 * 


/**
 * *****************************************************
 *  2. Default Params y Concatenación
 * *****************************************************
 * 
 * Instalar Extension Code runner VS code
 */

//ES5
function newFunction(name, age, country){
    var name = name || 'cvargas';
    var age = age || 27;
    var country = country || 'Cali';
    console.log(name, age, country);
}

//es6
//Parametros por default
function newFunction2(name = 'Cristhian', age = 27, country = 'Yumbo'){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Zonia', 25, 'La plata');



//Template literals

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2); 

/**
 * Archivos y Enlaces: 
 * https://marketplace.visualstudio.com/items?itemName=RobbOwen.synthwave-vscode
 * https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner
 * 
 */




 /**
 * ****************************************************************
 * 3. LET y CONST, Multilínea, Spread Operator y Desestructuración
 * ****************************************************************
 */

//******* Multilinea
let lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n"
+ "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ";
console.log(lorem);

let lorem2 = `Estamos aprendiendo
ES6
Con oscar barajas!!!
`;
console.log(lorem2);


//******** Desestructuración
let person = {
    'name': 'cvargas',
    'age': '27',
    'country': 'Cali',
    'address': {
        'pais': 'Colombia',
        'municipio': 'Yumbo',
        'code_postal': '226'
    }
}
console.log(person.name, person.age);

let {name, ...elResto} = person;
const { address: {pais}} = person;
console.log(name, elResto);
console.log(pais);

/**
 * Destructuracion:
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment# */

// let { name, age, country } = person;
// console.log(name, age, country);
// console.log(typeof country);


// Spread Operator  ||  Operador de propagación
let team1 = ['cvargas', 'zvargas', 'jvargas']
let team2 = ['ycuero', 'dvasquez', 'mangulo', 'ysaldaña']

let education = ['David', ...team1, ...team2];
console.log(education);


/**
 * Operador de propagacion
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Spread_operator
 */


//LET y CONST
{
    var global = "Variable global";
}

{
    let globalLet = "Variable let global";
    console.log(globalLet);
}

console.log(global);

//CONST, no permite la reasignacion
const a = "b";
a = a;
console.log(a);



/**
 * *******************************************************
 * 4. Arrow Functions, Promesas y Parámetros en objetos
 * *******************************************************
 */

let name = 'oscar';
let age = 32;

//ES5
obj = { name: name, age: age }

//ES6
obj2 = {name, age};
console.log(obj2)


// Arrow Functions
//Estas funciones vienen a solventar un problema particular o a trabajar con dos elementos
//una sintaxis más reducida, Un this no vinculado.

//Parametros en objetos
const names = [
    {name: 'cvargas', age: 27},
    {name: 'Yeison', age: 88}
]

//Antes se hacia asi: con una funcion anonima
let listOfNames = names.map(function (item){
    console.log(item)
})

//Las arrow function son funciones anonimas
let listOfNames2 = names.map((item) => console.log(item));

let listOfNames3 = (name, age, country) => {
    console.log(name)
    return {name, age, country}
}

let moni = listOfNames3('monica', 33);
console.log(moni)

let listOfNames4 = name => {
    console.log("Hi", name)
}

listOfNames4('good')

let square = num => num * num;

console.log(square(2))

/**
 * Funciones flecha
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones/Arrow_functions
 */


//Promesas 
//Las promesas resuelven el problema del callbackHell
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve("Hey cvargas")
        }else{
            reject("Ups!")
        }
    });
}

//el then nos permite obtener la respuesta y se ejecuta con un arrow function
helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hi'))
    .catch(error => console.log(error));

/**
 * Archivos y enlaces:
 * https://platzi.com/clases/asincronismo-js/
 * https://platzi.com/blog/que-es-y-como-funcionan-las-promesas-en-javascript/
 * https://platzi.com/blog/mezclando-flujos-sincronos-y-asincronos/
 */ 



 /**
  * **********************************************
  * 5. Clases, Módulos y Generadores
  * **********************************************
  */

  // Clases - manejo de sintaxis mas clara para objetos y herencia en JS

class Calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new Calculator();
console.log(calc.sum(2,3));


// Módulos 
import { hello } from './module';
console.log(hello());
//Revisarlo bien porque con code Runner no funciona al parecer por una cuestion que no esta implementada en node.js

/**
 * Modulos:
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/M%C3%B3dulos
 */


// Generadores
// funcion que retorna una serie de valores según el algoritmo definido

function* helloWord() {
    if(true){
        yield 'Hello, ';
    }
    if(true){
        yield 'world';
    }
}

const generatorHello = helloWord();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
// Un caso muy popular es el fibonacci


/**
 * https://platzi.com/clases/javascript-profesional/
 */