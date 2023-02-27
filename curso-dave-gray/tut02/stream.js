const fs = require('fs');

const rs = fs.createReadStream('./arquivos/texto1.txt', { encoding: 'utf8' });

const ws = fs.createWriteStream('./arquivos/novo-texto.txt');

// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk);
// })

rs.pipe(ws);