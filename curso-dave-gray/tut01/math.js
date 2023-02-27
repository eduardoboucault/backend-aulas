exports.somar = (a, b) => a + b;
exports.subtrair = (a, b) => a - b;
exports.multiplicar = (a, b) => a * b;
exports.dividir = (a, b) => a / b;

//* O método exports funciona também direto na função, desta maneira estamos exportando as funções de soma,subtração,multiplicação e divisão, exportação de funções anônimas direto;

// module.exports = { somar, subtrair, multiplicar, dividir } //* método de importação desestruturado em objeto para mais de uma função;