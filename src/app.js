const express = require('express');
const logger = require('./middlewares/logger');

const app = express();

app.use(express.json());

app.use(logger);

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'TaskFlow API başarıyla çalışıyor!'
  });
});

module.exports = app;