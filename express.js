const { application } = require('express');
const express = require('express');

const app = express();
const port = 8000;

const listeningStartedCallback = () => {
    console.log(`A szerver elindult ${port}`);
};

app.listen(port, listeningStartedCallback);

let anyagok = [
    {
        id:1,
        materials: "Lukas Pro 65% Polyeszter 35% Bavlna 245/gm2",
        quantity: 150,
        color: 210
    },
    {
        id:2,
        materials: "Fever Pro 65% Polyeszter 35% Bavlna 245/gm2",
        quantity: 100,
        color: 910
    },
    {
        id:3,
        materials: "Mikropolar 100% Polyeszter 280 g/m2",
        quantity: 100,
        color: 150
    },
]

app.get('/api/materials', (req,res) => {
    res.send(anyagok);
});

app.get('/api/materials/:id', (req,res) => {
    const id = Number.parseInt(req.params.id, 10);
    const filtracio = anyagok.find(filtracio => filtracio.id === id);
    if (typeof filtracio === 'undefined') {
        res.send(404);
    } else {
        res.send(filtracio)
    }
})
