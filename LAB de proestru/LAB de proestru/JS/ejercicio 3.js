//Crear un programa que permita obtener la sumatoria, el promedio, el número mayor y menor de un arrays de números

let numeros = [9, 5, 3, 7, 2, 20];

let sumatoria = numeros.reduce((a, b) => a + b, 0)
let promedio = sumatoria / numeros.length;
let mayor = Math.max(...numeros);
let menor = Math.min(...numeros);


console.log(`La sumatoria del array es ${sumatoria}`);
console.log(`El promedio del array es ${promedio}`);
console.log(`El numero mayor que contiene el array es ${mayor}`);
console.log(`El numero menor del array es ${menor}`);



//ESTE EJERCICIO LO HICE QUE FUNCIONE EN LA CONSOLA DE VS CODE, ES DECIR CON NODE.JS
//PERO IGUAL SE PUEDE VER EN EL NAVEGADOR