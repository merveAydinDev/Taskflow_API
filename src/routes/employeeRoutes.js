const express = require('express');
const router = express.Router();
const { getAllEmployees, createEmployee } = require('../controllers/employeeControllers');

router.route('/')
  .get(getAllEmployees)
  .post(createEmployee);

module.exports = router;