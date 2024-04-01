const myserver = require('express'); // Corrected the import statement to 'express'

const app = myserver(); // Corrected the initialization of the Express application

app.get('/searchbypid', (req, res) => {
    res.send('INSIDE INDEX JS GET API');
});

app.get('/searchbypname', (req, res) => {
    res.send('INSIDE INDEX JS SEARCH BY PNAME GET API');
});

app.post('/', (req, res) => {
    res.send('INSIDE INDEX JS GET POST API');
});

app.put('/', (req, res) => {
    res.send('INSIDE INDEX JS GET PUT API');
});

app.delete('/', (req, res) => {
    res.send('INSIDE INDEX JS GET DELETE API');
});

app.listen(5556, () => {
    console.log('SERVER STARTED');
});