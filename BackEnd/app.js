require("dotenv").config();
const express = require("express");
const mysql = require("mysql");

// Create connection
const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    socketPath: process.env.SOCKET_PATH,
});

// Connect
db.connect(err => {
    if (err) {
        throw err;
    }
    console.log("MySql Connected...");
});

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server started on port 3000");
});
