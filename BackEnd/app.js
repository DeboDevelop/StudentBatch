require("dotenv").config();
const express = require("express");
const mysql = require("mysql");
const router = express.Router();

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
app.use(express.json());

//Routes
router.get("/student", (req, res) => {
    let sql = "SELECT * FROM Student";
    let query = db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err });
        } else if (result) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ message: "Bad requiest" });
        }
    });
});

router.get("/batch", (req, res) => {
    let sql = "SELECT * FROM Batch";
    let query = db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err });
        } else if (result) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ message: "Bad requiest" });
        }
    });
});

router.get("/studentbatch", (req, res) => {
    let sql =
        "SELECT Student.FirstName, Student.LastName, Batch.BatchName FROM StudentBatchRelation INNER JOIN Student ON Student.ID = StudentBatchRelation.StudentID INNER JOIN Batch ON Batch.ID = StudentBatchRelation.BatchID";
    let query = db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err });
        } else if (result) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ message: "Bad requiest" });
        }
    });
});

router.post("/student", (req, res) => {
    if (
        req.body.lastname === null ||
        req.body.lastname === "" ||
        req.body.firstname === null ||
        req.body.firstname === ""
    ) {
        res.status(400).json({ message: "Bad request" });
    }
    let sql =
        "INSERT INTO `Student` (`ID`, `LastName`, `FirstName`) VALUES (NULL," +
        mysql.escape(req.body.lastname) +
        "," +
        mysql.escape(req.body.firstname) +
        ")";
    let query = db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err });
        } else if (result) {
            res.status(200).json({ message: "Student Added" });
        } else {
            res.status(400).json({ message: "Bad requiest" });
        }
    });
});

router.post("/join", (req, res) => {
    if (req.query.batch === null || req.query.batch === "" || req.query.student === null || req.query.student === "") {
        res.status(400).json({ message: "Bad request" });
    }
    let sql =
        "INSERT INTO `StudentBatchRelation` (`ID`, `StudentID`, `BatchID`) VALUES (NULL," +
        mysql.escape(req.query.student) +
        "," +
        mysql.escape(req.query.batch) +
        ")";
    let query = db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ error: err });
        } else if (result) {
            res.status(200).json({ message: "Student Added to Batch" });
        } else {
            res.status(400).json({ message: "Bad requiest" });
        }
    });
});

app.use("/", router);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log("Server started on port 3000");
});
