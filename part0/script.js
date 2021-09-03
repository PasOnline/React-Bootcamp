
let casa = "casa";
let constante;

console.log(`${casa} y ${constante} `);

casa = 'nueva casa';
//constante = 'nueva constante';

console.log(`${casa} y ${constante} `);



const persona = {
    name: 'Agustin',
    twitter: 'mitwitter',
    age: 32
}

 
const edad = "age";
console.log(` Mi nombre es ${persona.name} y tengo ${persona[edad]} a;os   `);


const sumar = ( a , b) =>{
    return a + b
}

console.log(  typeof(sumar(2, 2)) )