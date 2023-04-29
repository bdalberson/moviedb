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



//returns movies
app.get('/api/movies', (req, res) => {
    
    db.query('SELECT * FROM movies_names', (err, results) =>{      
        console.log(results);
        console.log(err);
        res.json(results);
      })
});

//returns movies reviews
app.get('/api/movie-reviews', (req, res) => {

    db.query(`SELECT movies_names.name AS Title, movies_reviews.review AS Review, movies_reviews.id AS ReviewID
    FROM movies_names JOIN movies_reviews ON movies_names.id = movies_reviews.id;`, (err, results) =>{      
        console.log(results);
        console.log(err);
        res.json(results);
      })
});

//put a body with {"name": "cars 2"}  and POST to add a movie
app.post('/api/add-movie', (req, res) => {
    let movieName = req.body.name;
    console.log(movieName);
    db.query(`INSERT INTO movies_names (name) VALUES ('${movieName}');`, (err, results) =>{      
        console.log(results);
        console.log(err);
        res.send(`${movieName} added to db`);
      })
})


app.listen(port, () =>
    console.info(`Example app listening at http://localhost:${port} 🚀`)
);
