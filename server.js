
//create 5 routes 
// just node and express
// read as json and write the file

const express = require('express');
const fs = require('fs');
const path = require('path');
const notes = require("./db/db.json")


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
    // old way
    //let data = await fs.promises.readFile('./db/db.json', 'utf8')
    let data = await JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));
    res.json(data)
}
);


app.post('/api/notes', (req, res) => {
    const notes = require("./db/db.json")
    const newNote = req.body;
    newNote.id = Math.floor(Math.random() * 101)// adds a random id
    notes.push(newNote)
console.log(notes)
            // writes all of the notes 
            fs.writeFile(`./db/db.json`,JSON.stringify(notes), (err) =>{
                
                if (err) throw err; 
                res.json(newNote)
        })

    })



//delete --------------------------------
app.get(`/api/notes/:id`, (req, res) =>
    res.json(

    ));


app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);

