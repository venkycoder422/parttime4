
const {readFileSync,appendFileSync,rmdir,rename} = require('fs');

console.log(readFileSync('./test.txt',{encoding:"utf-8"}));


// rmdir('./test1.txt');
// writeFileSync('.create.txt',"hello world",{encoding:"utf-8"})

appendFileSync('./test.txt',"ADDED HELLO WORLD!");
rename('./test.txt', 'new.txt', (err) => {
    if (err) throw err;
    console.log('Rename complete!');
  });

//   const testFolder = './new';
// const fs = require('fs');

// fs.readdir(testFolder, (err, files) => {
//   files.forEach(file => {
//     console.log(file);
//   });
// });
