const express = require('express');
const app = express();
const port = 2000;

app.set('view engine', 'ejs');
app.set('views', 'views')


// Handling requests
app.get('/', (req, res, next) => {
    res.render('index', {pageTitle : 'Home'});
    const blogs = [
        {'Reflections On My Overwatch Career' : 'Lessons from my '}
    ]
})

app.get('/about', (req, res, next) => {
    res.render('about', {pageTitle : 'About'});
});

app.get('/blogs/create', (req, res, next) => {
    res.render('create', {pageTitle : 'Create Blog'});
});

app.get('/overwatch-chronicles', (req, res, next) => {
    res.render('overwatch-chronicles', {pageTitle : 'OW Chronicles'});
});

app.get('/algorithms', (req, res, next) => {
    res.render('algorithms', {pageTitle : 'Algo Series'});
});

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle : '404'});
});

// Listener
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});