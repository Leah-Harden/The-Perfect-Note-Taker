
//create 5 routes 
// just node and express
// read as json and write the file

const express = require('express');
const fs = require('fs');
const path = require('path');


const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//take you to first page  --------------------------------
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

//switch pages  --------------------------------
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//add --------------------------------


app.get('/api/notes', async(req, res) => {
    let data = await fs.promises.readFile('./db/db.json', 'utf8')
    res.json(data)
}
);

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = Math.floor(Math.random() * 101)// as a random id

        fs.readFile('./db/db.json', 'utf8'(err,data) => {
            if(err) throw err;
            const notes = JSON.parse(newNote);
            notes.push(newNote)
            // writes all of the notes 
            fs.writeFile(`./db/db.json`,JSON.stringify(notes), (err) =>{
                if (err) throw err; 
                res.json(newNote)
        })
    )} 
})
S


//delete --------------------------------
app.get(`/api/notes/:id`, (req, res) =>
    res.json(

    ));


app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);

