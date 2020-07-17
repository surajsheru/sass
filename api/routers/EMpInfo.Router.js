module.exports = function(app) {
 
    const Emp_Info = require('../controllers/EmpInfoController');
 
    // Create a new user
    app.post('/create', Emp_Info.create);
  //Login user
   app.post('/empinfo',Emp_Info.empinfo)
    // Retrieve all users
    app.get('/emps', Emp_Info.findAll);
 
    // Retrieve a single user by Id
    app.get('/empsname', Emp_Info.findByname);
   
    // Update a user with Id
    app.put('/emp/:empid', Emp_Info.update);
 
    // Delete a user with Id
    app.delete('/emp/:empid', Emp_Info.delete);
}