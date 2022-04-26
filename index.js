const express = require("express");

const app = express();
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('ola heroku deu certo !!');
})

app.listen(port, () => {
    console.log(`porta esta lendo da ${port}`);
})