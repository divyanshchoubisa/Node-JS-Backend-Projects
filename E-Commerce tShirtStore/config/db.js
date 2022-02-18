const mongoose = require('mongoose');

const connectWithDB = () => {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log("DB CONNECT SUCCESSFULLY"))
    .catch(error => {
        console.log(`DB CONNECTION FAILURE: `);
        console.log(error);
        process.exit(1);
    })
}


module.exports = connectWithDB;