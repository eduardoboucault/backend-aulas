/* 
A função abaixo recebe como parâmetro os tamanhos dos três lados de um triângulo: a, b, c. 
Com essa informação, a função retorna se o triângulo é equilátero, isósceles ou escaleno.
Refatore a função para o Typescript.
*/

// DESCOMENTE ESTA FUNÇÃO

//* Função com retorno, então não será void;

//* Retorno da função é string, colocar string na tipagem do retorno da função;

//* Para testar se está funcionando, verificar se já possui um script para o arquivo, depois colocar no terminal npm run nome-do-arquivo;

function checaTriangulo(a:number, b:number, c:number) : string {
  if ((a !== b) && (b !== c)) {
    return 'Escaleno'
  } else if (a === b && b === c) {
    return 'Equilátero'
  } else {
    return 'Isósceles'
  }
}

console.log(checaTriangulo(7, 7, 7))
console.log(checaTriangulo(7, 7, 9))
console.log(checaTriangulo(7, 8, 9))

