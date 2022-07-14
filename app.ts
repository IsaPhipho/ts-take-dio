function mostraSomaValoresNumericos2(num1: number, num2: number): void {
  console.log(num1 + num2);
}

function somarValoresNumericos2(num1: number, num2: number, callback: (numero: number) => number): number {
  let resultado = num1 + num2;
  return callback(resultado);
}

function aoQuadrado(num: number): number {
  return num * num;
}

function dividirPorEleMesmo(num: number): number {
  return num / num;
}

console.log(somarValoresNumericos2(1, 3, aoQuadrado));
console.log(somarValoresNumericos2(1, 3, dividirPorEleMesmo));