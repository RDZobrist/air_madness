const express = require('express');
const path = require('path');
const compression = require('compression');


const app = express();


app.listen(4005, () => { console.log('listening on port 4005') });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'))
});
app.get('/air-madness-empowerment-night', (req, res) => {
    res.sendFile(path.join(__dirname, 'air-madness-empowerment-night.html'))
});
app.get('/attractions', (req, res) => {
    res.sendFile(path.join(__dirname, 'attractions.html'))
});
app.get('/parties', (req, res) => {
    res.sendFile(path.join(__dirname, 'birthday-parties.html'))
});
app.get('/birthday-parties', (req, res) => {
    res.sendFile(path.join(__dirname, 'birthday-parties.html'))
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'))
});
app.get('/corporate-events', (req, res) => {
    res.sendFile(path.join(__dirname, 'corporate-events.html'))
});
app.get('/cosmic-nights', (req, res) => {
    res.sendFile(path.join(__dirname, 'cosmic-nights.html'))
});
app.get('/faqs', (req, res) => {
    res.sendFile(path.join(__dirname, 'faqs.html'))
});
app.get('/laser-madness', (req, res) => {
    res.sendFile(path.join(__dirname, 'laser-madness.html'))
});
app.get('/prices-and-gift-cards', (req, res) => {
    res.sendFile(path.join(__dirname, 'prices-and-gift-cards.html'))
});
app.get('/private-parties', (req, res) => {
    res.sendFile(path.join(__dirname, 'private-parties.html'))
});

app.get('/trampoline-jumps', (req, res) => {
    res.sendFile(path.join(__dirname, 'trampoline-jumps.html'))
});
