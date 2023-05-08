const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/colors', (req, res) => setTimeout(() => res.json([
  'black',
  'blue',
  'green',
  'red',
  'white'
]), 3000 * Math.random()));

app.post('/api/submit', express.json(), (req, res) => setTimeout(() => {
  const { name, email, password, color, terms } = req.body;
  if (name && email && password && color && terms && name !== 'Error') {
    res.sendStatus(200);
  } else {
    res.type('json');
    res.status(400).send({ error: 'All fields are mandatory and the agreement must be accepted' });
  }
}, 10000 * Math.random()));

if (!module.parent) {
  app.listen(3001, () => console.log('Mock server running'));
}

module.exports = app;
