let tasks = require('../data/tasks');

//1.Tüm görevleri listeleme
const getAllTasks = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tasks.length,
    data: { tasks }
  });
};

//2. ID ile görev bulma
const getTaskById = (req, res) => {
  const { id } = req.params;
  const task = tasks.find(task => task.id === id);

  if (!task) {
    return res.status(404).json({
      status: 'error',
      message: 'Task not found'
    });
  }

  res.status(200).json({
    status: 'success',
    data: { task }
  });
};

//3. Görev oluşturma
const createTask = (req, res) => {
  const { title, description, status, priority, assignee } = req.body;

  if (!title) {
    return res.status(400).json({
      status: 'error',
      message: 'Title is required'
    });
  }

    const newTask = {
    id: (tasks.length + 1).toString(),
    title,
    description: description || '',
    status: status || 'pending',
    priority: priority || 'medium',
    assignee: assignee || 'Unassigned',
    createdAt: new Date().toISOString()
  };

  tasks.push(newTask);

    res.status(201).json({
    status: 'success',
    data: { task: newTask }
  });
};

//4. Görev güncelleme
const updateTask = (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex(task => task.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({
      status: 'error',
      message: 'Task not found'
    });
  }


  const updatedTask = {
    ...tasks[taskIndex],
    ...req.body,
    id: tasks[taskIndex].id, // ID'nin değişmesini engelliyoruz
    createdAt: tasks[taskIndex].createdAt // Oluşturulma tarihini koruyoruz
  };

  tasks[taskIndex] = updatedTask;

  res.status(200).json({
    status: 'success',
    data: { task: updatedTask }
  });
};

//5. Görev silme
const deleteTask = (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex(task => task.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({
      status: 'error',
      message: 'Task not found'
    });
  }

  tasks = tasks.filter(task => task.id !== id);

    res.status(200).json({
      status: 'success',
      message: 'Task deleted successfully'
    });
};

module.exports = {
  getAllTasks,
  getTaskById,
    createTask,
    updateTask,
    deleteTask
};
