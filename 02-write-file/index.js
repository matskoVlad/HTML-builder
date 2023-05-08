const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function editFile(text) {
    fs.appendFile('02-write-file/output.txt', text + '\n', (err) => {
        if (err) {
            console.error('Ошибка при записи в файл:', err);
        }
    });
}


process.on('SIGINT', ( )=>{
    rl.close();
    console.log('Пока!');
    process.exit(0);
}); 
rl.on('line', (input) => {
    if (input.toLowerCase() === 'exit') {
        rl.close();
        console.log('Пока!');
        process.exit(0);
    } else {
        editFile(input);
    }
});

fs.writeFile('output.txt', '', () => {
        console.log('Введите текст или exit для выхода:');
});