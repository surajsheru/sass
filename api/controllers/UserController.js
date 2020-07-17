const db=require('../config/db.config')
const Users=db.Users
let bcrypt=require('bcryptjs');
const { Op } = require('sequelize');
//creae a user post a user
exports.create = (req, res) => {  
    // Save User  to MySQL database
    bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(req.body.pwd, salt, function(err, hash) {
        // Store hash in your password DB.
        req.body.pwd=hash
    });
});
    const user={
        un:req.body.un,
        pwd:req.body.pwd,
        utype:req.body.utype
    }
//alert(user.utype)
Users.findOrCreate({
    where: { un: user.un },
    defaults: {
      un:user.un,
      pwd:user.pwd,
      utype:user.utype
    }
  }).then(([user,reg])=>{
    
    res.send(reg)})
  .catch(err => {
    res.status(500).send("Error -> " + err);
  })
  };

  exports.login=(req,res)=>{
    const user={
      un:req.body.un,
      pwd:req.body.pwd,
      utype:req.body.utype
  }
    Users.findOne({ 
      where:{
      [Op.and]:[{ un:user.un },{pwd:user.pwd}]
    } })
    .then(nuser=>{
      res.send(nuser)
    })
    .catch(err => {
      res.status(500).send("Error -> " + err);
    })
    
  }
  //fetching all uasers
  exports.findAll = (req, res) => {
    Users.findAll().then(users => {
      // Send all Books to Client
      res.send(users);
    }).catch(err => {
      res.status(500).send("Error -> " + err);
    })
  };

  // Find a Customer by Id
exports.findById = (req, res) => {  
    Users.findById(req.params.name).then(user => {
      res.send(user);
    }).catch(err => {
      res.status(500).send("Error -> " + err);
    })
  };
   
  
  // Update a User
  exports.update = (req, res) => {
    var user = req.body;
    //const name = req.params.name;
    Users.update({ 
            un: req.body.un,
            author: req.body.pwd,
            
          }, 
          { 
            where: {
              name: req.params.name
            } 
          })
          .then(() => {
              res.status(200).send(user);
             }).catch(err => {
              res.status(500).send("Error -> " + err);
             })
  };
   
  // Delete a Book by Id
  exports.delete = (req, res) => {
    const name = req.params.name;
    Books.destroy({
          where: { un: name }
        }).then(() => {
          res.status(200).send('user has been deleted!');
        }).catch(err => {
          res.status(500).send("Fail to delete!");
        });
  };