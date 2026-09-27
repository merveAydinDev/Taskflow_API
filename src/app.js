const express = require('express');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorMiddleware');
const taskRoutes = require('./routes/taskRoutes');
const projectRoutes = require('./routes/projectRoutes');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();

app.use(express.json());

app.use(logger);

app.use('/api/tasks', taskRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/employees', employeeRoutes);

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