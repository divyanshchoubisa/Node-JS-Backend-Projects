const express = require("express");
const format = require("date-format");
const app = express();

//Swagger Docs Related
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = 4000 || process.env.PORT

/*app.get('/', (req, res) => {
        res.send("Hello World!")
});*/

/**
 * @openapi
 * /facebook
 * 
 */

app.get('/', (req, res) => {
    res.status(201).send('<h1> Hello from LCO</h1>')
});

app.get('/api/v1/instagram', (req, res) => {
    const instaSocial = {
        userName : "divyanshOfficial",
        followers : 167,
        following : 191,
        date: format.asString("dd: MM: yy hh:mm:ss", new Date())
    }

    res.status(200).json({instaSocial})
})

app.get('/api/v1/facebook', (req, res) => {
    const instaSocial = {
        userName : "divyanshOfficialFB",
        followers : 286,
        following : 222,
        date: format.asString("dd: MM: yy hh:mm:ss", new Date())
    }

    res.status(200).json({instaSocial})
})

app.get('/api/v1/linkedin', (req, res) => {
    const instaSocial = {
        userName : "divyanshOfficialLinkedin",
        followers : 386,
        following : 322,
        date: format.asString("dd: MM: yy hh:mm:ss", new Date())
    }

    res.status(200).json({instaSocial})
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});

console.log("Hello Divyansh");