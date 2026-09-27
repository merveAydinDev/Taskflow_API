let employees = require('../data/employees');

const getAllEmployees = (req, res) => {
  res.status(200).json({ status: 'success', results: employees.length, data: { employees } });
};

const createEmployee = (req, res) => {
  const { name, role, email } = req.body;
  if (!name) {
    return res.status(400).json({ status: 'fail', message: 'Çalışan adı (name) zorunludur.' });
  }
  const newEmployee = { id: (employees.length + 1).toString(), name, role: role || 'Employee', email: email || '' };
  employees.push(newEmployee);
  res.status(201).json({ status: 'success', data: { employee: newEmployee } });
};

module.exports = { getAllEmployees, createEmployee };