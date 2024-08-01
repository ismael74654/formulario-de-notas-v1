function calcularDefinitiva() {
    var nota1 = parseFloat(document.getElementById('nota1').value) || 0;
    var nota2 = parseFloat(document.getElementById('nota2').value) || 0;
    var nota3 = parseFloat(document.getElementById('nota3').value) || 0;
    
    var definitiva = (nota1 + nota2 + nota3) / 3;
    document.getElementById('definitiva').value = definitiva.toFixed(2);
}
