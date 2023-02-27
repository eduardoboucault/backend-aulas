// const fs = require('fs')

const fsPromises = require('fs').promises;

const path = require('path');

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'arquivos', 'texto2.txt'), 'utf8');
        console.log(data)
        await fsPromises.unlink(path.join(__dirname, 'arquivos', 'texto2.txt'))
        await fsPromises.writeFile(path.join(__dirname, 'arquivos', 'futuroBom.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'arquivos' , 'futuroBom.txt'), '\n\nNo futuro serei bem sucessido.');
        await fsPromises.rename(path.join(__dirname, 'arquivos', 'futuroBom.txt'), path.join(__dirname, 'arquivos', 'futuroExcelente.txt'))
        const newData = await fsPromises.readFile(path.join(__dirname, 'arquivos', 'futuroExcelente.txt'), 'utf8');
        console.log(newData)
    } catch (err) {
        console.error(err)
    }
}

fileOps();

//* Com path, não é necessário digitar manualmente o diretório;

// fs.readFile('./arquivos/texto2.txt', 'utf8', (err,data) => {
//     if (err) throw err;
//     console.log(data);
// })

// fs.readFile(path.join(__dirname, 'arquivos', 'texto2.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })

// console.log('Vou me dedicar a conseguir um emprego')

//* No terminal usaremos o comando node index, pois o nome do arquivo.js é index, diferente de server.js;

//* Ao digitar o comando, ele irá ler as informações contidas no arquivo.txt em forma de dados buffer. Para mostrar em extensão .txt podemos aplicar o método toString() em data;

//* Outra maneira, é adicionar 'utf8' como novo parâmetro ao método readFile ao invés do método toString() em data;

//! Nunca esquecer de colocar corretamente o diretório ou nomes corretos dos arquivos com suas respectivas extensões;

// fs.writeFile(path.join(__dirname, 'arquivos', 'estudar.txt'), 'Estudar é muito bom', (err) => {
//     if (err) throw err;
//     console.log('Escrita completa');
// })

//* O método writeFile, irá criar um arquivo, este método está recebendo 2 parâmetros e um callback, primeiro parâmetro é o diretório a ser percorrido junto do nome do arquivo.extensão, segundo parâmetro, dados contidos no arquivo, callback error;

// fs.appendFile(path.join(__dirname, 'arquivos', 'futuro.txt'), 'Terei um ótimo emprego no futuro.', (err) => {
//     if (err) throw err;
//     console.log('Futuro completo');
// })

//* O método appendFile, irá criar um arquivo, este método está recebendo 2 parâmetros e um callback, primeiro parâmetro é o diretório a ser percorrido junto do nome do arquivo.extensão, segundo parâmetro, dados contidos no arquivo, callback error;

// fs.writeFile(path.join(__dirname, 'arquivos', 'estudar.txt'), 'Estudar é muito bom', (err) => {
//     if (err) throw err;
//     console.log('Arquivo criado com sucesso.');

//     fs.appendFile(path.join(__dirname, 'arquivos', 'estudar.txt'), '\n\nSim, realmente é muito bom.', (err) => {
//         if (err) throw err;
//         console.log('Modificação realizada com sucesso.');

//         fs.rename(path.join(__dirname, 'arquivos', 'estudar.txt'), path.join(__dirname, 'arquivos', 'NovoEstudar.txt'), (err) => {
//             if (err) throw err;
//             console.log('Arquivo renomeado com sucesso.');
//         })
//     })
// })

//* No exemplo acima, colocamos 3 métodos de módulos do node, criar arquivo, adicionar novos dados e renomear arquivos. É necessário uma ordem correta para cada método. A ordem lógica criada foi, criar o arquivo e indicar que foi criado com sucesso, depois adicionar novas informações e indicar que o processo foi bem sucedido e por final o último método de renomear o arquivo criado para um novo nome e também indicar no console que a mudança foi realizada;