/*
A função abaixo pergunta à pessoa suas três cores favoritas e imprime no console um array contendo essas três cores. 

Refatore a função para o Typescript.
*/

// DESCOMENTE ESTA FUNÇÃO

//* Função sem retorno tem tipagem void;

//* process.argv[] é variável de entrada do usuário no terminal, precisamos indicar qual será a tipagem dessa entrada;

//* Para testar se está funcionando, verificar se já possui um script para o arquivo, depois colocar no terminal npm run nome-do-arquivo;

function imprimeTresCoresFavoritas():void {
  const cor1:string = process.argv[2]
  const cor2:string = process.argv[3]
  const cor3:string = process.argv[4]

  console.log([cor1, cor2, cor3])
}

imprimeTresCoresFavoritas()

