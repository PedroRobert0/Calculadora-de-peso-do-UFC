
function calcularCategoria() {
    // Obter o valor do input
    var peso = parseFloat(document.getElementById("peso").value);
    var categoria;

    // Verificar a categoria com base no peso
    if (peso <= 56.7) {
        categoria = "Peso Mosca";
    } else if (peso <= 61.2) {
        categoria = "Peso Galo";
    } else if (peso <= 65.8) {
        categoria = "Peso Pena";
    } else if (peso <= 70.3) {
        categoria = "Peso Leve";
    } else if (peso <= 77.1) {
        categoria = "Peso Meio-Médio";
    } else if (peso <= 83.9) {
        categoria = "Peso Médio";
    } else if (peso <= 93.0) {
        categoria = "Peso Meio-Pesado";
    } else if (peso <= 120.2) {
        categoria = "Peso Pesado";
    } else {
        categoria = "Peso acima do limite";
    }

    // Exibir o resultado
    document.getElementById("resultado").innerText = "Categoria: " + categoria;
}
