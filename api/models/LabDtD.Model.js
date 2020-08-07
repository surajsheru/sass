const {DataTypes}=require('sequelize')
module.exports = (sequelize, Sequelize) => {
    const StudentLabDTDMarks = sequelize.define('StudentLabDTDMark', {
        
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
      labdate: {
      type: DataTypes.DATEONLY
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
    
    return   StudentLabDTDMarks;
  }