function convertir() {
    let minutos = document.getElementById('minutos').value;

    let horas = Math.floor(minutos / 60);
    
    let minutosRestantes = minutos % 60;
    document.getElementById('resultado').innerText = horas + " horas y " + minutosRestantes + " minutos";
}
