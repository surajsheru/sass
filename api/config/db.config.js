const env =require('./env')
const {Sequelize}=require('sequelize')

const sequelize= new Sequelize(env.database,env.username,env.password,
    {
        host:env.host,
        dialect: env.dialect,
        operatorsAliases: false,
       
        pool: {
          max: env.max,
          min: env.pool.min,
          acquire: env.pool.acquire,
          idle: env.pool.idle
        }
    });
    const db={}
    db.Sequelize=Sequelize
    db.sequelize=sequelize

    //loading models
    db.Users=require('../models/User.model')(sequelize,Sequelize)
    db.Emp_Info=require('../models/EmployeeInfoModel')(sequelize,Sequelize)
    db.EMP_Office=require('../models/EmpOffice.MOdel')(sequelize,Sequelize)
    db.Emp_Ded=require('../models/Empsaldeduction.model')(sequelize,Sequelize)
    db.Emp_Leave=require('../models/Emp.Leaves.Model')(sequelize,Sequelize)
    
    
    
    //checking for db connection
    try {
         sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }



      
      module.exports=db