
function calcular() {
    const largura = parseFloat(document.getElementById('largura').value);
    const comprimento = parseFloat(document.getElementById('comprimento').value);
    const valorPorCm = parseFloat(document.getElementById('valorPorCm').value);

    if (isNaN(largura) || isNaN(comprimento) || isNaN(valorPorCm)) {
        alert("Preencha todos os campos corretamente.");
        return;
    }

    const subtotal = largura * comprimento * valorPorCm;
    const tipoPeca = document.getElementById('tipoPeca').value;
    const tipoChapa = document.getElementById('tipoChapa').value;

    const resultado = `
        <p><strong>Tipo de Peça:</strong> ${tipoPeca}</p>
        <p><strong>Tipo de Chapa:</strong> ${tipoChapa}</p>
        <p><strong>Largura:</strong> ${largura} cm</p>
        <p><strong>Comprimento:</strong> ${comprimento} m</p>
        <p><strong>Valor por cm:</strong> R$ ${valorPorCm.toFixed(2)}</p>
        <h2>Total: R$ ${subtotal.toFixed(2)}</h2>
    `;

    document.getElementById('resultado').innerHTML = resultado;
}
