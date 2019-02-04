const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // res.send('<h1>Hello Express</h1>');
    res.send({
        name: 'Udara',
        likes: [
            'Riding',
            'Games',
            'Cars'
        ]
    });
});

app.get('/about', (req, res) => {
    res.send('About Page Response');
});

app.get('/bad', (req, res) => {
    res.send({
        message: 'This is a Error...'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});

