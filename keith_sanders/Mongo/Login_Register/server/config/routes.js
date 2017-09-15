const Users = require('../controllers/users');

module.exports = function(app){
  app.get('/', Users.begin);
  app.post('/users', Users.create);
  app.post('/users/authen', Users.authen);
  app.get('/session', Users.loggedin);
  app.get('/logout', Users.logout);
  app.get('/main', Users.main);
}
