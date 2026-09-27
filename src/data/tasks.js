let tasks = [
  {
    id: '1',
    title: 'Express Server Kurulumu',
    description: 'Projenin temel sunucu yapısı ve routing altyapısı hazırlanacak.',
    status: 'completed',
    priority: 'high',
    assignee: 'Merve Aydın',
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Logger Middleware Yazılması',
    description: 'Gelen HTTP isteklerini loglayan middleware geliştirilecek.',
    status: 'in_progress',
    priority: 'medium',
    assignee: 'Merve Aydın',
    createdAt: new Date().toISOString()
  }
];

module.exports = tasks;