module.exports = function(app) {
 
    const users = require('../controllers/UserController');
 
    // Create a new user
    app.post('/create', users.create);
  //Login user
   app.post('/login',users.login)
    // Retrieve all users
    app.get('/users', users.findAll);
 
    // Retrieve a single user by Id
    app.get('/users/:name', users.findById);
   
    // Update a user with Id
    app.put('/users/:name', users.update);
 
    // Delete a user with Id
    app.delete('/users/:name', users.delete);
}