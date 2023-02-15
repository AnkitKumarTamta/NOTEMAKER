const express = require('express');
const app = express();  //to make an object of express to use it
const notes = require('./data/notes')
const dotenv = require('dotenv');
dotenv.config();

app.get('/',(req, resp)=>{
    resp.send('server started')
})

app.get('/api/notes',(req,resp)=>{   //to fetch complete array of json data

    resp.json(notes)

})

app.get('/api/notes/:id',(req, resp)=>{            //to fetch a particular data by using id param concept
    const note = notes.find((n)=> n._id === req.params.id)
    resp.send(note)
})

const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`server started on port ${PORT}`));