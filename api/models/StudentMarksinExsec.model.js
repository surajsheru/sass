const {DataTypes}=require('sequelize')
module.exports = (sequelize, Sequelize) => {
    const StudentMarks = sequelize.define('StudentMark', {
        
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
      examtype: {
      type: Sequelize.STRING
      },              
      examdate: {
      type: DataTypes.DATEONLY
      },              
      internal: {
      type: DataTypes.INTEGER
      },              
      External: {
      type: DataTypes.INTEGER
      },              
      credits: {
      type: DataTypes.INTEGER
      },              
      ExamRes: {
      type: Sequelize.STRING
      }

    },{
      timestamps: false
    },
    {freezeTableName: true
});
    
    return   StudentMarks;
  }