/**
 * ************************************************
 * 9. ¿Qué se implementó en ES9?
 * ************************************************
 */

 //Operador de reposo, puede extraer las propiedades de un objeto que aun no se ha construido

const cvargas = {
    name: 'cvargas',
    age: 27,
    country: 'Yumbo'
};

let {name, ...all} = cvargas;
console.log(name, all);
//Otro ejemplo es si necesito quitar un atributo de un objeto puedo extrarlo y lo demas dejarlo en otro objeto

let {country, ...all2} = cvargas;
console.log(country, all2);

const zonia = {
    namez: 'zvargas',
    agez: 25,
    heigth: '1.50',
    natalCountry: 'La plata',
    depto: 'Huila'
};

let {natalCountry, agee, ...allZ} = zonia;
console.log(natalCountry, agee, allZ);



//Operador de propagacion, nos permite unir varios elementos de un objeto o varios objetos a otro objeto

let person = {
    ...allZ,
    ...all2,
    
}

console.log("person ", person)



///Promise .finally, nos permite saber cuando termina una promesa

const hellooWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hi world'), 3000) 
        : reject(new Error('Test Error'))
    });
};

hellooWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Termino la promesa') )



// Regex, agrupar bloques de regexp y acceder a cada uno de ellos

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2021-04-20')
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day)