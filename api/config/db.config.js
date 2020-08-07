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
    db.Subjects=require('../models/Subjects.Model')(sequelize,Sequelize)
    db.FacSubjects=require('../models/FacSubjects.Model')(sequelize,Sequelize)
    db.FacTT=require('../models/FacultyTT.model')(sequelize,Sequelize)
    db.StuInfo=require('../models/StudentInfo.Model')(sequelize,Sequelize)
    db.StuClassInfo=require('../models/StuClassInfo.Model')(sequelize,Sequelize)
    db.StudentMarks=require('../models/StudentMarksinExsec.model')(sequelize,Sequelize)
    db.StudentInternalMarks=require('../models/StudentInternalMarks.Model')(sequelize,Sequelize)
    db.StudentAssignmentMarks=require('../models/StudentAssignment.Model')(sequelize,Sequelize)
    db.StudentExternalMarks=require('../models/StudentExternalMarks.Model')(sequelize,Sequelize)
    db.StudentLabInternalMarks=require('../models/StudentLabInternal.Model')(sequelize,Sequelize)
    db.StudentLabExternalMarks=require('../models/StudentLabExternalMarks.model')(sequelize,Sequelize)
    db.StudentLabDTDMarks=require('../models/LabDtD.Model')(sequelize,Sequelize)
    
    
    //checking for db connection
    try {
         sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }



      
      module.exports=db