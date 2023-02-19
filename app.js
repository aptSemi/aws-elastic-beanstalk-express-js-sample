const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('We do not have the hang of this.......'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
