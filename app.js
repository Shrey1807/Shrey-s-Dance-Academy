//const { urlencoded } = require("express");
const express = require("express");
const path = require("path");
const app = express();
const port = 80;

//Express Specific Stuff
app.use('/static' , express.static('static'))


// PUG Specific Stuff
app.set('view engine', 'pug')//Set the Template engine
app.set('views', path.join(__dirname, 'views'))//Set the View Directory

//Endpoints
app.get('/', (req, res) => {
    
    const params = {}
    res.status(200).render('home.pug',params);
})

app.get('/contact', (req, res) => {
    
    const params = {}
    res.status(200).render('contact.pug',params);
})

 //Start the Server
app.listen(port, ()=>{
    console.log(`This Application started Successfully on port ${port}`)
});