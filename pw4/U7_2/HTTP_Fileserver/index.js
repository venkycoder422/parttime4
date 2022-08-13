const http = require("http");
const fs = require('fs');
const path = require('path');
const { runInNewContext } = require("vm");
const server = http.createServer((req, res) => {
    if (req.url == `/`) {

        //joining path of directory 
        const directoryPath = path.join(__dirname);
        //passsing directoryPath and callback function
        fs.readdir(directoryPath, (err, files) => {
            //handling error
            if (err) {
                return console.log('Unable to scan directory: ' + err);
            }
            //listing all files using forEach
            files.forEach((file) => {
                // Do whatever you want to do with the file
                console.log(file);
            });
        });

    } else if (req.url == `/public`) {
        const data = fs.readFileSync(`public.js`, { encoding: 'utf-8' });
        res.write(data);
    }else if (req.url == `/public/other`) {
        const data = fs.readFileSync(`src.js`, { encoding: 'utf-8' });
        res.write(data);
    } else if (req.url == `/public/data`) {
        const data = fs.readFileSync(`data.js`, { encoding: 'utf-8' });
        res.write(data);
    } 
    
    else {
        res.end("DONT understand url");
    }
    res.end();


});
server.listen(3001, () => {
    console.log("Server connected :3001")
})


// const path = require('path');
// const fs = require('fs');
