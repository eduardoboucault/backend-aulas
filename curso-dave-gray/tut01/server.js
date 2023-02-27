//* Diferenças entre NodeJS e Node Vanilla:

//* 1) Node roda em servidor, não em navegador (backend não frontend);

//* 2) O console utilizado será o terminal do Windows (gitbash);

console.log('Olá Mundo!') // Mostrará no servidor;

//* 3) Objeto global ao invés de objeto window;
// console.log(global);

//* 4) Existem módulos Common Core para explorar (Ferramentas de configuração e implementação para o servidor);

//* 5) Módulos CommonJS ao invés de módulos ES6(ecma script 6);

//* 6) Não possui algumas funcionalidades de APIs JS como o fetch;

//* Localizar o diretório do arquivo server.js corretamente para conseguir rodar os comandos node no terminal;

const os = require('os') // variável que utiliza método require() para requerir dados através do os;

const path = require('path') // variável que utiliza método require() para requerir dados através do path;

// const math = require('./math') // variável que importa um arquivo exportável através do diretório correto, só funciona se e somente se, o diretório estiver certo e o arquivo estiver com módulo de exportar todas as função aqui requisitadas;

const { somar, subtrair, multiplicar, dividir } = require('./math') //* variável que importa um arquivo exportável através do diretório correto, só funciona se e somente se, o diretório estiver certo e o arquivo estiver com módulo de exportar todas as função aqui requisitadas. Porém, aqui iremos desestruturar as funções criadas em formato objeto, pois as funções foram exportadas em objeto. Deste modo, não precisaremos requisitar o arquivo math.

// console.log(os.type()) // salva no servidor a requisição do tipo

// console.log(os.version()) // salva no servidor a requisição da versão

// console.log(os.homedir()) // salva no servidor a requisição do diretório principal

// console.log(__dirname) // salva no servidor a requisição do caminho do diretório

// console.log(__filename) // salva no servidor a requisição do nome do arquivo

// console.log(path.dirname(__filename)) // salva no servidor a requisição do caminho do diretório

// console.log(path.basename(__filename)) // salva no servidor a requisição do nome base do arquivo

// console.log(path.extname(__filename)) // salva no servidor a requisição do nome da extensão do arquivo

// console.log(parse(__filename)) //* salva no servidor a requisição dos dados do arquivo em formato de objeto. MELHOR MÉTODO, pois devolve o root, dir, base, ext, name.

// console.log(math.somar(8,9))

console.log(somar(4,5))
console.log(subtrair(9,3))
console.log(multiplicar(3,7))
console.log(dividir(24,6))
