const express = require('express');
const router = express.Router();
const { getAllProjects, createProject } = require('../controllers/projectControllers');

router.route('/')
  .get(getAllProjects)
  .post(createProject);

module.exports = router;