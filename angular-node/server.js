const express = require('express');
const path = require('path');
const app = express();

const routes = require('./server/routes/posts')

app.use(express.static(path.join(__dirname, 'dist/angular-node')));
app.use('/routes', routes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angular-node/index.html'));
});

const port = process.env.PORT || 4600;

app.listen(4600, (req, res) => {
  console.log('running');
});
