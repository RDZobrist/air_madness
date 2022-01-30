const express = require('express');
const path = require('path');
const compression = require('compression');


const app = express();


app.listen(4005, () => { console.log('listening on port 4005') });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})