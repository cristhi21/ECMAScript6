/**
 * ************************************************
 * 7. ¿Qué se implementó en ES8?
 * ************************************************
 */

//Object entries

const data = {
    frontend : 'Andres',
    backend: 'cvargas',
    desing: 'Zonia'
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


//Object values: Devuelva valores de un objeto a un array
const data = {
    frontend : 'Andres',
    backend: 'cvargas',
    desing: 'Zonia'
}

const values = Object.values(data);
console.log(values);
console.log(values.length);


// Padding: nos permite añadir cadenas vacías a string, pudiendo modificar la cadena string como tal.
//Podría servir del lado del front , para mostrar una estructura de elementos.

const string ='hello';
console.log(string.padStart(7,'hi')) // se añade al inicio la palabra 'hi', el primer parametro nos dice cuantos caracteres queremos tener
console.log(string.padEnd(12,'hi')) // Se añade al final la palabra 'hi'



/**
 * ************************************************
 * 8. Async Await
 * ************************************************
 */


const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true) 
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error(''))
    })
};

const helloAsync = async () => {
    //Hace llamado y espera a que suceda
    const hello = await helloWorld();
    //const hello2 = await 
    console.log(hello);
}

helloAsync();

const anotherFunction = async () => {
    try{
        const hello = await helloWorld();
        console.log(hello);
    }catch(error){
        console.log(error);
    }
};

anotherFunction();
 
/** 
 * 
 * https://platzi.com/tutoriales/1789-asincronismo-js/5063-las-promesas-y-async-await-logicamente-no-son-iguales-y-te-explico-el-porque/
 * */ 