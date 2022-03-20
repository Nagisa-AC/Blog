const express = require('express');
const app = express();
const port = 2000;

app.set('view engine', 'ejs');
app.set('views', 'views')


// Handling requests
app.get('/', (req, res, next) => {
    res.render('index', {pageTitle : 'Home'});
    const blogs = [
        {'Blog Test #1' : 'Why Overwatch is a Dead Game'},
        {'Blog Test #2' : 'How I Got a Big Tech Internship as a Sophomore in College'},
        {'Blog Test #3' : 'What are Microservices'}
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

app.get('/engineering-blog', (req, res, next) => {
    res.render('engineering-blog', {pageTitle : 'Eng Blog'});
});

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle : '404'});
});

// Listener
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});