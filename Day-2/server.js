const express = require('express');

const app = express();


//Route


app.get('/', (req, res) => {
    res.send('Hello, World!');
})

app.get ('/about',(req, res) => {
    res.send('This is the about page.');
})

app.get('/home',(req, res)=>{
    res.send('This is Home page')
})

app.get('/manish',(req, res)=>{
    res.send('This is Manish Kumar Thakur')
})

app.get('/contact',(req, res)=>{
    res.send('Contact Manish')
})

app.get('/services',(req, res)=>{
    res.send('Our Services')
})

app.get('/gallery',(req, res)=>{
    res.send('My Photo Gallery')
})

app.get('/portfolio',(req, res)=>{
    res.send('My Portfolio')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

