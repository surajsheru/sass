const {DataTypes}=require('sequelize')
module.exports = (sequelize, Sequelize) => {
    const StudentLabInternalMarks = sequelize.define('StudentLabInternalMark', {
        
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
      midno: {
      type: DataTypes.INTEGER
      },              
      marks: {
      type: DataTypes.INTEGER
      },              
      COnos: {
      type: DataTypes.STRING
      }
      
    },{
      timestamps: false
    },
    {freezeTableName: true
});
    
    return   StudentLabInternalMarks;
  }