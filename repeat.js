const express = require('express');
const app = express();
app.use(express.static('public'))
const port = 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.listen(port);

let letrehozottAnyagTombok = [
    {
        name: "Lukas Pro 65% Polyeszter 35% Bavlna 245 g/m2",
        quantity : 150,
        colors: 205
    },
    {
        name: "Fever Pro 65% Polyeszter 35% Bavlna 245 g/m2",
        quantity : 100,
        colors: 910
    },
];

app.post('/api/anyagok/new', function (req, res) {
    letrehozottAnyagTombok.push({
        name: req.body.name,
        quantity: req.body.quantity,
        colors: req.body.colors,
    });
    res.send({status: true});
});

app.get('/api/anyagok', (req, res) => {
    res.send(letrehozottAnyagTombok)
});


app.get('/api/anyagok/:id', (req, res) => {
    const id = Number.parseInt(req.params.id, 10);
    const filtracio = letrehozottAnyagTombok.find(filter => filter.id === id);
    if (typeof filtracio === 'undefined') {
        res.send(404)
    } else {
        res.send(filtracio)
    };
});

