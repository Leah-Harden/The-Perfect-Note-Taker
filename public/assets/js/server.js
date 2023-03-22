

//create node server
//create 5 routes 
// just node and express
// read as json and write the file

const express = require('express');
const fs = require('fs');


const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.get('/', (req, res) => res.send('Navigate to /send or /routes'));


//switch pages
app.get('/notes', (req, res) =>  
    res.sendFile(path.join(__dirname, '/index.html'))
);

//add
app.get('/api/notes', (req, res) =>
res.json(termData));



//delete
app.get(`/api/notes/${id}`, (req, res) =>
res.json(termData));


app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);
