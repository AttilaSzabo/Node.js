// Itt nincsen Babel, import-export helyett a require szintaxist kell használlnunk.
const http = require('http');

// A szerverünk ezen a porton fog indulni
const port = 8000;

// AMikor a szerverhez fordulunk, akkor ezt a függvényt hívja meg a Node.js Paraméterek:
// req - request (ez a hívás https)
// res - responsive (válasz)
// A req objektumból kinyerhető pl. a hívás url-je.
// A res objektum segítségével megszerezhetjük a visszaadott értéket (HTML vagy JSON).
const helloRequest = (req,res) => {
    console.log('helloRequest', req.url);
    res.end(`
    <html>
    <head>
        <title>Hello, node</title>
    </head>
    <body>
        <h1>Hello, node</h1>
        <p>URL: ${req.url}</p>
    </body>
    </html>
    `);
};

// Hozzuk létre a szervert és adjuk át neki a szerverhívást kezelő függvényt.
const server = http.createServer(helloRequest);

// A létrehozott szervernek adjunk egy portot (kaput), ahol fogadhatja a hívásokat, majd egy függvényt,
// amely logolja amint a szerver¸unk rendelkezésre áll. A port értéke legyen 4 számjegyű.
server.listen(port, () => {
    console.log(`listening on port ${port}`);
})