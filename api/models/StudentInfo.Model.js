const {DataTypes}=require('sequelize')
module.exports = (sequelize, Sequelize) => {
    const StudentInfo = sequelize.define('Student', {
        stuno: {
            type: Sequelize.STRING
            
              },
              stuname: {
      type: Sequelize.STRING
      
        },
      stufname: {
      type: Sequelize.STRING
      },
      stumname: {
      type: Sequelize.STRING
      },
      stugender: {
      type: Sequelize.STRING
      },
      studob: {
      type: DataTypes.DATEONLY
      },
      stuaddr: {
      type: Sequelize.STRING
      },
      studept: {
      type: Sequelize.STRING
      },
      stuphno: {
        type: DataTypes.BIGINT
        },
        stuemail: {
        type: Sequelize.STRING
        },
         stuperphone: {
          type: DataTypes.BIGINT
          },
          studoj: {
          type: DataTypes.DATEONLY
          }
    },{
      timestamps: false
    },
    {freezeTableName: true
});
    
    return   StudentInfo;
  }