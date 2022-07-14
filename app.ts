// void: ausência de retorno da função (console.log)
function somarValoresNumericos2(num1: number, num2: number): number {
  //return num1 + num2.toString();  *Aqui o ts vai sinalizar que a tipagem esta errada!
  return num1 + num2
}

console.log(somarValoresNumericos2(1, 3));

function mostraSomaValoresNumericos2(num1: number, num2: number): void {
  console.log(num1 + num2);
}