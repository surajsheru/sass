const {DataTypes}=require('sequelize')
module.exports = (sequelize, Sequelize) => {
    const StudentClassInfo = sequelize.define('StudentClass', {
        stuno: {
            type: Sequelize.STRING
            
              },
              acy: {
      type: Sequelize.STRING
      
        },
      year: {
      type: Sequelize.STRING
      },
      sem: {
      type: Sequelize.STRING
      },
      stuclsid: {
      type: Sequelize.STRING
      },
      stucoun: {
      type: Sequelize.STRING
      }
    },{
      timestamps: false
    },
    {freezeTableName: true
});
    
    return   StudentClassInfo;
  }