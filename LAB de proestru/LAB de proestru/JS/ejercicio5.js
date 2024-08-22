


// Solicitar al usuario que ingrese dos números

let num1 = parseInt(prompt("Ingresa el primer número:"));
let num2 = parseInt(prompt("Ingresa el segundo número:"));

//use un algoritmo llamado ecluides 

function calcularmcd(a, b) {
    
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;

}


//calcular el maximo como divisor 
let mcd = calcularmcd(num1, num2);

// Mostrar el resultado
console.log(`El maximo como un divisor de: ${num1} y ${num2} es: ${mcd}`);
