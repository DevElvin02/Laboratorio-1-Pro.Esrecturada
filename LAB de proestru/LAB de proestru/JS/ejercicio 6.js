const ascDesNone = (array, order) => {
    if (order === "Asc") {
      return array.sort((a, b) => a - b);
    } else if (order === "Desc") {
      return array.sort((a, b) => b - a);
    } else if (order === "None") {
      return array;
    } else {
      return "Orden no válido. Por favor, elige 'Asc', 'Desc' o 'None'.";
    }
  }
  
  const numerosIngresados = prompt("Ingrese una lista de números separados por comas:");
  
  const arrayNumeros = numerosIngresados.split(",").map(numero => parseFloat(numero.trim()));
  
  const ordenIngresado = prompt("Ingrese el tipo de ordenamiento: 'Asc', 'Desc' o 'None':");

  const resultado = ascDesNone(arrayNumeros, ordenIngresado);
  
  console.log(resultado);