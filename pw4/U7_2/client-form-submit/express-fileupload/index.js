const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
const middleware = express.json();
const cors= require('cors');
app.use(middleware);
app.use(cors());

function logger(req,res,next){
    next();
    console.log(new Date(), req.method, req.url);
    
}
app.use(logger);

const fileStorageEngine = multer.diskStorage({
    destination:(req,res,cb)=>{
        cb(null,`./images` )
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now() +'--'+ file.originalname)
    },
});

const upload = multer({storage: fileStorageEngine});

app.get(`/fileupload`,(req,res)=>{
    res.sendFile(path.join(__dirname , 'index.html'));
});

app.post(`/upload`,upload.single('image'),(req,res)=>{
    console.log(req.file);
    res.send("Image Uploaded succesfully");
})
let PORT=3000;
app.listen(PORT,()=>{
console.log(`server connect ${PORT}`);
})

