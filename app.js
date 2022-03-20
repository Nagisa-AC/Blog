const express = require('express');
const app = express();
const port = 2000;

app.set('view engine', 'ejs');
app.set('views', 'views')


// Handling requests
app.get('/', (req, res, next) => {
    res.render('index');
})

app.get('/about', (req, res, next) => {
    res.render('about');
});

app.get('/blogs/create', (req, res, next) => {
    res.render('create');
});

app.use((req, res, next) => {
    res.status(404).render('404');
});

// Listener
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});