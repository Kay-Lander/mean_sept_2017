const Tasks = require('../controllers/tasks')

module.export = function(app) {
  app.get('/tasks', Tasks.index);
  app.post('/tasks', Tasks.create);
  app.get('/tasks/:id', Tasks.show);
  app.put('/tasks/:id', Tasks.update);
  app.delete('/tasks/:id', Tasks.destroy);
}
