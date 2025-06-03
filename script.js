
function calcular() {
    let valorBobina = parseFloat(document.getElementById('valorBobina').value);
    let metragemTotal = parseFloat(document.getElementById('metragemTotal').value);
    if (isNaN(valorBobina) || isNaN(metragemTotal)) {
        alert('Preencha todos os campos.');
        return;
    }
    let custoPorMetro = valorBobina / 100;
    let custoTotal = custoPorMetro * metragemTotal;
    document.getElementById('resultado').innerHTML = '<h2>Custo Total: R$ ' + custoTotal.toFixed(2) + '</h2>';
}
