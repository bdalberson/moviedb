const express = require('express');
const path = require("path");
const mysql = require('mysql2')

const app = express();
const port = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("public")) 

const db = mysql.createConnection(
    {
        host: `127.0.0.1`,
        user: 'root',
        password: "",
        database: 'movie_db'
    },
    console.log("connected to db!")
);




app.get('/api/movies', (req, res) => {
    
    db.query('SELECT * FROM movies_names', (err, results) =>{      
        console.log(results);
        console.log(err);
        res.json(results);
      })
});


app.listen(port, () =>
    console.info(`Example app listening at http://localhost:${port} 🚀`)
);
