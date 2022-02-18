//Import Important Files
const express = require('express');
const app = express()
const morgan = require('morgan')

const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');

//Swagger Documentation
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Regular Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true})); 

//Cookies and File Middleware
app.use(cookieParser());
app.use(fileUpload({
    useTempFiles:true,
    tempFileDir:"/tmp/"
}));

//Temp Check
app.set("view engine","ejs");

//Morgan Middleware
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// app.use(morgan('tiny'));
//Import All Routes Here
const home = require('./routes/home');
const user = require('./routes/user');
const product = require("./routes/product");
const payment = require('./routes/payment');
const order = require('./routes/order');

//Router Middleware
app.use('/api/v1', home);
app.use('/api/v1', user);
app.use("/api/v1", product);
app.use("/api/v1", payment);
app.use("/api/v1", order);
    

app.get('/signuptest', (req, res) => {
    res.render('signuptest');
});

//Export app.js
module.exports = app;

