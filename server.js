require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const PORT = process.env.PORT || 3030;
const db = require('./db');
const router = require('./network/routes');

// This is my server I created with express
const app = express();
// We use it to parser the response's body in different types of information (JSON, urlencoded...ETC)
app.use(bodyParser.json());
app.use(bodyParser.json(urlencoded({extended: false})));

router(app);

db()
app.listen(PORT, () => {
    console.log('API lista por el puerto ', PORT)
})
