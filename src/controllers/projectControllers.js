let projects = require('../data/projects');

const getAllProjects = (req, res) => {
  res.status(200).json({ status: 'success', results: projects.length, data: { projects } });
};

const createProject = (req, res) => {
  const { name, description } = req.body;
  if (!name) {
    return res.status(400).json({ status: 'fail', message: 'Proje adı (name) zorunludur.' });
  }
  const newProject = { id: (projects.length + 1).toString(), name, description: description || '' };
  projects.push(newProject);
  res.status(201).json({ status: 'success', data: { project: newProject } });
};

module.exports = { getAllProjects, createProject };