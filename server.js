const express = require('express');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
// const response = require('./route/routes');
const db = require('./db');
const router = require('./network/routes');

// This is my server I created with express
db('https://api-rest-drjuanch.onrender.com')
const app = express();
const port = 3030;

// We use it to parser the response's body in different types of information (JSON, urlencoded...ETC)
app.use(bodyParser.json());
app.use(bodyParser.json(urlencoded({extended: false})));
// app.use(router);

//
router(app);


app.listen(port, () =>{
  console.log(`My port is ${port}`);
});
