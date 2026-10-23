/*

- server create karna 
- server o config karna 

*/

const express = require('express')

const app = express()

app.use(express.json())

const notes = []

app.post('/notes',(req, res)=>{
    console.log(req.body)
    notes.push(req.body)
    console.log(notes)
    res.send("Notes Created")

})

app.get('/notes',(req, res)=>{
    res.send(notes)
})

app.delete('/notes/:index',(req, res)=>{
    delete notes [req.params.index]
    res.send("Notes Deleted successfully")
})

app.patch('/notes/:index',(req,res)=>{
   notes [req.params.index].description = req.body.description
   notes [ req.params.index].title = req.body.title
   res.send('Note Update successfully') 
})


module.exports = app

