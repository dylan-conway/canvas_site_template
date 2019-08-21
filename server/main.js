console.clear();
console.log('Starting server...');

const express = require('express');
const app = express();
const http = require('http').createServer(app);

const PORT = 5000;

app.use(express.static('www/public'));
app.get('/', (req, res) => res.sendFile(`${__dirname}/www/public/index.html`));

http.listen(PORT, () => console.log(`Listening on *:${PORT}`));
