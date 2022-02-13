const express = require('express');
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary').v2;
const app = express();

cloudinary.config({
    cloud_name:#,
    api_key: #,
    api_secret:#
})

app.set('view engine', 'ejs');

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(
    fileUpload({
      useTempFiles: true,
      tempFileDir: "/tmp/"
    })
  );

app.get("/myget", (req, res) => {
    console.log(req.body);   
    res.send(req.query);
})

app.post("/mypost",  async(req, res) => {
    console.log(req.body);
    console.log(req.files);

    let result;
    let imageArray = [];    

    //Case for multiple images
    if(req.files){
        for(let index=0; index < req.files.sampleFile.length; index++){
            let result = await cloudinary.uploader.upload(req.files.sampleFile[index].tempFilePath, {
                folder: "LCO"
            })  
        imageArray.push({
            public_id : result.public_id,
            secure_url : result.secure_url
        })    
        }
    }

    //Use Case For Single Image Upload
    //let file = req.files.sampleFile;

    //console.log(file);

    //result = await  cloudinary.uploader.upload(file.tempFilePath, {
    //    folder: "LCO"
    //})

    console.log(result);

    details = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        result,
        imageArray
    }
    console.log(details);
    res.send(details);
})

app.get("/mygetform", (req, res) => {
    res.render("getform");
})

app.get("/mypostform", (req, res) => {
    res.render("postform");
})

app.listen(4000, () => console.log(`Server is running at PORT 4000`));