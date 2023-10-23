// Defini uma função chamada calcularNivel que recebe duas variáveis como entrada: vitorias e derrotas.
function calcularNivel(vitorias, derrotas) {
  // Calculei o saldo de vitórias subtraindo o número de derrotas do número de vitórias.
  const saldoVitorias = vitorias - derrotas;
  let nivel = ""; // Inicializamos a variável "nivel" como uma string vazia.

  // Usei instruções condicionais (if-else) para determinar o nível com base no número de vitórias.
  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  // A função retorna um objeto contendo o saldo de vitórias e o nível.
  return { saldoVitorias, nivel };
}

// Defini as variáveis vitorias e derrotas com valores de exemplo.
const vitorias = 200;
const derrotas = 100;

// Chamei a função calcularNivel com as variáveis vitorias e derrotas como argumentos e armazenamos o resultado em "resultado".
const resultado = calcularNivel(vitorias, derrotas);

// Exibi a mensagem no console, incluindo o saldo de vitórias e o nível obtidos.
console.log(
  `O Herói tem um saldo de ${resultado.saldoVitorias} e
  está no nível de ${resultado.nivel}`
);
