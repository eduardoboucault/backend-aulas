const fs = require('fs')

if (!fs.existsSync('./novaPasta')) {
    fs.mkdir('./novaPasta', (err) => {
        if (err) throw err;
        console.log('Novo diretório criado.')
    })
}

if (fs.existsSync('./novaPasta')) {
    fs.rmdir('./novaPasta', (err) => {
        if (err) throw err;
        console.log('Novo diretório removido.')
    })
}