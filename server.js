const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({ message: 'We are from Node js' });
});

app.listen(3000, () => {
    console.log('server is listening on port 3000');
});