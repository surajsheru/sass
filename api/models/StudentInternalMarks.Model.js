const {DataTypes}=require('sequelize')
module.exports = (sequelize, Sequelize) => {
    const StudentInternalMarks = sequelize.define('StudentInternalMark', {
        
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
      midtotal: {
      type: DataTypes.INTEGER
      },              
      q1q2: {
      type: DataTypes.INTEGER
      },              
      q3q4: {
      type: DataTypes.INTEGER
      },              
      q5q6: {
      type: DataTypes.INTEGER
      },              
      q7q8: {
      type: DataTypes.INTEGER
      }
      
    },{
      timestamps: false
    },
    {freezeTableName: true
});
    
    return   StudentInternalMarks;
  }