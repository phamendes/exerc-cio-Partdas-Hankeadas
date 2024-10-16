// Parâmetros da quantidade de vitórias
function determinarNivel(vitorias) {
    if (vitorias < 10) {
        return "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        return "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        return "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        return "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        return "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        return "Lendário";
    } else if (vitorias >= 101) {
        return "Imortal";
    }
}
// Calculando Saldo
function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}
// Calculadora do Rank
function calcularRank(vitorias, derrotas) {
    const saldoVitorias = calcularSaldo(vitorias, derrotas);
    const nivel = determinarNivel(vitorias);
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Coloque aqui os números de vitórias e derrotas:
const vitorias = 87;
const derrotas = 5;
console.log(calcularRank(vitorias, derrotas));


