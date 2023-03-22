

//create node server
//create 5 routes 
// just node and express
// read as json and write the file

const express = require('express');
const fs = require('fs');
const path = require('path');


const app = express();
const PORT = 3001;

app.use(express.static('public'));

//take you to first page
app.get('/', (req, res) =>  
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

//switch pages
app.get('/notes', (req, res) =>  
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//add
const writing = fs.readFile('db/db.json','utf8')
console.log(writing)

app.post('/api/notes', (req, res) =>
res.json(

));

app.get('/api/notes', (req, res) =>
console.log("api/notes")
)

//delete
app.get(`/api/notes/:id`, (req, res) =>
res.json(

));


app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);
