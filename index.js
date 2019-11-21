const express = require('express');
const app = express();
const path = require('path');
const exphbs  = require('express-handlebars');
const port = process.env.PORT || 5000;


//Set handlebars middleware
app.engine('handlebars',exphbs());
app.set('view engine', 'handlebars');
//Set handlebar routes

const otherstuff = "Hello there is other stuff...";
app.get('/', function (req, res) {
    res.render('home', {
    	stuff: otherstuff
    });
});

//Set static folder
//routing for static app
app.use(express.static(path.join(__dirname,'public')));



app.listen(port, () => console.log("Server Listening to port " + port));