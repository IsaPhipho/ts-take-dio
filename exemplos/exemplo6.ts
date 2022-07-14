// Definir os parâmetros e o tipo da saída:
function somarValoresNumericos(num1: number, num2: number): number {
  //return num1 + num2.toString();  *Aqui o ts vai sinalizar que a tipagem esta errada!
  return num1 + num2
}

console.log(somarValoresNumericos(1, 3));