const express = require("express");

const app = express();
const port = 4200

app.get('/', (req, res) => {
    res.send('ola heroku deu certo !!');
})

app.listen(port, () => {
    console.log(`porta esta lendo da ${port}`);
})