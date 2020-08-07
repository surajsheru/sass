const {DataTypes}=require('sequelize')
module.exports = (sequelize, Sequelize) => {
    const StudentAssignmentMarks = sequelize.define('StudentAssignmentMark', {
        
        acy: {
            type: Sequelize.STRING
            
              },
        stuno: {
            type: Sequelize.STRING
            
              }
              ,              
      branch: {
      type: Sequelize.STRING
      },              
      year: {
      type: Sequelize.STRING
      },
      sem: {
      type: Sequelize.STRING
      },
      subcode: {
      type: Sequelize.STRING
      },
      assignmentno: {
      type: DataTypes.INTEGER
      },              
      marks: {
      type: DataTypes.INTEGER
      },              
      COno: {
      type: DataTypes.INTEGER
      }
      
    },{
      timestamps: false
    },
    {freezeTableName: true
});
    
    return   StudentAssignmentMarks;
  }