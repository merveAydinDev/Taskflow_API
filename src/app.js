const express = require('express');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorMiddleware');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(express.json());

app.use(logger);

app.use('/api/tasks', taskRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'TaskFlow API başarıyla çalışıyor!'
  });
});

app.use('{*splat}', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Aradığınız sayfa bulunamadı.'
  });
});

app.use(errorHandler);

module.exports = app;