const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
const middleware = express.json();

app.use(middleware);

const fileStorageEngine = multer.diskStorage({
    destination:(req,res,cb)=>{
        cb(null,`./images` )
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now() +'--'+ file.originalname)
    },
});

const upload = multer({storage: fileStorageEngine});

app.get(`/upload`,(req,res)=>{
    res.sendFile(path.join(__dirname , 'index.html'));
});

app.post(`/fileupload`,upload.single('image'),(req,res)=>{
    console.log(req.file);
    res.send("Images Uploaded succesfully");
})
let PORT=3002;
app.listen(PORT,()=>{
console.log(`server connect ${PORT}`);
})

