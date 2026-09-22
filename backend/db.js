const mysql = require("mysql2");

const db = mysql.createConnection({

    host: "mysql-db",

    user: "root",

    password: "admin123",

    database: "assetdb"

});

db.connect((err) => {

    if (err) {

        console.log(err);
        return;
    }

    console.log("Database Connected");
});

module.exports = db;
