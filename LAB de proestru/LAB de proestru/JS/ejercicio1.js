function obtenerNumero(mensaje) {
    let numero;
    while (true) {
        numero = prompt(mensaje);
        if (isNaN(numero) || numero.trim() === '') {
            alert("Entrada inválida. Por favor, ingrese un número válido.");
        } else {
            return parseInt(numero, 10);
        }
    }
}

// Función para obtener el último dígito de un número
function obtenerUltimoDigito(numero) {
    return Math.abs(numero) % 10;
}

// Función principal para comparar los últimos dígitos de tres números
function compararUltimosDigitos() {
    // Obtener números del usuario
    const numero1 = obtenerNumero("Ingrese el primer número:");
    const numero2 = obtenerNumero("Ingrese el segundo número:");
    const numero3 = obtenerNumero("Ingrese el tercer número:");

    // Obtener últimos dígitos
    const ultimoDigito1 = obtenerUltimoDigito(numero1);
    const ultimoDigito2 = obtenerUltimoDigito(numero2);
    const ultimoDigito3 = obtenerUltimoDigito(numero3);

    // Comparar últimos dígitos
    if (ultimoDigito1 === ultimoDigito2 && ultimoDigito2 === ultimoDigito3) {
        alert("El último dígito de los tres números es igual.");
    } else {
        alert("El último dígito de los números no es igual.");
    }
}

// Llamar a la función principal
compararUltimosDigitos();

