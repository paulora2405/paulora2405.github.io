const express = require('express');
const app = express();
const server = app.listen(3000, () => console.log("Listening"));
app.use(express.static('public'));

app.get('/get/:word', (request, response) => {
  console.log('get');
  const word = request.params.word;
  response.send(`here is your get request: ${word}`);
});

