const express = require('express');

const app = express();
const port = 3030;

app.get('/', (req, res) => {
  res.send('Hello, this is my server in express');
});

app.listen(port, () =>{
  console.log(`My port is ${port}`);
});
