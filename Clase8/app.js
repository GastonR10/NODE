const express = require("express");
const path = require("path");

// Create our express app
const app = express();

// Indicar a express que use EJS como view engine
app.set('view engine', 'ejs');

// Base middlewares
app.use('/', express.static(path.join(__dirname, 'public'))); 

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// Define routes
app.get('/', function(req, res){
    res.send('get users endpoint');
});

app.get('/static', function(req, res) {
    res.sendFile(path.join(__dirname, 'public', 'home-static.html'));
});

app.get('/profile/:id', function(req, res) {
    res.render('profile', { user: req.params.id })
});

app.get('/blog', function(req, res) {
    res.render('blog', { blog: { title: 'My first blog', popular: false} })
});

app.get('/blogs', function(req, res) {
    res.render('blogs', { blogs: [
        { title: 'First blog', popular: false},
        { title: 'Second blog', popular: true},
        { title: 'Third blog', popular: true},
        { title: 'Fourth blog', popular: false}
    ]})
});


// Start server
const port = 4000;
const server = app.listen(port, () => {
    console.log(`Express running → PORT ${server.address().port}`);
});