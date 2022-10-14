((database) => {
    const mongoose = require("mongoose");

    database.init = (app) => {
        var dbUrl = "mongodb://localhost:27017/bValueH";
        var options = { useNewUrlParser: true, useUnifiedTopology: true };

        mongoose.connect(dbUrl, options)
        .then(() => console.log('Mongoose default connection open to ' + dbUrl))
        .catch((err) => console.log('Mongoose default connection error: ' + err));

  

    }

})(module.exports)