const {DataTypes}=require('sequelize')
module.exports = (sequelize, Sequelize) => {
    const StudentLabExternalMarks = sequelize.define('StudentLabExternalMark', {
        
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
      Endmarks: {
      type: DataTypes.INTEGER
      },              
      CO1: {
      type: DataTypes.INTEGER
      },              
      CO2: {
      type: DataTypes.INTEGER
      },              
      CO3: {
      type: DataTypes.INTEGER
      },              
      CO4: {
      type: DataTypes.INTEGER
      },              
      CO5: {
      type: DataTypes.INTEGER
      }
      
    },{
      timestamps: false
    },
    {freezeTableName: true
});
    
    return   StudentLabExternalMarks;
  }